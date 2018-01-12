import { Component, OnInit } from '@angular/core';
import  "primeng/resources/primeng.css";
import {EventDropdownService} from '../event-dropdown.service'; 
import{HttpClientServiceService}  from '../http-client-service.service'; 

import {FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-overlay-popup',
  templateUrl: './overlay-popup.component.html',
  styleUrls: ['./overlay-popup.component.css'],
  providers: [EventDropdownService,HttpClientServiceService]
})
export class client
{
  clientName : String; 
  clientAddress : String; 
  emailAddress : String; 
  contactNumber : String; 
  alternateNumber : String; 
  constructor(clientName:string, clientAddress:string, emailAddress:string, contactNumber:string,alternateNumber:string)
  {
      this.clientName=clientName;
      this.clientAddress=clientAddress;
      this.emailAddress=emailAddress;
      this.contactNumber=contactNumber;
      this.alternateNumber=alternateNumber;
  }
}
export class OverlayPopupComponent implements OnInit {
  nameList: any;  
  data:any; 
  nameId:Number; 
  clientName : String; 
  clientAddress : String; 
  emailAddress : String; 
  contactNumber : String; 
  alternateNumber : String; 
  constructor(private apiSerivce: EventDropdownService,private apiControllerSerivce:HttpClientServiceService) 
  { 
    this.clientName = '';
    this.clientAddress = '';
    this.emailAddress = '';
    this.contactNumber ='';
    this.alternateNumber = '';
  }
  getPosts(): void {
    this.nameList= this.apiSerivce.getNameList()
  }
  
  ngOnInit() :void{
    debugger;
    this.getPosts();
  }
  RegisterClientPrimaryDetails()
  {
    debugger;
    var usermodel=new client
    (
       this.clientName.toString(),
       this.clientAddress.toString(),
       this.emailAddress.toString(),
       this.contactNumber.toString(),
       this.alternateNumber.toString()
    ) 
    this.apiControllerSerivce.postregistration(JSON.stringify(usermodel));
   }
  selectName() {  
    alert(this.nameId);  
}
}
