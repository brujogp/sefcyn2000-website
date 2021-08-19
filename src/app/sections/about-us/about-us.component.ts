import {Component, OnInit} from '@angular/core';
import {RelationalPagesModel} from '../../reusable/components/relational-pages/relational-pages.model/relational-pages.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['../../global-styles/inner-pages.css', './about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public relationalPages: RelationalPagesModel[];

  constructor() {
  }

  ngOnInit(): void {
    this.relationalPages = [
      {
        name: 'Servicios para el hogar y condominios',
        url: '#'
      },
      {
        name: 'Servicios comerciales',
        url: '#'
      },
      {
        name: 'Visión',
        url: '/visión'
      }
    ];
  }

}
