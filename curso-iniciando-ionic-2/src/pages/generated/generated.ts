import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConnectionService } from '../../providers/connection-service';

@Component({
  selector: 'page-generated',
  templateUrl: 'generated.html',
})
export class Generated {

  constructor(public navCtrl: NavController, private connectionService: ConnectionService) {}

  ionViewDidLoad() {
    console.log('Hello Generated Page');
  }

  buscarCep() : void {
    this.connectionService.getCep('88370410')
      .then((resp) => {
        let json = resp.json();
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
