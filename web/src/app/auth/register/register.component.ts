import { Component, OnInit } from "@angular/core";
import { User } from "../../users/user";
import { Role } from "src/app/users/role";
import { UserService } from "src/app/users/user.service";
import { Router, ActivatedRoute } from "@angular/router";
declare const toast: any;
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  title = "Register";

  errors: string[];

  roles: Role[] = [{ id: 1, name: "ROLE_USER" }];

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user.roles = this.roles;
  }

  create() {
    this.userService.create(this.user).subscribe(
      () => {
        this.router.navigate(["/users"]);
        toast().fire({
          icon: "success",
          title: `User has been created successfully`,
        });
      },
      (err) => {
        this.errors = err.error.errors as string[];
        console.error("Backend code error: " + err.status);
        console.error(err.error.errors);
        toast().fire({
          icon: "error",
          title: "Server error: " + err.status,
        });
      }
    );
  }
}
