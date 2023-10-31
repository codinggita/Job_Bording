import { Component,OnInit } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import axios from 'axios';



@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {
  
  constructor(private http:HttpClient){ }
  
  ngOnInit(){}
 
  dataFromApi1:any;
  dataFromApi2:any;
  dataFromApi3:any;
  dataFromApi4:any;
  dataFromApi5:any;
  dataFromApi6:any;
  dataFromApi7:any;
  
  searchCompany:string|null=null;
  minRange:string|null=null;
  maxRange:string|null=null;
  searchLocation:string|null=null;

  readonly headers = {
    "Host": 'data.usajob.gov',
    "User-Agent": 'krish200599@gmail.com',
    "Authorization-Key": 'PBEynuOsrkra7XmLrV0EDNKHj3iag6ecoQfKmsTHcoc='
  }

  private async fetchDataFromApi(headers:any ,apiUrl:string){
    return axios.get(apiUrl ,{headers});
  }
  
  async getData(headers :any ,apiUrl:string ){
    return await this.fetchDataFromApi(headers ,apiUrl)
    .then(async (response) => {
      // dataFromApi = await response.data.SearchResult.SearchResultItems;
      return response;
    }, (error) => {
      console.error(error);
    });
  }



  commonData:any;
  
  async onSubmit(){

    this.commonData = null;

    if (this.searchCompany != null) {
      console.log(this.searchCompany);
    
      const apiUrl1 = `https://data.usajobs.gov/api/search?Keyword=${this.searchCompany}`;
      const Api2Data = this.searchCompany.replace(/ /g, "%20");
      const apiUrl2 = `https://data.usajobs.gov/api/Search?PositionTitle=${Api2Data}`;
    
      // Fetch data from the 1 API
      this.dataFromApi1 = await this.getData(this.headers, apiUrl1);
      this.dataFromApi1 = this.dataFromApi1.data.SearchResult.SearchResultItems;

      // Fetch data from the 2 API
      this.dataFromApi2 = await this.getData(this.headers, apiUrl2);
      this.dataFromApi2 = this.dataFromApi2.data.SearchResult.SearchResultItems;

      // console.log("Data from API 1:", this.dataFromApi1);
      // console.log("Data from API 2:", this.dataFromApi2);
    
      // Combine or manipulate the data as needed
      this.commonData = [...this.dataFromApi1, ...this.dataFromApi2];
    }

    // console.warn("common Data",this.commonData);
    
    if(this.minRange!=null || this.maxRange!=null){ 
      if(this.minRange==null && this.maxRange){
        for(let i = 0 ; i < this.commonData.length ; i++){
          if(this.commonData[i].MatchedObjectDescriptor.PositionRemuneration[0].MaximumRange <= this.maxRange){
            delete this.commonData[i];
          }
        }
      }else if(this.maxRange==null){
    
      }else{
    
      }
    }

    if(this.searchLocation!=null){
    

    }

    // to remove empty slots from the commonData
    const removeEmptySlots = (data:any) => data.filter((element:any) => element !== undefined && element !== null);
    
    this.commonData = removeEmptySlots(this.commonData);

    // Output the combined datax
    console.warn("Common Data:", this.commonData);

  }
}
