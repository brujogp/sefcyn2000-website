import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolutionScreenService {
  private subjectResolutionHandset = new Subject<boolean>();
  private subjectResolutionTablet = new Subject<boolean>();
  private subjectResolutionWeb = new Subject<boolean>();

  private subjectResolutionTabletLandscape = new Subject<boolean>();
  private subjectResolutionPhoneLandscape = new Subject<boolean>();

  // tslint:disable-next-line:variable-name
  private _isPhone: boolean;
  // tslint:disable-next-line:variable-name
  private _isTabletLandscape: boolean;
  // tslint:disable-next-line:variable-name
  private _isTablet: boolean;
  // tslint:disable-next-line:variable-name
  private _isHandsetLandscape: boolean;
  // tslint:disable-next-line:variable-name
  private _isWeb: boolean;


  constructor(private breakpoint: BreakpointObserver) {
    breakpoint.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
      this.subjectResolutionHandset.next(result.matches);
      this._isPhone = result.matches;
      console.log('Celular');
    });

    breakpoint.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
    ]).subscribe(result => {
      this.subjectResolutionTablet.next(result.matches);
      this._isTablet = result.matches;
      console.log('Tablet');
    });

    breakpoint.observe([
      Breakpoints.Web
    ]).subscribe(result => {
      this.subjectResolutionWeb.next(result.matches);
      this._isWeb = result.matches;
      console.log('Web');
    });

    breakpoint.observe([
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
      this.subjectResolutionPhoneLandscape.next(result.matches);
      this._isHandsetLandscape = result.matches;
      console.log('Handset Landscape');
    });

    breakpoint.observe([
      Breakpoints.TabletLandscape
    ]).subscribe(result => {
      this.subjectResolutionTabletLandscape.next(result.matches);
      this._isTabletLandscape = result.matches;
      console.log('Tablet Landscape');
    });

  }

  get observeHandsetSize(): Observable<boolean> {
    return this.subjectResolutionHandset.asObservable();
  }

  get observeTabletSize(): Observable<boolean> {
    return this.subjectResolutionTablet.asObservable();
  }

  get observeWebSize(): Observable<boolean> {
    return this.subjectResolutionWeb.asObservable();
  }

  get observeTabletLandscapeSize(): Observable<boolean> {
    return this.subjectResolutionTabletLandscape.asObservable();
  }

  get observePhoneLandscapeSize(): Observable<boolean> {
    return this.subjectResolutionPhoneLandscape.asObservable();
  }

  // Variables para asegurar que los observers se inicialicen correctamente
  get isPhone(): boolean {
    return this._isPhone;
  }

  get isTablet(): boolean {
    return this._isTablet;
  }

  get isWeb(): boolean {
    return this._isWeb;
  }

  get isPhoneLandscape(): boolean {
    return this._isHandsetLandscape;
  }

  get isTabletLandscape(): boolean {
    return this._isTabletLandscape;
  }

}
