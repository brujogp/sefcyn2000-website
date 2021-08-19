import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CurrentResolutionService} from '../../../../services/current-resolution.service';
import {CommunicationService} from '../../../../services/communication.service';
import {Pests} from '../../../../models/Pests';
import {ViewportScroller} from '@angular/common';
import {SplitByFirstWordPipe} from '../../../../pipes/splitByFirstWord.pipe';
import {LocalStorageKey} from '../../../../models/enumerations/localstorage-key.enumeration';

@Component({
  selector: 'app-second-carousel',
  templateUrl: './second-carousel.component.html',
  styleUrls: ['./second-carousel.component.css']
})
export class SecondCarouselComponent implements OnInit, AfterViewInit {

  @Input() indexFromParent: number;
  @Input() pestsFromParent: Pests;

  public heightCarousel: number;
  public numberElements: number;


  constructor(private isMobileService: CurrentResolutionService,
              private communicationService: CommunicationService,
              private viewport: ViewportScroller) {
  }

  ngOnInit(): void {

    this.heightCarousel = 470;
    if (this.isMobileService.getIsMobileScreen()) {
      this.numberElements = 1;
    } else {
      this.numberElements = 3;
    }
  }


  pressGender(i: number): void {
    let pestArray: Array<string>;
    const auxiliaryItemArray: Array<string> = JSON.parse(localStorage.getItem('pest-selected'));

    if (auxiliaryItemArray) {
      pestArray = auxiliaryItemArray;
    } else {
      pestArray = new Array<string>();
    }
    pestArray.push(this.pestsFromParent.gender[i].name);
    localStorage.setItem(LocalStorageKey.PESTS_SELECTED, JSON.stringify(pestArray));

    this.communicationService.changeCurrentStep(3);
  }

  ngAfterViewInit(): void {

    const cs = document.getElementById('sc');

    const csHeight = cs.offsetTop;

    this.viewport.scrollToPosition([0, csHeight - 80]);
  }
}
