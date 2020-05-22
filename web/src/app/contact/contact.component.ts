import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from './contact';
import {ContactService} from './contact.service';
import {RivalryService} from '../rivalries/rivalry.service';
import {UserService} from '../users/user.service';

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
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    console.log('GO IN ...');
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = +params.get('id');
      if (id) {
        this.userService.getUser(id).subscribe((user) => {
          this.contact.name = user.firstname + ' ' + user.lastname;
          this.contact.email = user.email;
          console.log(user);
        });
      }
    });
  }

  sendMessage() {
    console.log(this.contact);
    console.log(this.contact.name + ' ' + this.contact.email + ' ' + this.contact.subject + ' ' + this.contact.message);

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
