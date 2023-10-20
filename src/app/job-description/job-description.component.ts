import { Component, OnInit } from '@angular/core';
import { Jobs } from '../Jobs'

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit{

  job:Jobs[];

  constructor(){
    this.job=[{
        companyName:'abc__1',
        jobName:'abcd__1',
        startPackage:'123',
        endPackage:'1234',
        jobType:'SDE-1',
        active:true
      },{
        companyName:'abc__2',
        jobName:'abcd__2',
        startPackage:'1232',
        endPackage:'12342',
        jobType:'SDE-1',
        active:true 
      },{
        companyName:'abc__3',
        jobName:'abcd__3',
        startPackage:'1233',
        endPackage:'12343',
        jobType:'SDE-1',
        active:true
      },{
        companyName:'abc__4',
        jobName:'abcd__4',
        startPackage:'1234',
        endPackage:'12344',
        jobType:'SDE-1',
        active:true
      },{
        companyName:'abc__5',
        jobName:'abcd__5',
        startPackage:'1235',
        endPackage:'12345',
        jobType:'SDE-1',
        active:true 
      }
    ];
  }

  ngOnInit(){ }


}
