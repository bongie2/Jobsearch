import { Component } from '@angular/core';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
jobs=[];
name;
id

  constructor(public jobservice:JobsService) {
 this.jobservice.searchJobs().subscribe((data)=>{
   this.name =data
   console.log(this.name)
   for(let i=0;i<50;i++){
     this.jobs.push({Jobs:this.name[i]})
   }
   console.log(this.jobs)
 })  
  }
  findjobs(){
    this.jobservice.search();
  }
  
}
