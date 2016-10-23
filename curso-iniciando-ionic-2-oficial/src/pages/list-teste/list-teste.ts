import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-list-teste',
  templateUrl: 'list-teste.html'
})
export class ListTeste {

  personagens: Array<string>;

  constructor(public navCtrl: NavController) {
    this.personagens = [
      'Tyrion Lannister',
      'Daenerys Targaryen',
      'Oberyn Martell'
    ];
  }

  ionViewDidLoad() {
    console.log('Hello ListTeste Page');
  }

}
