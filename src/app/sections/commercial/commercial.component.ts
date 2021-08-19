import {Component, OnInit} from '@angular/core';
import {CurrentResolutionService} from '../../services/current-resolution.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {
  imgUrl = 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/commercial.jpg';

  heightCarousel: number;
  numberElements: number;

  constructor(private isMobileService: CurrentResolutionService) {
  }

  ngOnInit(): void {
    this.heightCarousel = 470;
    if (this.isMobileService.getIsMobileScreen()) {
      this.numberElements = 1;
    } else {
      this.numberElements = 3;
    }
  }

}
