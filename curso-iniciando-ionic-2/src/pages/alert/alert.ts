import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {

  user: string = 'nome';

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello Alert Page');
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Alert test',
      message: 'Este é um exemplo de alert',
      buttons: ['Ok', 'Cancel']
    });

    alert.present();
  }

  showName(){
    let alertName = this.alertCtrl.create({
      title: 'Nome',
      message: 'Digite seu nome',
      inputs: [
        {
          name: 'nome',
          placeholder: 'seu nome'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Ok',
          handler: (data) => {
            this.user = data.nome;
          }
        }
      ]
    });

    alertName.present();
  }

}
