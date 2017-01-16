import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../../../../models/index';
@Injectable()
export class SettingService {
    constructor(private http: Http) { 
     }
}