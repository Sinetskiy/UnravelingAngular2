import {Injectable} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DiveLogApi {
  private DIVE_LOG_API_URL = 
    'http://unraveling-ng.azurewebsites.net/api/backendtest/dives';

  constructor(private http: Http) {
  }

  getDives() {
    return this.http.get(this.DIVE_LOG_API_URL).toPromise()
      .then(resp => resp.json())
      .catch(err => {
        let errMsg = (err.message) 
          ? err.message 
          : err.status ? `${err.status}: ${err.statusText}` : 'Server error';
        console.error(errMsg); 
        return Promise.reject(errMsg);
      })
  };
}