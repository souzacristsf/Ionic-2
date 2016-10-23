import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the GridTeste page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-grid-teste',
  templateUrl: 'grid-teste.html'
})
export class GridTeste {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GridTeste Page');
  }

}
