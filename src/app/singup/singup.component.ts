import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
    public signupForm !: FormGroup
    constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router){}

    ngOnInit() : void{
      this.signupForm = this.formBuilder.group({
        fullname:[''],
        mail : [''],
        password :[''],
        mobile : [''],
        superuser : false,

      })
    }
    signUp(){
        this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
        .subscribe(res=>{
          alert("signup success");
          this.signupForm.reset();
          this.router.navigate(['login']);

        })
    }
}
