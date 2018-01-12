import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  constructor(
    private router: Router
) {}

  ngOnInit() {
  }
  btnClick= function () {
   //alert("Clicked");
    debugger;
   this.router.navigate(['/overlay-popup']);
};
}

