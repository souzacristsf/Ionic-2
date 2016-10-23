import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the MenuTeste page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu-teste',
  templateUrl: 'menu-teste.html'
})
export class MenuTeste {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MenuTeste Page');
  }

}
