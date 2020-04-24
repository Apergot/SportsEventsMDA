import { Component, OnInit } from "@angular/core";
import { User } from "../users/user";
import { Role } from "../users/role";
import { UserService } from "../users/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import swal from "sweetalert2";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"],
})
export class UserFormComponent implements OnInit {
  user: User = new User();
  title: string = "Create User";

  errors: string[];

  roles: Role[] = [
    { id: 1, name: "ROLE_USER" },
    { id: 2, name: "ROLE_ADMIN" },
  ];

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = +params.get("id");
      if (id) {
        this.title = "Update user";
        this.userService.getUser(id).subscribe((user) => {
          this.user = user;
          console.log(user);
        });
      }
    });
  }

  create() {
    this.userService.create(this.user).subscribe(
      (user) => {
        this.router.navigate(["/users"]);
        swal.fire("New user", `User has been created successfully`, "success");
      },
      (err) => {
        this.errors = err.error.errors as string[];
        console.error("Backend code error: " + err.status);
        console.error(err.error.errors);
      }
    );
  }

  update() {
    this.userService.update(this.user).subscribe(
      (user) => {
        this.router.navigate(["/users"]);
        swal.fire(
          "User updated",
          `User has been updated successfully`,
          "success"
        );
      },
      (err) => {
        this.errors = err.error.errors as string[];
        console.error("Backend code error: " + err.status);
        console.error(err.error.errors);
      }
    );
  }
}
