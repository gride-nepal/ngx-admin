import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Language} from '../models/language-model';
import {Observable} from 'rxjs';
import{Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesSettingsService {

  constructor(private http:HttpClient) { }
  // formData:Language;
 
 // readonly APIUrl ="http://gridecoreapp-env.peird25tbn.us-east-1.elasticbeanstalk.com";

  readonly APIUrl ="http://localhost:9500";

  getData(){
    return this.http.get(this.APIUrl + '/language');
  }
  add(language:Language){
    return this.http.post(this.APIUrl+'/language', language);
  }

  delete(id: number){
    return this.http.delete(this.APIUrl+'/language/'+id);
  }
  
  update(language:Language) {
    return this.http.put(this.APIUrl+'/language/'+language._id,language);
  }
  private _listners =new Subject<any>();
  
  listen(): Observable<any>{
  return this._listners.asObservable();
  }

  filter(filterBy: string){
  this._listners.next(filterBy);
  }

  }