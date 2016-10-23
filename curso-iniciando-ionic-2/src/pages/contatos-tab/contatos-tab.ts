import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ContatosTab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contatos-tab',
  templateUrl: 'contatos-tab.html'
})
export class ContatosTab {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContatosTab Page');
  }

}
