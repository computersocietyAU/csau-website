import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rewind } from '../article-list/rewind/rewind';
import { FetchContentService } from '../services/fetch-content.service';

@Component({
  selector: 'app-rewind-article',
  templateUrl: './rewind-article.component.html',
  styleUrls: ['./rewind-article.component.css']
})
export class RewindArticleComponent implements OnInit {

  rewind: Rewind;
  rewindID: number;

  constructor(private route: ActivatedRoute, private _rewind: FetchContentService) {
    this.rewindID = parseInt(this.route.snapshot.paramMap.get('id'));
    this.rewind = this._rewind.getRewindSingle(this.rewindID);
  }

  ngOnInit(): void {

  }


}
