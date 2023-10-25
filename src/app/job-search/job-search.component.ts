import { Component,OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

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
    this.fetchDataFromApi1();
    this.fetchDataFromApi2();
    this.fetchDataFromApi3();
    this.fetchDataFromApi4();
    this.fetchDataFromApi5();
    this.fetchDataFromApi6();
    this.fetchDataFromApi7();

  }

  fetchDataFromApi1(){
    const apiUrl1='https://data.usajobs.gov/api/codelist/agencysubelements';
    this.http.get(apiUrl1).subscribe(
      (data)=>{
        console.warn('API Response 1',data);
        this.dataFromApi1=data;
      },error=>{
        console.warn('API Error 1:', error);
      }
    );
  }
  fetchDataFromApi2(){
    const apiUrl2='https://data.usajobs.gov/api/codelist/occupationalseries';
    this.http.get(apiUrl2).subscribe(
      (data)=>{
        console.warn('API Response 2',data);
        this.dataFromApi2=data;
      },error=>{
        console.warn('API Error 2:', error);
      }
    );
  }
  fetchDataFromApi3(){
    const apiUrl3='https://data.usajobs.gov/api/codelist/payplans';
    this.http.get(apiUrl3).subscribe(
      (data)=>{
        console.warn('API Response 3',data);
        this.dataFromApi3=data;
      },error=>{
        console.warn('API Error 3:', error);
      }
    );
  }
  fetchDataFromApi4(){
    const apiUrl4='https://data.usajobs.gov/api/codelist/postalcodes';
    this.http.get(apiUrl4).subscribe(
      (data)=>{
        console.warn('API Response 4',data);
        this.dataFromApi4=data;
      },error=>{
        console.warn('API Error 4:', error);
      }
    );
  }
  fetchDataFromApi5(){
    const apiUrl5='https://data.usajobs.gov/api/codelist/geoloccodes';
    this.http.get(apiUrl5).subscribe(
      (data)=>{
        console.warn('API Response 5',data);
        this.dataFromApi5=data;
      },error=>{
        console.warn('API Error 5:', error);
      }
    );
  }
  fetchDataFromApi6(){
    const apiUrl6='https://data.usajobs.gov/api/codelist/countries';
    this.http.get(apiUrl6).subscribe(
      (data)=>{
        console.warn('API Response 6',data);
        this.dataFromApi6=data;
      },error=>{
        console.warn('API Error 6:', error);
      }
    );
  }
  fetchDataFromApi7(){
    const apiUrl7='https://data.usajobs.gov/api/codelist/countrysubdivisions';
    this.http.get(apiUrl7).subscribe(
      (data)=>{
        console.warn('API Response 7',data);
        this.dataFromApi1=data;
      },error=>{
        console.warn('API Error 7:', error);
      }
    );
  }
  

}
