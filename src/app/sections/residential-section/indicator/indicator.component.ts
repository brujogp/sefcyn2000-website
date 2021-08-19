import {EventEmitter, Component, Input, OnInit, Output} from '@angular/core';
import {CommunicationService} from '../../../services/communication.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {
  currentStep = 1;
  @Output() showStep1 = new EventEmitter<boolean>();
  @Output() showStep2 = new EventEmitter<boolean>();

  constructor(private communicationService: CommunicationService) {
  }

  ngOnInit(): void {
    this.communicationService.observerStepSelected.subscribe(value => {
      this.currentStep = value;
    });
  }

  onClickInStep(stepClicked: HTMLDivElement): void {
    if (stepClicked.id === 'step-1') {
      this.showStep1.emit(true);
      this.communicationService.changeCurrentStep(1);
    } else if (stepClicked.id === 'step-2') {
      this.showStep2.emit(true);
      this.communicationService.changeCurrentStep(2);
    }
  }
}
