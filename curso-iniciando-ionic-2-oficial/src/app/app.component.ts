import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { MenuTeste } from '../pages/menu-teste/menu-teste';
import { Generated } from '../pages/generated/generated';
import { Test } from '../pages/test/test';
import { AlertPage } from '../pages/alert/alert';
import { ButtonTeste } from '../pages/button-teste/button-teste';
import { CardTeste } from '../pages/card-teste/card-teste';
import { IconTeste } from '../pages/icon-teste/icon-teste';
import { InputTeste } from '../pages/input-teste/input-teste';
import { ListTeste } from '../pages/list-teste/list-teste';
import { GridTeste } from '../pages/grid-teste/grid-teste';
import { ModalTeste } from '../pages/modal-teste/modal-teste';
import { ModalLogin } from '../pages/modal-login/modal-login';
import { Navegation } from '../pages/navegation/navegation';
import { TabTeste } from '../pages/tab-teste/tab-teste';
import { ToastTest } from '../pages/toast-test/toast-test';
import { ToolbarTest } from '../pages/toolbar-test/toolbar-test';

@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {
  pages: Array<{component: any, title: string, icon: string}>;
  rootPage = HomePage;

  constructor(platform: Platform, public menuCtrl: MenuController) {
    platform.ready().then(() => {

      this.pages = [
        {component: ToolbarTest, title: 'Toolbar Teste', icon: 'home'},
        {component: ToastTest, title: 'Toast Teste', icon: 'home'},
        {component: TabTeste, title: 'Tab Teste', icon: 'home'},
        {component: Navegation, title: 'Navegation', icon: 'home'},
        {component: HomePage, title: 'Home', icon: 'home'},
        {component: MenuTeste, title: 'Menu Test', icon: 'menu'},
        {component: Generated, title: 'GeneratedPage', icon: 'home'},
        {component: Test, title: 'Test', icon: 'home'},
        {component: AlertPage, title: 'Alert', icon: 'home'},
        {component: ButtonTeste, title: 'Buttons Teste', icon: 'home'},
        {component: CardTeste, title: 'Card Teste', icon: 'share'},
        {component: IconTeste, title: 'Icon Teste', icon: 'star'},
        {component: InputTeste, title: 'Input Teste', icon: 'star'},
        {component: ListTeste, title: 'List Teste', icon: 'star'},
        {component: GridTeste, title: 'Grid Teste', icon: 'star'},
        {component: ModalTeste, title: 'Modal Teste', icon: 'star'}
      ];
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page: any, menuSide: string) : void {
    this.rootPage = page.component;
    this.menuCtrl.close(menuSide);
  }

  menuOpened() : void {
    console.log("Abriu");
  }
}
