import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {TopMenuOptions} from '../../../../models/TopMenuOptions';
import {MainNavComponent} from '../main-nav.component';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sub-sections-helper',
  templateUrl: './sub-sections-helper.component.html',
  styleUrls: ['./sub-sections-helper.component.css']
})
export class SubSectionsHelperComponent implements OnInit {
  @Input() nameElement: string;
  @Input() subElements: TopMenuOptions[];
  @Input() heightTopNav: number;

  public isShowElements = false;

  constructor(private viewPort: ViewportScroller, private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateTo(index: number): void {
    const element = document.getElementById(this.subElements[index].idToGo);

    if ((this.subElements[index].url === '' || null) && (!element)) {
      this.router.navigateByUrl(this.subElements[index].alternativeURL);
    } else {
      const scrollPosition = element.offsetTop - this.heightTopNav - 30;
      this.viewPort.scrollToPosition([0, scrollPosition]);
      // this.router.navigateByUrl(this.subElements[index].url);
    }

    this.isShowElements = false;
  }

  showElements(): void {
    this.isShowElements = true;

  }

  hiddenElements(): void {
    this.isShowElements = false;
  }
}
