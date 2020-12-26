import { Component, OnInit, Injectable } from '@angular/core';
import { FetchContentService } from 'src/app/services/fetch-content.service';
import { Rewind } from '../rewind/rewind';
import { Card } from '../card/card';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-rewind',
  templateUrl: './rewind.component.html',
  styleUrls: ['./rewind.component.css']
})
export class RewindComponent implements OnInit {
  rewind: Array<Card>;
  path = "assets/images/ArticleListImages/";
  link_text = "Read More";
  type = "rewind";

  constructor(private _rewind: FetchContentService) {
    this.rewind = this._rewind.getRewindAll();
    // if (this.rewind[0].recent) {
    //   delete this.rewind[0].recent;
    // }

  }

  ngOnInit(): void {
  }

}
