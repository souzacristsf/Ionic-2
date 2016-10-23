import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CardTeste} from '../card-teste/card-teste';
/*
  Generated class for the Navegation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-navegation',
  templateUrl: 'navegation.html'
})
export class Navegation {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Navegation Page');
  }
  openPage(){
    this.navCtrl.push(CardTeste, {
      mensagem: 'Mensagem vinda de NavegationTestePage'
    });
  }
}
