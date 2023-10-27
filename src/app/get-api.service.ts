import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient) { }

  apiCall() {
    const headers = new HttpHeaders()
      .set('Host', 'data.usajobs.gov')
      .set('User-Agent', 'krish200599@gmail.com')
      .set('Authorization-Key', 'PBEynuOsrkra7XmLrV0EDNKHj3iag6ecoQfKmsTHcoc=');

    return this.http.get('https://data.usajobs.gov/api/Search?JobCategoryCode=2210', { headers });
  }

}
