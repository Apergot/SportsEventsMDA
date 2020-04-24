import { Component, OnInit } from "@angular/core";
import swal from "sweetalert2";
import { User } from "./user";
import { UserService } from "./user.service";
import { Role } from "./role";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  displayRoles(roles: Role[]) {
    var isAdmin: boolean = false;
    var isUser: boolean = false;

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name == "ROLE_ADMIN") {
        isAdmin = !isAdmin;
      }
      if (roles[i].name == "ROLE_USER") {
        isUser = !isUser;
      }
    }

    if (isAdmin && isUser) {
      return "User and Admin";
    } else if (isAdmin && !isUser) {
      return "Admin";
    } else if (isUser && !isAdmin) {
      return "User";
    }
  }

  delete(user: User): void {
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.value) {
          this.userService.delete(user.id).subscribe(() => {
            this.users = this.users.filter((u) => u !== user);
            swal.fire(
              "User Removed",
              `User ${user.username} removed successfully!`,
              "success"
            );
          });
        }
      });
  }
}
