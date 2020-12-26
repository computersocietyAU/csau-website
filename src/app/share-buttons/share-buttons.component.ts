import { Component, OnInit } from '@angular/core';
import { ShareService } from 'ngx-sharebuttons';

@Component({
  selector: 'app-share-buttons',
  templateUrl: './share-buttons.component.html',
  styleUrls: ['./share-buttons.component.css']
})
export class ShareButtonsComponent implements OnInit {

  constructor(private share:ShareService) { }

  ngOnInit(): void {
  }

}
