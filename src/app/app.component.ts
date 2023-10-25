import { Component ,OnInit} from '@angular/core';
import {GetApiService} from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jobBoardWebsite';
  constructor(private api:GetApiService){

  }
  ngOnInit(){
    // this.api.apiCall().subscribe((data:any)=>{
      // console.warn("get Api da ta",data);
      // this.title=data['title'];
    // })
  }
}
