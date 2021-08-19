import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-network-nav',
  templateUrl: './social-network-nav.component.html',
  styleUrls: ['./social-network-nav.component.css']
})
export class SocialNetworkNavComponent implements OnInit {
  @Input() color: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
