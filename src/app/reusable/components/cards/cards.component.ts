import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from './card-model/card-model.type';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() public dataForCards: CardModel[];

  constructor(private viewPortScroll: ViewportScroller, private router: Router) {
  }

  ngOnInit(): void {
  }

  goTo(i: number): void {
    if ((this.dataForCards[i].idOfElement !== '' || null) && (this.dataForCards[i].urlToGo !== null || '')) {
      const element = document.getElementById(this.dataForCards[i].idOfElement);
      const header = document.getElementById('top-nav');
      this.viewPortScroll.scrollToPosition([0, element.offsetTop - header.offsetHeight - 20]);

    } else {
      this.router.navigateByUrl(this.dataForCards[i].urlToGo);
    }
  }
}
