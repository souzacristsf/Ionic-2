import { Component } from '@angular/core';
import { NavController, ViewController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-modal-login',
  templateUrl: 'modal-login.html'
})
export class ModalLogin {
  user: any = {};
  constructor(public navCtrl: NavController, public view: ViewController, public params: NavParams) {
    console.log('Dados recebido: ', params.get('action'));
  }

  ionViewDidLoad() {
    console.log('Hello ModalLogin Page');
  }

  logar(){
    this.view.dismiss(this.user);
  }

  close(){
    this.view.dismiss();
  }

}
