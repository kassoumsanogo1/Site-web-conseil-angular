import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ResultatsService } from '../resultats-filtre.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit  {
  searchForm: FormGroup;
  computers: any[] = []; // Variable pour stocker les données des ordinateurs
  filteredComputers: any[] = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private resultatsService: ResultatsService, private router: Router) {
    this.searchForm = this.formBuilder.group({
      marque: '',
      budget: '',
      Utilisation: '',
      preference: '',
      tailleEcran: '',
      stockage: '',
      systemExploitation: '',
      lecteur: '',
      clavier: '',
      autonomie: ''
      // Autres champs du formulaire
    });
  }

  ngOnInit() {
    // Charger les données des ordinateurs à partir du serveur JSON
    this.http.get<any[]>('http://localhost:3000/items').subscribe(data => {
      this.computers = data;
    });
  }

  search() {
    const filters = this.searchForm.value;
    this.filteredComputers = this.computers.filter(computer => {
      return (
        (filters.marque === '' || computer.marque === filters.marque) ||
        (filters.budget === '' || computer.prix <= parseFloat(filters.budget)) ||
        (filters.Utilisation === '' || computer.Utilisation === filters.Utilisation) ||
        (filters.preference === '' || computer.typeOrdi === filters.preference) ||
        (filters.tailleEcran === '' || computer.tailleEcran === parseFloat(filters.tailleEcran)) ||
        (filters.stockage === '' || computer.stockage === parseFloat(filters.stockage)) ||
        (filters.systemExploitation === '' || computer.systemeOs === filters.systemExploitation) ||
        (filters.lecteur === '' || computer.lecteur === filters.lecteur) ||
        (filters.clavier === '' || computer.clavier === filters.clavier) ||
        (filters.autonomie === '' || computer.autonomie === parseFloat(filters.autonomie))
      );
    });
  
    // Vérifier s'il y a des critères correspondants
    const hasMatches = this.filteredComputers.length > 0;
  
    // Trier les ordinateurs en fonction du nombre total de critères correspondants et du nombre de critères exacts correspondants
    this.filteredComputers.sort((a, b) => {
      const aTotalMatched =
        (filters.marque === '' || a.marque === filters.marque ? 1 : 0) +
        (filters.budget === '' || a.prix <= parseFloat(filters.budget) ? 1 : 0) +
        (filters.Utilisation === '' || a.Utilisation === filters.Utilisation ? 1 : 0) +
        (filters.preference === '' || a.typeOrdi === filters.preference ? 1 : 0) +
        (filters.tailleEcran === '' || a.tailleEcran === parseFloat(filters.tailleEcran) ? 1 : 0) +
        (filters.stockage === '' || a.stockage === parseFloat(filters.stockage) ? 1 : 0) +
        (filters.systemExploitation === '' || a.systemeOs === filters.systemExploitation ? 1 : 0) +
        (filters.lecteur === '' || a.lecteur === filters.lecteur ? 1 : 0) +
        (filters.clavier === '' || a.clavier === filters.clavier ? 1 : 0) +
        (filters.autonomie === '' || a.autonomie === parseFloat(filters.autonomie) ? 1 : 0);
      const bTotalMatched =
        (filters.marque === '' || b.marque === filters.marque ? 1 : 0) +
        (filters.budget === '' || b.prix <= parseFloat(filters.budget) ? 1 : 0) +
        (filters.Utilisation === '' || b.Utilisation === filters.Utilisation ? 1 : 0) +
        (filters.preference === '' || b.typeOrdi === filters.preference ? 1 : 0) +
        (filters.tailleEcran === '' || b.tailleEcran === parseFloat(filters.tailleEcran) ? 1 : 0) +
        (filters.stockage === '' || b.stockage === parseFloat(filters.stockage) ? 1 : 0) +
        (filters.systemExploitation === '' || b.systemeOs === filters.systemExploitation ? 1 : 0) +
        (filters.lecteur === '' || b.lecteur === filters.lecteur ? 1 : 0) +
        (filters.clavier === '' || b.clavier === filters.clavier ? 1 : 0) +
        (filters.autonomie === '' || b.autonomie === parseFloat(filters.autonomie) ? 1 : 0);
      const aExactMatched =
        (filters.marque === '' || a.marque === filters.marque ? 1 : 0) +
        (filters.budget === '' || a.prix === parseFloat(filters.budget) ? 1 : 0) +
        (filters.Utilisation === '' || a.Utilisation === filters.Utilisation ? 1 : 0) +
        (filters.preference === '' || a.typeOrdi === filters.preference ? 1 : 0) +
        (filters.tailleEcran === '' || a.tailleEcran === parseFloat(filters.tailleEcran) ? 1 : 0) +
        (filters.stockage === '' || a.stockage === parseFloat(filters.stockage) ? 1 : 0) +
        (filters.systemExploitation === '' || a.systemeOs === filters.systemExploitation ? 1 : 0) +
        (filters.lecteur === '' || a.lecteur === filters.lecteur ? 1 : 0) +
        (filters.clavier === '' || a.clavier === filters.clavier ? 1 : 0) +
        (filters.autonomie === '' || a.autonomie === parseFloat(filters.autonomie) ? 1 : 0);
      const bExactMatched =
        (filters.marque === '' || b.marque === filters.marque ? 1 : 0) +
        (filters.budget === '' || b.prix === parseFloat(filters.budget) ? 1 : 0) +
        (filters.Utilisation === '' || b.Utilisation === filters.Utilisation ? 1 : 0) +
        (filters.preference === '' || b.typeOrdi === filters.preference ? 1 : 0) +
        (filters.tailleEcran === '' || b.tailleEcran === parseFloat(filters.tailleEcran) ? 1 : 0) +
        (filters.stockage === '' || b.stockage === parseFloat(filters.stockage) ? 1 : 0) +
        (filters.systemExploitation === '' || b.systemeOs === filters.systemExploitation ? 1 : 0) +
        (filters.lecteur === '' || b.lecteur === filters.lecteur ? 1 : 0) +
        (filters.clavier === '' || b.clavier === filters.clavier ? 1 : 0) +
        (filters.autonomie === '' || b.autonomie === parseFloat(filters.autonomie) ? 1 : 0);
  
      // Tri par nombre total de critères correspondants, puis par nombre de critères exacts correspondants
      if (bTotalMatched === aTotalMatched) {
        return bExactMatched - aExactMatched;
      } else {
        return bTotalMatched - aTotalMatched;
      }
    });
  
    // Vérifier s'il y a des ordinateurs correspondants avant de les afficher
    if (hasMatches) {
      this.resultatsService.resultats = this.filteredComputers;
      this.router.navigate(['/filtre']);
    } else {
      // Aucun ordinateur ne correspond aux critères, ne pas afficher les résultats
      this.resultatsService.resultats = [];
      // Naviguer vers une autre page ou afficher un message d'erreur si nécessaire
    }
  
    console.log(this.filteredComputers);
  }
  
  
  
  
  
  
  
  
}
