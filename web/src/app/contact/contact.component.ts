import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from './contact';
import {ContactService} from './contact.service';
import {UserService} from '../users/user.service';
import {AuthService} from '../auth/auth.service';

declare const toast: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  contact: Contact = new Contact();
  title = 'Contact - Who we are';

  errors: string[];

  constructor(
    private contactService: ContactService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.contact.name = this.authService.user.firstname + ' ' + this.authService.user.lastname;
      this.contact.email = this.authService.user.email;
      console.log(this.authService.user);
    }
  }

  sendMessage() {
    this.contactService.sendContactForm(this.contact).subscribe(
      () => {
        this.router.navigate(['/contact']);
        toast().fire({
          icon: 'success',
          title: `Message has been sent successfully`
        });
      },
      (err) => {
        this.errors = err.error.errors as string[];
        console.error('Backend code error: ' + err.status);
        console.error(err.error.errors);
        toast().fire({
          icon: 'error',
          title: 'Server error: ' + err.status
        });
      }
    );
  }

}
