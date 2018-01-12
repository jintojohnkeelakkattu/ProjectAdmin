import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpClientServiceService {
  public Server = 'http://localhost:59122/';
  constructor(private http: HttpClient) { }
  postregistration(objClient)
  {
    this.http.post(this.Server+'/api/developers/add', objClient).subscribe();
  }

}
