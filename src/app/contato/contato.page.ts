import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  protected formDados = {
    nome: '',
    email: '',
    msg: '',
  }

  constructor(private router: Router , public navCtrl: NavController) { }

  ngOnInit() {
  }


  openResultado() {
    let navigationExtras : NavigationExtras = {
      queryParams: {
        nome: this.formDados.nome,  
        email: this.formDados.email, 
        msg: this.formDados.msg, 


      }
    };
    this.navCtrl.navigateForward(['/resultado'], navigationExtras)
  }
}
