import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
Jobs=[];
name:string=""
Description=[]
id
  constructor(public http:HttpClient) { }
  searchJobs(){
return this.http.get('https://us-central1-mlab-challenge.cloudfunctions.net/jobs')
  }
search(){
  return this.Jobs
}
  getDescription(id){
    return this.http.get('https://us-central1-mlab-challenge.cloudfunctions.net/job?id='+ id)
  }
  description(){
    return this.id
  }
}
