import { Injectable } from '@angular/core';
import { Cursor, CURSOR } from '../article-list/cursor/cursor';
import { EVENTS } from '../events/events';
import { REWIND } from '../article-list/rewind/rewind'

@Injectable({
  providedIn: 'root'
})
export class FetchContentService {

  constructor() { }

  // Cursor
  getCursorAll() {
    return CURSOR;
  }

  getCursorSingle(id: number) {
    return CURSOR[CURSOR.length - id];
  }

  getLatestCursor() {
    return CURSOR[0];
  }

  // Event
  getEventsAll() {
    for (let i = 0; i < EVENTS.length; i++) {
      // eventImages helps in deciding whether to have the "See Pictures" link or not
      // If this event has images, then set eventImages to true
      if (EVENTS[i].images) {
        EVENTS[i]["eventImages"] = true;
      }
      // Else false
      else {
        EVENTS[i]["eventImages"] = false;
      }
    }
    return EVENTS;
  }

  getEventSingle(id: number) {
    return EVENTS[EVENTS.length - id];
  }

  getLatestEvent() {
    return EVENTS[0];
  }

  // Rewind

  getRewindAll() {
    return REWIND;
  }

  getRewindSingle(id: number) {
    return REWIND[REWIND.length - id];
  }

  getLatestRewind() {
    return REWIND[0];
  }

}
