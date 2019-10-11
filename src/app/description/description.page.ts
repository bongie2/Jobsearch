import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {
id
descript
  constructor(public jobservice:JobsService, public router:Router,public activatedRoute:ActivatedRoute)
   {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id)
    //this.descript(this.id)
   this.getDescript(this.id)
    }

    getDescript(id){
      this.jobservice.getDescription(id).subscribe((info)=>{
        this.descript=info
    console.log(this.descript)
      });
    }
  ngOnInit() {    
  
  }
 
}
