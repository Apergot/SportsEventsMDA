import {Component, OnInit} from '@angular/core';
import {Rivalry} from '../rivalry';
import {RivalryService} from '../rivalry.service';
import swal from 'sweetalert2';

declare const toast: any;

@Component({
  selector: 'app-admin-rivalries',
  templateUrl: './admin-rivalries.component.html'
})
export class AdminRivalriesComponent implements OnInit {
  rivalries: Rivalry[];

  constructor(private rivalryService: RivalryService) {
  }

  ngOnInit(): void {
    this.rivalryService.getRivalries().subscribe((rivalries) => (this.rivalries = rivalries));
  }

  delete(rivalry: Rivalry): void {
    swal
      .fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })
      .then((result) => {
        if (result.value) {
          this.rivalryService.delete(rivalry.id).subscribe(() => {
            this.rivalries = this.rivalries.filter((r) => r !== rivalry);
            toast().fire({
              icon: 'success',
              title: `User ${rivalry.rivalryname} removed successfully!`
            });
          });
        }
      });
  }

}
