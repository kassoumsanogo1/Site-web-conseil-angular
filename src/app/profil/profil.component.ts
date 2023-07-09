import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSharingService } from 'data-sharing.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  isLogged: boolean = false;
  user: any;
  constructor(private http: HttpClient, private dataSharingService: DataSharingService) { }

 

  ngOnInit(): void {
    this.dataSharingService.isLogged.subscribe((isLogged: boolean) => {
      this.isLogged = isLogged;
    });
    
    this.dataSharingService.user.subscribe((user: any) => {
      this.user = user;
    });
  }
  
}
