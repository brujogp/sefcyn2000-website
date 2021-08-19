import {Component, OnInit} from '@angular/core';
import {Breakpoints} from '@angular/cdk/layout';
import {ResolutionScreenService} from '../../../services/resolution-screen.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public isHandset: boolean;
  public isTablet: boolean;
  public isWeb: boolean;

  public isPhoneLandscape: boolean;
  public isTabletLandscape: boolean;

  constructor(private resolutionService: ResolutionScreenService) {
    this.isWeb = resolutionService.isWeb;
    this.isTablet = resolutionService.isTablet;
    this.isHandset = resolutionService.isPhone;

    this.isPhoneLandscape = resolutionService.isPhoneLandscape;
    this.isTabletLandscape = resolutionService.isTabletLandscape;

    console.log(this.isTabletLandscape);
    console.log(this.isPhoneLandscape);

    this.resolutionService.observeWebSize.subscribe(result => {
      this.isWeb = result;
    });

    this.resolutionService.observeTabletSize.subscribe(result => {
      this.isTablet = result;
    });

    this.resolutionService.observeWebSize.subscribe(result => {
      this.isWeb = result;
    });

    this.resolutionService.observePhoneLandscapeSize.subscribe(result => {
      this.isPhoneLandscape = result;
    });
    this.resolutionService.observeTabletLandscapeSize.subscribe(result => {
      this.isTabletLandscape = result;
    });
  }

  ngOnInit(): void {
  }
}
