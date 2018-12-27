import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
const endpoint = 'http://localhost:3000';
const httpOptions = {
headers: new HttpHeaders({
  'Content-Type':  'application/json'
})
};
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProducts(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  doPOST() {
    alert("POST");
    this.http.get("http://localhost:3000/").subscribe(res =>alert(JSON.stringify(res)));
  }

}
