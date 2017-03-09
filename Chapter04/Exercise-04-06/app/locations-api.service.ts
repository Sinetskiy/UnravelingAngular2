import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Location} from './location';

const URL = 'http://unraveling-ng.azurewebsites.net/api/dive/location/';
const USER_ID = '3ef7c9b4-94b5-4601-a021-27c9e8033b0c';
const USER_SECRET = '5e7ee2b0c7e8403b97a7e292a47bdf17964a899e36344d72bf2c4b8e6b423b31e78d5b8e65da4dbfbccd031cc7a9e0a2';

@Injectable()
export class LocationsApiService {
  private locations: Location[] = [];

  constructor(private http: Http) {
  }

  getLocations() {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.get(URL, options).toPromise()
      .then(resp => resp.json())
      .catch(this.handleError)
  }
  
  getLocationById(id: number) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.get(URL + id, options).toPromise()
      .then(resp => resp.json())
      .catch(this.handleError)
  }

  addLocation(location) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.post(URL, location, options).toPromise()
      .then(resp => resp.json())
      .catch(this.handleError)
  }
    
  removeLocation(id) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.delete(URL + id, options).toPromise()
      .then()
      .catch(this.handleError)
  }
  
  updateLocation(location) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });
    return this.http.put(URL, location, options).toPromise()
      .then()
      .catch(this.handleError)
  }

  private getHeaders() {
    return new Headers({
      'Authorization': `TenantSecret ${USER_ID},${USER_SECRET}` 
    });
  }

  private handleError(err) {
    let errMsg = (err.message) 
      ? err.message 
      : err.status ? `${err.status}: ${err.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);   
  }
}