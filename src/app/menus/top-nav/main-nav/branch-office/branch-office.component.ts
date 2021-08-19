import {Component, Input, OnInit} from '@angular/core';
import {TopMenuOptions} from '../../../../models/TopMenuOptions';

@Component({
  selector: 'app-branch-office',
  templateUrl: './branch-office.component.html',
  styleUrls: ['./branch-office.component.css']
})
export class BranchOfficeComponent implements OnInit {
  @Input() nameElement: string;
  @Input() subElements: string[];

  public isShowElements = false;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.subElements);
  }

  showElements(): void {
    this.isShowElements = true;

  }

  hiddenElements(): void {
    this.isShowElements = false;
  }
}
