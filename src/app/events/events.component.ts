import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { FetchContentService } from '../services/fetch-content.service';
import { Event } from '../events/events';
import { Card } from '../article-list/card/card';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  data = { "msg": "Hello World" }
  path = "assets/events/";
  link_text = "See Pictures";
  type = "event"

  events: Array<Card>;

  constructor(public dialog: MatDialog, private _events: FetchContentService) {
    this.events = this._events.getEventsAll();
  }

  ngOnInit(): void {
  }

  openDialog(data) {
    this.dialog.open(DialogComponent, {
      data: {
        movie: data,
      },
      backdropClass: 'dialogBG',
      autoFocus: false,
      minWidth: 350,
    });
  }

  clickedBtn() {
    this.openDialog(this.data);
  }

}
