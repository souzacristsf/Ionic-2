import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ButtonTeste page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-button-teste',
  templateUrl: 'button-teste.html'
})
export class ButtonTeste {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ButtonTeste Page');
  }

}
