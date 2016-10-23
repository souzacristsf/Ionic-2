import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*
  Generated class for the InputTeste page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-input-teste',
  templateUrl: 'input-teste.html'
})
export class InputTeste {
  login: string;
  senha: string;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController ) {}

  ionViewDidLoad() {
    console.log('Hello InputTeste Page');
  }

  entrar(){
    let alert = this.alertCtrl.create({
      title: "Entrando...",
      message:  ('Login: ' + this.login + 'Senha: ' + this.senha )
    });
    alert.present();
  }
}
