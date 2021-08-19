import {Component, OnInit} from '@angular/core';
import {CurrentResolutionService} from '../../services/current-resolution.service';
import {InfoToCards} from '../../models/InfoToCards';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['../../global-styles/inner-pages.css', './sectors.component.css']
})
export class SectorsComponent implements OnInit {

  heightCarousel: number;
  numberElements: number;
  public infoToCarouselProfessionalSector: InfoToCards[] = [];

  constructor(private isMobileService: CurrentResolutionService) {
  }

  ngOnInit(): void {
    this.heightCarousel = 360;
    if (this.isMobileService.getIsMobileScreen()) {
      this.numberElements = 1;
    } else {
      this.numberElements = 3;
    }

    this.infoToCarouselProfessionalSector = [
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/guarderia.jpg',
        title: 'Guarderías',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/colegios.jpg',
        title: 'Colegio',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/hospitals.jpg',
        title: 'Hospitales',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/resi-ger.jpg',
        title: 'Residencias geriátricas',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/dentales.jpg',
        title: 'Clínicas dentales',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },

      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/veterinarias.png',
        title: 'Clínicas veterinarias',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/pisinas.jpeg',
        title: 'Piscinas',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/balnearios.jpg',
        title: 'Balnearios',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/spas.jpg',
        title: 'Spa',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/veterinarias.png',
        title: 'Lavanderías',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/hoteles.webp',
        title: 'Hoteles',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/restaurantes.jpg',
        title: 'Restaurantes',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/cafeteria.jpg',
        title: 'Cafeterías',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/bares.jpg',
        title: 'Bares',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/pubs.jpg',
        title: 'Pubs',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/peluqueria.jpg',
        title: 'Peluquerías',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/esteticas.jpg',
        title: 'Centros de estética',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/gimnasios.jpeg',
        title: 'Gimnasios',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/autolavados.jpg',
        title: 'Autolavados',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      },
      {
        urlImage: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/professional_sector/oficinas.jpg',
        title: 'Oficinas',
        content: 'A falsis, gabalium festus solem primus, talis torquiss sed mire vitare de altus, magnum nomen.',
        titleGoToUrl: 'Hilotaes mori',
        goToUrl: 'https://www.google.com'
      }
    ];

  }

}
