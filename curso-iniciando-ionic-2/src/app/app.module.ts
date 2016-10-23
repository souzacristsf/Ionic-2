import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuTeste } from '../pages/menu-teste/menu-teste';
import { Generated } from '../pages/generated/generated';
import { ConnectionService } from '../providers/connection-service';
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
import { HomeTab } from '../pages/home-tab/home-tab';
import { ContatosTab } from '../pages/contatos-tab/contatos-tab';
import { ToastTest } from '../pages/toast-test/toast-test';
import { ToolbarTest } from '../pages/toolbar-test/toolbar-test';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuTeste,
    Generated,
    Test,
    AlertPage,
    ButtonTeste,
    CardTeste,
    IconTeste,
    InputTeste,
    ListTeste,
    GridTeste,
    ModalTeste,
    ModalLogin,
    Navegation,
    TabTeste,
    HomeTab,
    ContatosTab,
    ToastTest,
    ToolbarTest
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuTeste,
    Generated,
    Test,
    AlertPage,
    ButtonTeste,
    CardTeste,
    IconTeste,
    InputTeste,
    ListTeste,
    GridTeste,
    ModalTeste,
    ModalLogin,
    Navegation,
    TabTeste,
    HomeTab,
    ContatosTab,
    ToastTest,
    ToolbarTest
  ],
  providers: [ConnectionService]
})
export class AppModule {}
