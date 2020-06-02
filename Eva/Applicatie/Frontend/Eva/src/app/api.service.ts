import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SERVER_URL = 'http://127.0.0.1:4201/';

  /**;'Access-Control-Allow-Origin': '*',  **/
  constructor(private httpClient: HttpClient) {
  }

  public filter(body) {
    return this.httpClient.post<any>(this.SERVER_URL + 'filter', JSON.stringify(body));
  }

  public getCriteria() {
    return this.httpClient.get(this.SERVER_URL + 'getCriteria');
  }

  public upload(formData) {
    return this.httpClient.post<any>(this.SERVER_URL + 'uploadFile', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  public getProperties() {
    return this.httpClient.get(this.SERVER_URL + 'getProperties');
  }

  public execute(rows: any[], desiredProperties: any[]) {
    const body = '{' + '\"Totalrows\":' + (rows.length - 1) + ',\"PropertyExtractionScript\":' + JSON.stringify(desiredProperties[0].PropertyExtractionScript) + ', \"rows\": ' +
      JSON.stringify(rows) + '}';
    return this.httpClient.post<any>(this.SERVER_URL + 'Execute', body);
  }
}
