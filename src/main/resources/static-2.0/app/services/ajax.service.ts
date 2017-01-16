
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/index';
import { Observable } from 'rxjs'

@Injectable()
export class AjaxService {
    
    constructor(private http: Http) { }
  
    public jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
  public httpPost(url:string,requestBody:any):Observable<any>{
   return this.http.post(url, requestBody,this.jwt())
            .map((response: Response) => {response.json});
          };
  
   public httpGet(url:string,queryParam:any):Observable<any>{
     if(queryParam) url=url+queryParam

     return this.http.get(url,this.jwt())
            .map((response: Response) => {response.json});
          };
   }
