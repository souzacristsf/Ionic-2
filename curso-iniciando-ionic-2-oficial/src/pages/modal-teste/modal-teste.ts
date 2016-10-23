import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalLogin } from '../modal-login/modal-login';


@Component({
  selector: 'page-modal-teste',
  templateUrl: 'modal-teste.html'
})
export class ModalTeste {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello ModalTeste Page');
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalLogin, {
      action: 'Logar'
    });

    modal.onDidDismiss((param) => {
      console.log('Dados do usuario',  param);
    });

    modal.present();
  }

}
