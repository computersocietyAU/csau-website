import { Component, OnInit, Injectable } from '@angular/core';
import { Card } from '../article-list/card/card';
import { Cursor } from '../article-list/cursor/cursor';
import { Rewind } from '../article-list/rewind/rewind';
import { RewindComponent } from '../article-list/rewind/rewind.component';
import { Event } from '../events/events';
import { FetchContentService } from '../services/fetch-content.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  host: {
    "(window:resize)": "onWindowResize($event)"
  }
})
export class DescriptionComponent implements OnInit {
  path = "../../assets/images/ArticleListImages/";

  link_text_rewind = "Read More";
  link_text_event = "See Pictures";
  link_text_cursor = "Read More";

  type_rewind = "rewind";
  type_event = "event";
  type_cursor = "cursor";

  content_rewind: Rewind;
  content_event: Event;
  content_cursor: Cursor;

  recent_rewind: string;
  recent_event: string;
  recent_cursor: string;

  mobileWidth: number = 768;
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  isMobile: boolean;

  constructor(private _fetch: FetchContentService) {
    this.content_rewind = this._fetch.getLatestRewind();
    this.recent_rewind = "Recent Rewind Chapter";
    this.content_event = this._fetch.getLatestEvent();
    this.recent_event = "Recent Event : " + this.content_event.title;
    this.content_cursor = this._fetch.getLatestCursor();
    this.recent_cursor = "Recent Cursor Article : " + this.content_cursor.title;
  }

  ngOnInit(): void {
    this.isMobile = this.width < this.mobileWidth;
  }

  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
    this.isMobile = this.width < this.mobileWidth;
  }

}
