import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CardTeste page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-card-teste',
  templateUrl: 'card-teste.html'
})
export class CardTeste {
  
  constructor(public navCtrl: NavController, public params: NavParams) {
    console.log(params.get('mensagem'));
  }

  ionViewDidLoad() {
    console.log('Hello CardTeste Page');
  }

  voltar(){
    this.navCtrl.pop();
  }

}
