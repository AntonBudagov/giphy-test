import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class GiphyService {
  private url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='
  private apiUrl = 'https://api.giphy.com/v1/gifs/';
  private clientKey = 'dc6zaTOxFJmzC';
  constructor(private http: Http) { }


  // this.http.get - отправка get запроса по указанному адресу
  // метод возвращает объект Observable из библиотеки RxJS
  search(name: string): Observable<any[]> {
    // return this.http
    //     .get(this.url + `${name}`)
    //     .map(res => res.json().data)
    //     .catch(this.handleError);
    // вот так еще можно передать параметры
    let params: URLSearchParams = new URLSearchParams();
    params.set('api_key', this.clientKey);
    params.set('q', name);
    return this.http
      .get(this.apiUrl + 'search', {search: params})
			.map(this.extractData) // преобразовывает ответ в массив экземпляров search.
      .catch(this.handleError);

  }
  trending(): Observable<any> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('api_key', this.clientKey);
    return this.http
        .get(this.apiUrl + 'trending', {search: params + '&q=&limit=25&offset=0&rating=G&lang=en'})
        .map(res => res.json().data)  // преобразовывает ответ в массив экземпляров search.
        .catch(this.handleError);
  }

  // пример из официальной документации, рекомендуют при такйо записи если что то пойдет не так вернет пустой обьект
  private extractData(res: Response): any {
    const body = res.json().data;
    return body || {};
  }

  private handleError(error:any) {

    const errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
