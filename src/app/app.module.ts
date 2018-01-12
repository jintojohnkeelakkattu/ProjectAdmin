import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{InvoiceComponent} from './invoice/invoice.component'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InvoiceComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
