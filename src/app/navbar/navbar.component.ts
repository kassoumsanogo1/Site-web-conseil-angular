import { Component, OnInit } from '@angular/core';

import { DataSharingService } from '../../../data-sharing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(public dataSharingService: DataSharingService) { }

  ngOnInit() {
    this.dataSharingService.isLogged.subscribe(isLogged => {
      this.isLoggedIn = isLogged;
    });
  }

  logout() {
    // Code de déconnexion
    // Par exemple, vous pouvez réinitialiser les données utilisateur et rediriger vers la page de connexion
    this.isLoggedIn = false;
    this.dataSharingService.isLogged.next(this.isLoggedIn);
    // ...
  }
}
