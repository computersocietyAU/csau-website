import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxGalleryModule } from 'ngx-gallery-9'
import { MatButtonModule } from '@angular/material/button';
import { ShareModule } from 'ngx-sharebuttons'
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RewindArticleComponent } from './rewind-article/rewind-article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CardComponent } from './article-list/card/card.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RewindComponent } from './article-list/rewind/rewind.component';
import { CursorComponent } from './article-list/cursor/cursor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './events/dialog/dialog.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { CursorArticleComponent } from './cursor-article/cursor-article.component';
import { ShareButtonsComponent } from './share-buttons/share-buttons.component';
import { from } from 'rxjs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DescriptionComponent,
    FooterComponent,
    EventsComponent,
    CarouselComponent,
    RewindArticleComponent,
    ArticleListComponent,
    CardComponent,
    AboutUsComponent,
    RewindComponent,
    CursorComponent,
    DialogComponent,
    SocialLinksComponent,
    CursorArticleComponent,
    ShareButtonsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxGalleryModule,
    MatButtonModule,
    ShareModule,
    ShareIconsModule,
    ShareButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
