import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formLogin = {

    nome: '',
    email: '',
    senha: '',

  }

  constructor(private router: Router) {

  }




  ngOnInit() {

  }
  envioForm(e) {
    e.preventDefault();

    if (this.formLogin.email === '' && this.formLogin.senha === '') {
      alert('Campos obrigatorio')
    } else if (this.formLogin.email === 'f' && this.formLogin.senha === 'f') {
      console.log(this.formLogin)
      this.router.navigate(['/home'])
    } else {
      alert('Usuario ou senha invalidos')
    }
  }
}
