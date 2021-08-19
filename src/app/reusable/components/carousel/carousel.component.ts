import {EventEmitter, Component, OnInit, Output, Input, HostListener} from '@angular/core';
import {CurrentResolutionService} from '../../../services/current-resolution.service';
import {Pests} from '../../../models/Pests';
import {CommunicationService} from '../../../services/communication.service';
import {ViewportScroller} from '@angular/common';
import {LocalStorageKey} from '../../../models/enumerations/localstorage-key.enumeration';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Output() eventGoTo: EventEmitter<string> = new EventEmitter<string>();
  @Input() pests: Pests[];

  public pestToChildren: Pests;

  width = 100;
  numberElements: number;
  heightCarousel: number;

  indexPestParent = -1;


  constructor(private isMobileService: CurrentResolutionService,
              private communicationService: CommunicationService) {
  }

  ngOnInit(): void {
    this.heightCarousel = 470;
    if (this.isMobileService.getIsMobileScreen()) {
      this.numberElements = 1;
    } else {
      this.numberElements = 3;
    }

  }

  showSecondCarousel(index: number): void {
    if (this.indexPestParent > -1) {
      this.indexPestParent = -1;
    }

    setTimeout(() => {
      if (this.indexPestParent === -1) {
        this.indexPestParent = index;
        this.pestToChildren = this.pests[index];
      }
    }, 50);
  }

  pressPest(i: number): void {
    let pestArray: Array<string>;
    const auxiliaryItemArray: Array<string> = JSON.parse(localStorage.getItem(LocalStorageKey.PESTS_SELECTED));

    if (auxiliaryItemArray) {
      pestArray = auxiliaryItemArray;
    } else {
      pestArray = new Array<string>();
    }

    pestArray.push(this.pests[i].name);


    localStorage.setItem(LocalStorageKey.PESTS_SELECTED, JSON.stringify(pestArray));

    this.communicationService.changeCurrentStep(3);
  }
}
