import { Component, OnInit } from '@angular/core';
import {GiphyService} from '../giphy.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  trending: any[] = [];
  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
    this.giphyService.trending()
        .subscribe(trending => this.trending = trending);
    console.log(this.trending);


  }

}
