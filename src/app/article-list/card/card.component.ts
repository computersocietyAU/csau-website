import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../events/dialog/dialog.component';
import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() content: Card;
  @Input() link_text: string;
  @Input() type: string;
  @Input() recent: string;

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(data) {
    this.dialog.open(DialogComponent, {
      data: {
        id: data,
      },
      backdropClass: 'dialogBG',
      autoFocus: false,
      minWidth: 350,
    });
  }
  gotoArticle(articleID: number) {
    if (this.type === "event") {
      this.openDialog(articleID);
    }
    else if (this.type === "rewind") {
      this.router.navigate(['articles/rewind', articleID],);
    }
    else if (this.type === "cursor") {
      this.router.navigate(['articles/cursor', articleID],);
    }
  }
}
