import {Component, OnInit} from '@angular/core';
import {Rivalry} from './rivalry';
import {RivalryService} from './rivalry.service';

@Component({
  selector: 'app-rivalries',
  templateUrl: './rivalries.component.html',
  styleUrls: ['./rivalries.component.css']
})
export class RivalriesComponent implements OnInit {
  rivalries: Rivalry[];

  constructor(private rivalryService: RivalryService) {}

  ngOnInit(): void {
    this.rivalryService.getRivalries().subscribe((rivalries) => (this.rivalries = rivalries));
  }

}
