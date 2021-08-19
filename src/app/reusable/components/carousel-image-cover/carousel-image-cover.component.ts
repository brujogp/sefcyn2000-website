import {Component, Input, OnInit} from '@angular/core';
import {CurrentResolutionService} from '../../../services/current-resolution.service';
import {InfoToCards} from '../../../models/InfoToCards';

@Component({
  selector: 'app-carousel-image-cover',
  templateUrl: './carousel-image-cover.component.html',
  styleUrls: ['./carousel-image-cover.component.css']
})
export class CarouselImageCoverComponent implements OnInit {
  @Input() public info: InfoToCards[] = [];
  @Input() public heightCarousel: number;
  @Input() public numberElements: number;

  constructor(/*private isMobileService: CurrentResolutionService*/) {
  }

  ngOnInit(): void {
    this.heightCarousel = 360;
    /*
    if (this.isMobileService.getIsMobileScreen()) {
      this.numberElements = 1;
    } else {
      this.numberElements = 3;
    }
     */

  }
}
