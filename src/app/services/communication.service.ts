import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private subjectStepSelected = new Subject<number>();
  public observerStepSelected = this.subjectStepSelected.asObservable();

  constructor() {
  }

  public changeCurrentStep(currentStep: number): void {
    this.subjectStepSelected.next(currentStep);
  }


}
