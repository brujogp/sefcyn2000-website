import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CurrentResolutionService} from '../../services/current-resolution.service';
import {CommunicationService} from '../../services/communication.service';
import {ViewportScroller} from '@angular/common';
import {LocalStorageKey} from '../../models/enumerations/localstorage-key.enumeration';
import {CardModel} from '../../reusable/components/cards/card-model/card-model.type';

@Component({
  selector: 'app-residential-section',
  templateUrl: './residential-section.component.html',
  styleUrls: ['./residential-section.component.css']
})
export class ResidentialSectionComponent implements OnInit {
  imgUrl = 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/header-residential.jpg';
  slogan = 'Protejemos la Salud de tu familia en tres pasos';
  isMobile: boolean;

  currentStep = 1;
  titleStepTwo: string;
  infoToStepTwo: { name: string, urlImg: string, text: string } = {name: '', urlImg: '', text: ''};

  public dataForCards: CardModel[];

  constructor(isMobile: CurrentResolutionService, private communicationService: CommunicationService, private viewport: ViewportScroller) {
    this.isMobile = isMobile.getIsMobileScreen();
  }

  ngOnInit(): void {
    this.communicationService.observerStepSelected.subscribe(value => {
      this.currentStep = value;
      // tslint:disable-next-line:max-line-length
      // this.viewport.scrollToPosition([0, document.getElementById('parent-section').offsetHeight + document.getElementById('header').offsetHeight]);

      /*        this.viewport.scrollToPosition([0,
                document.getElementById('parent-section').offsetHeight
                + document.getElementById('header').offsetHeight
                + document.getElementById('top-nav').offsetHeight]);

       */

      const parentSection = document.getElementById('parent-section');
      const positionToScroll = parentSection.offsetTop + parentSection.offsetHeight;

      this.viewport.scrollToPosition([0, positionToScroll]);
    });

    this.dataForCards = [
      {
        name: 'Primer paso',
        urlToGo: '/tratamientos',
        urlImg: 'assets/images/inspec.jpeg',
        text: 'Un especialista de servicio visitará su hogar para efectuar una inspección minuciosa y le ofrecerá un diagnostico: tipo de plaga, riesgos, grado de infestación y causa probable de contagio.',
        textLink: 'Saber más',
        idOfElement: ''
      },
      {
        name: 'Segundo paso',
        urlToGo: '/tratamientos',
        urlImg: 'assets/images/inspec2.jpeg',
        text: 'Partiendo del Diagnostico, su especialista le mostrará las alternativas viables de acuerdo a su necesidad y presupuesto. Todos nuestros tratamientos incluyen: métodos de control, medidas correctivas y\n                  preventivas y fichas técnicas informativas de los activos que se utilizarán en su hogar.',
        textLink: 'Saber más',
        idOfElement: ''
      },
      {
        name: 'Tercer paso',
        urlToGo: '/tratamientos',
        urlImg: 'assets/images/gar.png',
        text: 'Nuestra póliza de servicio explica la problemática de plaga, el mejor tratamiento y el modelo de garantía que ofrecemos, por escrito.',
        textLink: 'Saber más',
        idOfElement: ''
      },
    ];
  }

  showStep1(): void {
    this.currentStep = 1;
  }

  /*
    ngOnDestroy(): void {
      if (localStorage.getItem(LocalStorageKey.ZONE_HOME)) {
        localStorage.removeItem(LocalStorageKey.ZONE_HOME);
      }

      if (localStorage.getItem(LocalStorageKey.PESTS_SELECTED)) {
        localStorage.removeItem(LocalStorageKey.PESTS_SELECTED);
      }
    }
   */
}
