import { Component,OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import axios from 'axios';



@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {
  dataFromApi1:any;
  dataFromApi2:any;
  dataFromApi3:any;
  dataFromApi4:any;
  dataFromApi5:any;
  dataFromApi6:any;
  dataFromApi7:any;

  constructor(private http:HttpClient){ }
  
  ngOnInit(){
    // this.fetchDataFromApi1();
    // this.fetchDataFromApi2();
    // this.fetchDataFromApi3();
    // this.fetchDataFromApi4();
    // this.fetchDataFromApi5();
    // this.fetchDataFromApi6();
    // this.fetchDataFromApi7();
  }

  // async fetchDataFromApi1(searcgCompany:String){
  //   const apiUrl1=`https://data.usajobs.gov/api/search?Keyword=${searcgCompany}`;
  //   const headers = new HttpHeaders()
  //     .set('Host', 'data.usajobs.gov')
  //     .set('User-Agent', 'krish200599@gmail.com')
  //     .set('Authorization-Key', 'PBEynuOsrkra7XmLrV0EDNKHj3iag6ecoQfKmsTHcoc=');
  //   this.http.get(apiUrl1, {headers}).subscribe(
  //      (data)=>{
  //       // return data;
  //       // console.log('API Response 1',data);
  //       return data;
  //       // this.dataFromApi1=data;
  //     },error=>{
  //       console.warn('API Error 1:', error);
  //     }
  //   );
  // }
  // fetchDataFromApi2(){
  //   const apiUrl2='https://data.usajobs.gov/api/codelist/occupationalseries';
  //   this.http.get(apiUrl2).subscribe(
  //     (data)=>{
  //       console.warn('API Response 2',data);
  //       this.dataFromApi2=data;
  //     },error=>{
  //       console.warn('API Error 2:', error);
  //     }
  //   );
  // }
  // fetchDataFromApi3(){
  //   const apiUrl3='https://data.usajobs.gov/api/codelist/payplans';
  //   this.http.get(apiUrl3).subscribe(
  //     (data)=>{
  //       console.warn('API Response 3',data);
  //       this.dataFromApi3=data;
  //     },error=>{
  //       console.warn('API Error 3:', error);
  //     }
  //   );
  // }
  // fetchDataFromApi4(){
  //   const apiUrl4='https://data.usajobs.gov/api/codelist/postalcodes';
  //   this.http.get(apiUrl4).subscribe(
  //     (data)=>{
  //       console.warn('API Response 4',data);
  //       this.dataFromApi4=data;
  //     },error=>{
  //       console.warn('API Error 4:', error);
  //     }
  //   );
  // }
  // fetchDataFromApi5(){
  //   const apiUrl5='https://data.usajobs.gov/api/codelist/geoloccodes';
  //   this.http.get(apiUrl5).subscribe(
  //     (data)=>{
  //       console.warn('API Response 5',data);
  //       this.dataFromApi5=data;
  //     },error=>{
  //       console.warn('API Error 5:', error);
  //     }
  //   );
  // }
  // fetchDataFromApi6(){
  //   const apiUrl6='https://data.usajobs.gov/api/codelist/countries';
  //   this.http.get(apiUrl6).subscribe(
  //     (data)=>{
  //       console.warn('API Response 6',data);
  //       this.dataFromApi6=data;
  //     },error=>{
  //       console.warn('API Error 6:', error);
  //     }
  //   );
  // }
  // fetchDataFromApi7(){
  //   const apiUrl7='https://data.usajobs.gov/api/codelist/countrysubdivisions';
  //   this.http.get(apiUrl7).subscribe(
  //     (data)=>{
  //       console.warn('API Response 7',data);
  //       this.dataFromApi1=data;
  //     },error=>{
  //       console.warn('API Error 7:', error);
  //     }
  //   );
  // }
 
  // private fetchDataFroymApi1(searchCompany: string) {
  //   const headers = {
  //     "Host": 'data.usajobs.gov',
  //     "User-Agent": 'krish200599@gmail.com',
  //     "Authorization-Key": 'PBEynuOsrkra7XmLrV0EDNKHj3iag6ecoQfKmsTHcoc='
  //   }
  //   return new Promise<any>((resolve) => {
  //     resolve(this.http.get(`https://data.usajobs.gov/api/Search?PositionTitle=Electrical%20Engineer`, { headers }));
  //   });
  //   // return this.http.get(`https://data.usajobs.gov/api/Search?PositionTitle=Electrical%20Engineer`, { headers });
  // }

  
  private async fetchDataFromApi1(searchCompany:string){
    const apiUrl1=`https://data.usajobs.gov/api/search?Keyword=${searchCompany}`;
    const headers = {
      "Host": 'data.usajobs.gov',
      "User-Agent": 'krish200599@gmail.com',
      "Authorization-Key": 'PBEynuOsrkra7XmLrV0EDNKHj3iag6ecoQfKmsTHcoc='
    }
    return axios.get(apiUrl1,{headers})
  }

  private async fetchDataFromApi2(searchJob:string){
    const apiUrl2=``;
    const headers = {
      "Host": 'data.usajob.gov',
      "User-Agent": 'krish200599@gmail.com',
      "Authorization-Key": 'PBEynuOsrkra7XmLrV0EDNKHj3iag6ecoQfKmsTHcoc='
    }
  }
  


  searchCompany:string|null=null;
  searchJob:string|null=null;
  searchLocation:string|null=null;

  async onSubmit(){
    if(this.searchCompany!=null){
      // console.log(this.searchCompany);
      await this.fetchDataFromApi1(this.searchCompany)
      .then(async (response) => {
        this.dataFromApi1 = await response.data.SearchResult.SearchResultItems;
        console.log(response.data);
      }, (error) => {
        console.log(error);
      });
      // console.warn(this.fetchDataFromApi1(this.searchCompany));
      // console.log(this.dataFromApi1.SearchResult.SearchResultItems)
      console.log(this.dataFromApi1)
    }

    // if(this.searchJob!=null){
    //   console.log(this.searchJob);
    // }

    // if(this.searchLocation!=null){
    //   console.log(this.searchLocation);
    // }
  }

}
