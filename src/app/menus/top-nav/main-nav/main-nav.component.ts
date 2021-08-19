import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CurrentResolutionService} from '../../../services/current-resolution.service';
import {animationMenuItemsTrigger, animationMenuTrigger} from '../../../animations/menu/menu.animations';
import {TopMenuOptions} from '../../../models/TopMenuOptions';
import {ResolutionScreenService} from '../../../services/resolution-screen.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  animations: [
    animationMenuTrigger,
    animationMenuItemsTrigger
  ]
})
export class MainNavComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('topNav') topNav: ElementRef;

  residentialSection: HTMLElement;
  commercialSection: HTMLElement;
  industrialSection: HTMLElement;

  isMobile: boolean;
  show = false;

  public topMenuEquipment: TopMenuOptions[];
  public topMenuServices: TopMenuOptions[];

  public heightNavTop: number;
  public branchOffices: string[];

  public isHandset: boolean;
  public isTablet: boolean;
  public isWeb: boolean;

  constructor(private resolutionScreen: ResolutionScreenService, currentResolution: CurrentResolutionService) {
    this.isMobile = currentResolution.getIsMobileScreen();

    this.isHandset = this.resolutionScreen.isPhone;
    this.isTablet = this.resolutionScreen.isTablet;
    this.isWeb = this.resolutionScreen.isWeb;

    this.resolutionScreen.observeHandsetSize.subscribe(result => {
      this.isHandset = result;
    });

    this.resolutionScreen.observeTabletSize.subscribe(result => {
      this.isTablet = result;
    });

    this.resolutionScreen.observeWebSize.subscribe(result => {
      this.isWeb = result;
    });
  }

  ngOnInit(): void {
    this.topMenuEquipment = [
      {
        name: 'Equipo 1',
        url: '/residential',
        idToGo: '',
        alternativeURL: ''
      },
      {
        name: 'Equipo 2',
        url: '/residential',
        idToGo: '',
        alternativeURL: ''
      }, {
        name: 'Equipo 3',
        url: '/residential',
        idToGo: '',
        alternativeURL: ''
      }, {
        name: 'Equipo 4',
        url: '/residential',
        idToGo: '',
        alternativeURL: ''
      }
    ];

    this.topMenuServices = [
      {
        name: 'Soluciones para el hogar y condominios',
        url: '',
        idToGo: 'residential-section',
        alternativeURL: '/residential'
      },
      {
        name: 'Servicios para empresas',
        url: '',
        idToGo: 'commercial-section',
        alternativeURL: '/commercial'
      }, {
        name: 'Servicios para la industria',
        url: '',
        idToGo: 'industrial-section',
        alternativeURL: '/industrial'
      }
    ];

    this.branchOffices = ['Ensenada, Baja California', 'Monterrey', 'León', 'Querétaro', 'Toluca', 'Estado de México', 'CDMX', 'Morelos', 'Puebla', 'Veracruz', 'Orizaba', 'Cancún', 'Puerto Morelos', 'Cozumel'];


  }

  ngAfterViewInit(): void {
    this.heightNavTop = (this.topNav.nativeElement as HTMLElement).offsetHeight;

    this.residentialSection = document.getElementById('residential-section');
    this.commercialSection = document.getElementById('commercial-section');
    this.industrialSection = document.getElementById('industrial-section');

  }

  ngAfterViewChecked(): void {


  }

  showHiddenMenu(): void {
    this.show = !this.show;
  }

}
