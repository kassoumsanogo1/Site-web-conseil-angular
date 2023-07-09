import { Component, OnInit } from '@angular/core';
import { ResultatsService } from '../resultats-filtre.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-filtre-result',
  templateUrl: './filtre-result.component.html',
  styleUrls: ['./filtre-result.component.css']
})
export class FiltreResultComponent implements OnInit {
  resultats: any[] = [];
  

  constructor(public resultatsService: ResultatsService, private http: HttpClient) { }

  ngOnInit() {
    this.resultats = this.resultatsService.resultats;
  }
}



  

  
  