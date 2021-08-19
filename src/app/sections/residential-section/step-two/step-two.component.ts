import {Component, Input, OnInit} from '@angular/core';
import {CommunicationService} from '../../../services/communication.service';
import {ViewportScroller} from '@angular/common';
import {InitDataService} from '../../../services/init-data.service';
import {Pests} from '../../../models/Pests';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  @Input() containerInfo: { name: string, urlImg: string, text: string } = {name: '', urlImg: '', text: ''};
  @Input() pest: string;
  pestsModel: Pests[];

  constructor(private communicationService: CommunicationService,
              private initModel: InitDataService) {
    this.pestsModel = this.initModel.getPests;
  }

  ngOnInit(): void {
  }

  /*goToStepThreeSection($event: number): void {
    const headerElement = document.getElementById('header');
    const bottomHeader = headerElement.offsetHeight;

    this.viewport.scrollToPosition([0, bottomHeader]);

    this.pestsModel = this.initModel.getPests;
  }
   */

}
