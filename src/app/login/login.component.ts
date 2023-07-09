import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingService } from 'data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogged: boolean = false;
  public loginForm!: FormGroup;
  
  constructor(private dataSharingService: DataSharingService,private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mail: [''],
      password: ['']
    });
  }
//pour se connecter
  login() {
    
    this.http.get<any>("http://localhost:3000/signupUsers")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.mail === this.loginForm.value.mail && a.password === this.loginForm.value.password;
        });
        if (user) {
          this.isLogged = true;
          alert("Login successful");
          this.loginForm.reset();
          this.dataSharingService.isLogged.next(this.isLogged);
          this.dataSharingService.setSuperUser(user.superuser); // si l'utilisateur est le superUser
          this.dataSharingService.setUser(user);
          this.router.navigate(['']);
        } else {
          alert("Identifiants Incorrects");
        }
      });
  }
  //pour se deconnecter 
  logout() {
    // Code de déconnexion
    // Par exemple, vous pouvez réinitialiser les données utilisateur et rediriger vers la page de connexion
    this.isLogged = false;
    this.router.navigate(['/login']);
  }
}
