import {Component, OnInit} from '@angular/core';

declare const highlightCurrentPageInNav: any;

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    highlightCurrentPageInNav();
  }

}
