import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeTab } from '../home-tab/home-tab'
import { ContatosTab } from '../contatos-tab/contatos-tab'

@Component({
  selector: 'page-tab-teste',
  templateUrl: 'tab-teste.html'
})
export class TabTeste {

  homePage: any = HomeTab;
  contatosPage: any = ContatosTab;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('Hello TabTeste Page');
  }

}
