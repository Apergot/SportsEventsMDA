import {Component, OnInit} from '@angular/core';
import {RivalryService} from '../rivalries/rivalry.service';
import {Router} from '@angular/router';

declare const toast: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  errors: string[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  sendMessage() {
    /*this.rivalryService.create(this.rivalry).subscribe(
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
    );*/
  }

}
