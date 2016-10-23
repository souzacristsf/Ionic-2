import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ToolbarTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-toolbar-test',
  templateUrl: 'toolbar-test.html'
})
export class ToolbarTest {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ToolbarTest Page');
  }

}
