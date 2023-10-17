import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit{

  user:any;

  constructor(){ 
    this.user={
      name:"krishan",
      tittle:"SDE-2",
      address:"no body knows",
      phone:[
        '21212113',
        '32443232'
      ]
    };
  }

  ngOnInit(){ }


}
