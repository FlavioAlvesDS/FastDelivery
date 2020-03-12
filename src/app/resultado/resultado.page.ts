import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  nome: null;
  email: null;
  msg: null;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
  this.route.queryParams.subscribe(params => 
    {
      this.nome = params.nome;
      this.email = params.email;
      this.msg = params.msg;});

  this.route.queryParams.subscribe(function(params){console.log(params)});
    
  }

}
