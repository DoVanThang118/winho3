import {Component, OnInit} from '@angular/core';
import {Entry} from "contentful";
import {ContentfulService} from "../contentful.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit{
  news: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) {
  }

  ngOnInit() {
    this.contentfulService.getNews().then(news => this.news = news)
  }
}
