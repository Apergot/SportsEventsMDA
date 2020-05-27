import { Component, OnInit } from '@angular/core';
import {Rivalry} from '../rivalry';
import {RivalryService} from '../rivalry.service';

@Component({
  selector: 'app-site-rivalries',
  templateUrl: './site-rivalries.component.html',
  styleUrls: ['./site-rivalries.component.css']
})
export class SiteRivalriesComponent implements OnInit {
  rivalries: Rivalry[];

  constructor(private rivalryService: RivalryService) { }

  ngOnInit(): void {
    this.rivalryService.getRivalries().subscribe((rivalries) => (this.rivalries = rivalries));
  }

}
