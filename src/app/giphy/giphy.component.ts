import { Component, OnInit } from '@angular/core';
import {GiphyService} from "../giphy.service";

// Свойства, которые будут устанавливаться
@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  giphies = [];
  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
  }

  // с помощью метода subscribe подписываемся на событие
  // событие произойдет после получение ответа от сервера.
  search(value: HTMLInputElement) {
    this.giphyService.search(value.value)
        // мы используем обычну стрелочну функции где value - аргумент передаем функциию
        .subscribe(value => this.giphies = value)


    // console.log(value.value);
    // return console.log(value.value);

  }

}
