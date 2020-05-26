import {Component, OnInit} from '@angular/core';
import {Rivalry} from '../rivalry';
import {ActivatedRoute, Router} from '@angular/router';
import {RivalryService} from '../rivalry.service';

declare const toast: any;

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

  create() {
    this.rivalryService.create(this.rivalry).subscribe(
      () => {
        this.router.navigate(['/rivalries']);
        toast().fire({
          icon: 'success',
          title: `Rivalry has been created successfully`
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

  update() {
    this.rivalryService.update(this.rivalry).subscribe(
      () => {
        this.router.navigate(['/rivalries']);
        toast().fire({
          icon: 'success',
          title: `Rivalry has been updated successfully`,
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
