import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }from 'rxjs';
import * as urljoin from 'url-join';
import { environment } from '../environment/environment';

@Injectable()
export abstract class ApiService<T> {
  private baseUrl: string;
  private requestOpts;

  constructor(
    private http: Http,
  ){
    this.baseUrl = urljoin(environment.apiUrl, this.many);
    this.requestOpts = {
      // headers: {
      // 	'Authorization': 'Bearer'
      // }
    }
  }

  abstract get many():string;
  abstract get one():string;

  query(): Observable<T[]> {
    return this.makeRequest('get', this.baseUrl);
  }

  get(id: number): Observable<T> {
    return this.makeRequest('get', urljoin(this.baseUrl, id));
  }

  create(params): Observable<T> {
    let body = {};
    body[this.one] = params;
    return this.makeRequest('post', this.baseUrl, body);
  }

  update(id: number, params): Observable<T> {
    let body = {};
    body[this.one] = params;
    return this.makeRequest('put', urljoin(this.baseUrl, id), body);
  }

  destroy(id: number): Observable<T> {
    return this.makeRequest('delete', urljoin(this.baseUrl, id));
  }

  private makeRequest(method: string, url: string, body?): Observable<T | T[]> {
    let opts = Object.assign({}, this.requestOpts, { method, body });
    return this.http.request(url, opts)
      .map(this.extractData.bind(this))
      .catch(this.handleError)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body[this.one] || body[this.many] || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
