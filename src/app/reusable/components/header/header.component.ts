import {Component, Input, OnInit} from '@angular/core';
import {CurrentResolutionService} from '../../../services/current-resolution.service';
import {ViewportScroller} from '@angular/common';
import {ResolutionScreenService} from '../../../services/resolution-screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() urlImageHeader: string;
  @Input() isShowNav: boolean;
  @Input() slogan = '';

  public isHandset: boolean;
  public isTablet: boolean;
  public isWeb: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private resolutionScreenService: ResolutionScreenService, private viewPort: ViewportScroller) {

    this.isWeb = this.resolutionScreenService.isWeb;
    this.isTablet = this.resolutionScreenService.isTablet;
    this.isHandset = this.resolutionScreenService.isPhone;

    this.resolutionScreenService.observeWebSize.subscribe(result => {
      this.isWeb = result;
    });

    this.resolutionScreenService.observeTabletSize.subscribe(result => {
      this.isTablet = result;
    });

    this.resolutionScreenService.observeHandsetSize.subscribe(result => {
      this.isHandset = result;
    });
  }

  ngOnInit(): void {
  }

  scroll(): void {
    this.viewPort.scrollToPosition([0, document.getElementById('StOn').offsetTop]);
  }
}
