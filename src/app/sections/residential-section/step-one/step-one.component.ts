import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CommunicationService} from '../../../services/communication.service';
import {LocalStorageKey} from '../../../models/enumerations/localstorage-key.enumeration';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  @Output() infoFromStepOne = new EventEmitter<{ name: string, urlImg: string, text: string }>();
  @Output() titleFromStepOne = new EventEmitter<string>();

  infoToStepTwo: { name: string, urlImg: string, text: string } = {name: '', urlImg: '', text: ''};
  titleStepTwo: string;

  constructor(private communicationService: CommunicationService) {
  }

  ngOnInit(): void {
  }

  pressImage(itemFormSelected: HTMLImageElement): void {
    switch (itemFormSelected.id) {
      case 'cocina': {
        this.titleStepTwo = 'la cocina';
        this.infoToStepTwo.urlImg = itemFormSelected.src;
        this.infoToStepTwo.name = 'Cocina';
        this.infoToStepTwo.text = 'Esta sección del hogar representa el punto más crítico de cualquier programa de control ya que aquí se encuentra nuestra alacena de alimentos y es el.pubtl donde se preparan para luego consumir por parte de nuestra familia.';
        break;
      }
      case 'baño': {
        this.titleStepTwo = 'el baño';
        this.infoToStepTwo.urlImg = itemFormSelected.src;
        this.infoToStepTwo.name = 'Baño';
        this.infoToStepTwo.text = 'En esta área de nuestro hogar debemos asegurar que NO existan puntos que permitan el acceso, refugio y reproducción de plaga.';
        break;
      }
      case 'cuarto': {
        this.titleStepTwo = 'la habitación';
        this.infoToStepTwo.urlImg = itemFormSelected.src;
        this.infoToStepTwo.name = 'Habitación';
        this.infoToStepTwo.text = 'Sin duda nuestra recamara se convierte en un recinto del hogar donde más tiempo pasamos, para cierto tipo de plagas es el lugar ideal para vivir y reproducirse.';
        break;
      }
      case 'jardin': {
        this.titleStepTwo = 'el jardín';
        this.infoToStepTwo.urlImg = itemFormSelected.src;
        this.infoToStepTwo.name = 'Jardín';
        this.infoToStepTwo.text = 'En esta zona perimetral del hogar pueden estar los mayores riesgos de acceso de plagas hacia el interior del hogar, de hecho es un punto crítico para ver inspeccionar a detalle y evaluar los riesgos potenciales que puede representar.';
        break;
      }
      case 'estancia': {
        this.titleStepTwo = 'la estancia';
        this.infoToStepTwo.urlImg = itemFormSelected.src;
        this.infoToStepTwo.name = 'Estancia';
        this.infoToStepTwo.text = 'En esta sección del hogar pudiéramos tener el mayor riesgo de contagio por plagas ya que se trata de un sitio donde después de la cocina , puede haber el mayor número de atractivos alimenticios para diversas plagas.';
        break;
      }
    }

    // Verifíca que el Storage esté limipio para almecenar datos
    if (localStorage.getItem(LocalStorageKey.ZONE_HOME)) {
      localStorage.removeItem(LocalStorageKey.ZONE_HOME);
    }

    if (localStorage.getItem(LocalStorageKey.PESTS_SELECTED)) {
      localStorage.removeItem(LocalStorageKey.PESTS_SELECTED);
    }


    // Save into array storage in localStorage the zone selected by user and verify that not contain another similar zone
    const localStorageZoneHome = localStorage.getItem(LocalStorageKey.ZONE_HOME);
    let arrayZonesHome: Array<string> = [];

    if (localStorageZoneHome) {
      arrayZonesHome = JSON.parse(localStorageZoneHome);
    }
    // TODO: Poner un check en la imagen de la zona de la casa si es que ya ha sido seleccionada.
    if (!arrayZonesHome.includes(this.infoToStepTwo.name)) {
      arrayZonesHome.push(this.infoToStepTwo.name);
    }
    localStorage.setItem(LocalStorageKey.ZONE_HOME, JSON.stringify(arrayZonesHome));

    // Emit the Title and info to StepTwo
    this.infoFromStepOne.emit(this.infoToStepTwo);
    this.titleFromStepOne.emit(this.titleStepTwo);

    // Change the current step as triggered the event
    this.communicationService.changeCurrentStep(2);
  }

}
