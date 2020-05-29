import {Component, OnInit} from '@angular/core';
import {Rivalry} from '../rivalry';
import {RivalryService} from '../rivalry.service';
import {Role} from '../../users/role';

@Component({
  selector: 'app-site-rivalries',
  templateUrl: './site-rivalries.component.html',
  styleUrls: ['./site-rivalries.component.css']
})
export class SiteRivalriesComponent implements OnInit {
  rivalries: Rivalry[];

  constructor(private rivalryService: RivalryService) {
  }

  ngOnInit(): void {
    this.rivalryService.getRivalries().subscribe((rivalries) => (this.rivalries = rivalries));
  }

  displayPorcentage(capacity: number, enrolled: number) {
    const porcentage = Math.round(((enrolled * 100) / capacity));
    return porcentage + '%';
  }

}
