import {HostListener, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentResolutionService {
  private readonly isMobileScreen: boolean;

  // TODO: Val vez hacer un tipo de mecanismo para estar escuchando los cambios del DOM
  /*
  @HostListener('window:resize', ['$event'])
    onResize(event): void {
      console.log(window.innerWidth);
    }
   */

  constructor() {
    this.isMobileScreen = window.innerWidth < 800;
  }

  public getIsMobileScreen(): boolean {
    return this.isMobileScreen;
  }
}
