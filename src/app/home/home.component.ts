import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favoris: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Faites une requête HTTP GET pour récupérer toutes les informations des ordinateurs depuis votre serveur JSON
    this.http.get<any[]>('http://localhost:3000/items').subscribe(data => {
      // Mélangez aléatoirement le tableau de données
      const shuffledData = this.shuffleArray(data);
      // Stockez les 4 premiers éléments du tableau mélangé dans la variable favoris
      this.favoris = shuffledData.slice(0, 4);
    });
  }

  // Fonction pour mélanger aléatoirement un tableau
  shuffleArray(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue: any;
    let randomIndex: number;

    // Tant qu'il reste des éléments à mélanger
    while (0 !== currentIndex) {
      // Sélectionnez un élément non mélangé
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Échangez-le avec l'élément actuel
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
