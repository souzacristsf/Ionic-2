import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

/*
  Generated class for the ToastTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-toast-test',
  templateUrl: 'toast-test.html'
})
export class ToastTest {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('Hello ToastTest Page');
  }

  showToast(){
    let toast = this.toastCtrl.create({
      message: 'Olá mundo!!!',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'OK',
      position: 'top'
    });

    toast.onDismiss(() => {
      console.log('Toast Finalizado');
    })

    toast.present();
  }
}
