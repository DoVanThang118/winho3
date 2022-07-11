import {Component, OnInit} from '@angular/core';
import {Entry} from "contentful";
import {ContentfulService} from "../contentful.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  banners: Entry<any>[] = [];
  constructor(private contentfulService: ContentfulService) {
  }
  ngOnInit() {
    this.contentfulService.getBanners().then(banners => this.banners = banners)
  }
}
