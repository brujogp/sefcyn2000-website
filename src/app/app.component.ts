import {Component, OnInit} from '@angular/core';
import {CurrentResolutionService} from './services/current-resolution.service';
import {Data, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {TransitionRouter} from './animations/router/router.anim';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [TransitionRouter]
})
export class AppComponent implements OnInit {
  title = 'Sefcyn2000';

  constructor(private router: Router, private viewPort: ViewportScroller) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.viewPort.scrollToPosition([0, 0]);
    });
  }

  getInfoFromActivePage(outlet: RouterOutlet): Data {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.anim;
  }

}
