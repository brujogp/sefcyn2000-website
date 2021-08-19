import {Component, Input, OnInit} from '@angular/core';
import {RelationalPagesModel} from './relational-pages.model/relational-pages.model';

@Component({
  selector: 'app-relational-pages',
  templateUrl: './relational-pages.component.html',
  styleUrls: ['./relational-pages.component.css']
})
export class RelationalPagesComponent implements OnInit {
  @Input() public relationalPages: RelationalPagesModel[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
