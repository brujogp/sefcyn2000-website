import {Component, OnInit} from '@angular/core';
import {CardModel} from '../../reusable/components/cards/card-model/card-model.type';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {
  public cardsInfo: CardModel[];

  constructor() {
  }

  ngOnInit(): void {
    this.cardsInfo = [
      {
        name: 'Tratamientos Preventivos ',
        textLink: 'Saber más',
        text: 'Nuestros procedimientos para identificar la mejor alternativa ante una amenaza de plagas,  comienzan de una manera personalizada, cada caso es distinto por lo que nos aseguramos de tipificar de manera excelente el objetivo que cada cliente solicita,  cuando la necesidad u objetivo es Prevención, entonces; la estrategia partirá de identificar los riesgos que se tienen en un estructura especifica...',
        urlImg: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/prev.jpeg',
        urlToGo: 'hola',
        idOfElement: 'preventive-treatment'
      },
      {
        name: 'Tratamientos Correctivos ',
        textLink: 'Saber más',
        text: 'En la actualidad existen servicios en el mercado que su principal característica es ofrecer precios muy bajos, logrando con ello, resultados muy pobres o deficientes, cuando esto ocurre es posible que un servicio preventivo  no sea suficiente y se requiere entonces un tratamiento correctivo, en éste caso, la presencia de fauna nociva en una estructura...',
        urlImg: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/correc.jpeg',
        urlToGo: 'hola',
        idOfElement: 'corrective-treatment'
      },
      {
        name: 'Desinfección COVID-19',
        textLink: 'Saber más',
        text: 'Tuna frittata has to have a soaked, tender chicken component Tuna frittata has to have a soaked, tender chicken component Tuna frittata has to have a soaked, tender chicken component Tuna frittata has to have a soaked, tender chicken component Tuna frittata has to have a soaked, tender chicken component Tuna frittata has to have a soaked, tender chicken component .',
        urlImg: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/covid.jpg',
        urlToGo: 'hola',
        idOfElement: 'disinfection-covid'
      },


    ];
  }

}
