import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery-9';
import { FetchContentService } from 'src/app/services/fetch-content.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  eventImages;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private location: Location, private _event: FetchContentService) {
    this.eventImages = this._event.getEventSingle(this.data.id).images;
  }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '800px',
        height: '400px',
        thumbnailsColumns: 4,
        imageSize: NgxGalleryImageSize.Contain,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        thumbnailsSwipe:true,
        imageSwipe: true,
        closeIcon: 'fas fa-times',
        preview: true,
        previewSwipe: true,
        fullscreenIcon: 'fa fa-arrows-alt',
        previewForceFullscreen: true
      },
      {
        breakpoint: 1060,
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageSize: NgxGalleryImageSize.Contain,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        thumbnailsSwipe:true,
        imageSwipe: true,
        closeIcon: 'fas fa-times',
        previewForceFullscreen: false,
        previewSwipe: true,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '400px',
        imagePercent: 80,
        imageSize: NgxGalleryImageSize.Contain,
        thumbnails: false,
        imageSwipe: true,
        preview: true,
        previewSwipe: true,
        previewForceFullscreen: false
      },
      {
        breakpoint: 500,
        width: '100%',
        height: '400px',
        imagePercent: 80,
        imageSize: NgxGalleryImageSize.Contain,
        preview: true,
        previewSwipe: true,
        thumbnails: false,
        imageSwipe: true,
        closeIcon: 'fas fa-times',
        previewForceFullscreen: false
      },
      // max-width 400

    ];

    this.galleryImages = this.eventImages;
  }

}



