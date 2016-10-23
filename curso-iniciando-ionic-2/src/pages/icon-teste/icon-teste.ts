import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the IconTeste page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-icon-teste',
  templateUrl: 'icon-teste.html'
})
export class IconTeste {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello IconTeste Page');
  }

}
