import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from '../invoice/invoice.component';
import { OverlayPopupComponent } from '../overlay-popup/overlay-popup.component';

const appRoutes: Routes = [
  { path: 'overlay-popup', component: OverlayPopupComponent },
  { path: '', component: InvoiceComponent },
];
@NgModule({

  imports: [
    CommonModule,
   
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RouteModule {
  
 }
