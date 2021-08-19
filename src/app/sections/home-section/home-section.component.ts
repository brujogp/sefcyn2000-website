import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent implements OnInit {
  imgUrl = 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/header.jpeg';
  slogan = 'Protejemos la Salud Humana y Respetamos el Medio Ambiente';

  constructor() {
  }

  ngOnInit(): void {
  }

}
