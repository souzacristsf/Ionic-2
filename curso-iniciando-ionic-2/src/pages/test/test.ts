import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LowerCase } from '../../pipes/lower-case';

/*
  Generated class for the Test page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
  pipes: [LowerCase]
})
export class Test {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Test Page');
  }

}
