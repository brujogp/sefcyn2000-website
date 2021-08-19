import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommunicationService} from '../../../services/communication.service';
import {CurrentResolutionService} from '../../../services/current-resolution.service';
import {LocalStorageKey} from '../../../models/enumerations/localstorage-key.enumeration';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})

export class StepThreeComponent implements OnInit {
  currentStep = 3;

  public namePests: string[];
  public nameZonesHouse: string[];

  public urlToWhatsapp: string;
  public isMobile: boolean;

  constructor(private communicationService: CommunicationService, private currentResolution: CurrentResolutionService) {
  }

  ngOnInit(): void {
    this.isMobile = this.currentResolution.getIsMobileScreen();

    if (localStorage.getItem(LocalStorageKey.ZONE_HOME)) {
      this.nameZonesHouse = JSON.parse(localStorage.getItem(LocalStorageKey.ZONE_HOME));
    }

    if (localStorage.getItem(LocalStorageKey.PESTS_SELECTED)) {
      this.namePests = JSON.parse(localStorage.getItem(LocalStorageKey.PESTS_SELECTED));
    }

    // tslint:disable-next-line:max-line-length
    // this.urlToWhatsapp = 'https://wa.me/5215618520118?text=Zona%20de%20la%20casa: ' + this.nameZonesHouse + '%20Peste:%20' + this.namePests;
  }


  addAnotherPest(): void {
    this.communicationService.changeCurrentStep(1);
  }
}
