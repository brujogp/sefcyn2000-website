import {Component, OnInit} from '@angular/core';
import {RelationalPagesModel} from '../../reusable/components/relational-pages/relational-pages.model/relational-pages.model';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['../../global-styles/inner-pages.css', './vision.component.css']
})
export class VisionComponent implements OnInit {

  public relationalPages: RelationalPagesModel[];

  constructor() {
  }

  ngOnInit(): void {
    this.relationalPages = [
      {
        name: 'Servicios para el hogar y condominios ',
        url: '#'
      },
      {
        name: 'Servicios comerciales',
        url: '#'
      },
      {
        name: 'Tratamientos',
        url: '/tratamientos'
      },
    ];

  }

}
