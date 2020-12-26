import { Component, OnInit } from '@angular/core';
import { FetchContentService } from 'src/app/services/fetch-content.service';
import { Cursor } from './cursor';
import { Router } from '@angular/router';
import { Card } from '../card/card';


@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent implements OnInit {

  path = "assets/cursor/";
  cursor: Array<Card>;
  link_text = "Read More";
  type = "cursor";

  constructor(private _cursor: FetchContentService, private router: Router) {
    this.cursor = this._cursor.getCursorAll();
  }

  ngOnInit(): void {
  }


  gotoCursor(id: number) {
    this.router.navigate(['articles/cursor', id]);
  }



}

// class Cursor {
//   title: string;
//   author: string;
//   date?: string;
//   filepath: string;
//   image?: string;
//   department: string;
//   tag: string;
// }