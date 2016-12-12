import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OperationUnits } from '../providers/operation-units';
import { OperationUnitsListPage } from '../pages/operation-units-list/operation-units-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OperationUnitsListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OperationUnitsListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, OperationUnits]
})
export class AppModule {}
