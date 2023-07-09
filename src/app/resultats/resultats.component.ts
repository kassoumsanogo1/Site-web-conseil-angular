import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent {
  items: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/items')
      .subscribe(items => {
        this.items = items;
      });
  }
  

}
