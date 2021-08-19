import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocalStorageKey} from '../../../models/enumerations/localstorage-key.enumeration';
import {InitDataService} from '../../../services/init-data.service';
import {Gender, Pests} from '../../../models/Pests';

@Component({
  selector: 'app-bibliographic-pests',
  templateUrl: './info-pests.component.html',
  styleUrls: ['./info-pests.component.css']
})
export class InfoPestsComponent implements OnInit, OnDestroy {
  pestsArray: Pests[] = [];
  genderArray: Gender[] = [];
  public urlToWhatsapp: string;
  private nameZonesHouse: string[];
  private namePests: string[];

  constructor(private initService: InitDataService) {
  }

  ngOnInit(): void {
    // Get element storages into local storage (only names of pests)
    const auxiliaryItemArray = JSON.parse(localStorage.getItem(LocalStorageKey.PESTS_SELECTED));

    if (auxiliaryItemArray !== null) {
      auxiliaryItemArray.forEach(pestStorage => {
        this.initService.getPests.forEach(pest => {
          if (pest.name === pestStorage) {
            this.pestsArray.push(pest);
          } else {
            pest.gender.forEach(children => {
              if (children.name === pestStorage) {
                this.genderArray.push(children);
              }
            });
          }
        });

      });
    }

    if (localStorage.getItem(LocalStorageKey.ZONE_HOME)) {
      this.nameZonesHouse = JSON.parse(localStorage.getItem(LocalStorageKey.ZONE_HOME));
    }

    if (localStorage.getItem(LocalStorageKey.PESTS_SELECTED)) {
      this.namePests = JSON.parse(localStorage.getItem(LocalStorageKey.PESTS_SELECTED));
    }

    this.urlToWhatsapp = 'https://wa.me/5215618520118?text=Zona%20de%20la%20casa: ' + this.nameZonesHouse + '%20Peste:%20' + this.namePests;
  }

  ngOnDestroy(): void {
    if (localStorage.getItem(LocalStorageKey.ZONE_HOME)) {
      localStorage.removeItem(LocalStorageKey.ZONE_HOME);
    }

    if (localStorage.getItem(LocalStorageKey.PESTS_SELECTED)) {
      localStorage.removeItem(LocalStorageKey.PESTS_SELECTED);
    }
  }
}
