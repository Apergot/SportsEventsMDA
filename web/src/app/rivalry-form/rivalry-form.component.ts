import {Component, OnInit} from '@angular/core';
import {Rivalry} from '../rivalries/rivalry';
import {ActivatedRoute, Router} from '@angular/router';
import {RivalryService} from '../rivalries/rivalry.service';
import swal from 'sweetalert2';

declare const datepicker: any;

@Component({
  selector: 'app-rivalry-form',
  templateUrl: './rivalry-form.component.html'
})
export class RivalryFormComponent implements OnInit {
  rivalry: Rivalry = new Rivalry();
  title = 'Create Rivalry';

  errors: string[];

  constructor(
    private rivalryService: RivalryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = +params.get('id');
      if (id) {
        this.title = 'Update rivalry';
        this.rivalryService.getRivalry(id).subscribe((rivalry) => {
          this.rivalry = rivalry;
          console.log(rivalry);
        });
      }
    });
  }

  onClickDatepicker() {
    datepicker();
  }

  create() {
    this.rivalryService.create(this.rivalry).subscribe(
      () => {
        this.router.navigate(['/rivalries']);
        swal.fire('New rivalry', `Rivalry has been created successfully`, 'success');
      },
      (err) => {
        this.errors = err.error.errors as string[];
        console.error('Backend code error: ' + err.status);
        console.error(err.error.errors);
      }
    );
  }

  update() {
    this.rivalryService.update(this.rivalry).subscribe(
      () => {
        this.router.navigate(['/rivalries']);
        swal.fire(
          'Rivalry updated',
          `Rivalry has been updated successfully`,
          'success'
        );
      },
      (err) => {
        this.errors = err.error.errors as string[];
        console.error('Backend code error: ' + err.status);
        console.error(err.error.errors);
      }
    );
  }
}
