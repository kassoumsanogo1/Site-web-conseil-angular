import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router : Router
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      marque: ['', Validators.required],
      systemeOs: ['', Validators.required],
      typeOrdi: ['', Validators.required],
      image: ['', Validators.required],
      prix: ['', Validators.required],
      ram: ['', Validators.required],
      stockage: ['', Validators.required],
      tailleEcran: ['', Validators.required],
      clavier: ['', Validators.required]
    });
  }

  submitForm() {
      if (this.form.valid) {
        const formData = this.form.value;
    this.http.post('http://localhost:3000/items', formData)
      .subscribe(response => {
        alert('Données envoyées avec succès !');
        this.form.reset();
        this.router.navigate(['admin']);
        // Traitez la réponse de la requête si nécessaire
      });
      } else {
        // Afficher un message d'erreur ou prendre une autre action appropriée
        alert('Veuillez remplir tous les champs obligatoires.');
      }
    }
    
  }

