import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CURSOR, Cursor } from '../article-list/cursor/cursor';
import { FetchContentService } from '../services/fetch-content.service';

@Component({
  selector: 'app-cursor-article',
  templateUrl: './cursor-article.component.html',
  styleUrls: ['./cursor-article.component.css']
})
export class CursorArticleComponent implements OnInit {
  cursorID: number;
  cursor: Cursor;
  hello = "Hello";
  constructor(private route: ActivatedRoute, private _cursor: FetchContentService) {
    this.cursorID = parseInt(this.route.snapshot.paramMap.get('id'));
    this.cursor = this._cursor.getCursorSingle(this.cursorID);
  }

  ngOnInit(): void {
  }

}


