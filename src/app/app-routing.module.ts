import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CursorComponent } from './article-list/cursor/cursor.component';
import { RewindComponent } from './article-list/rewind/rewind.component';
import { CursorArticleComponent } from './cursor-article/cursor-article.component';
import { DescriptionComponent } from './description/description.component';
import { EventsComponent } from './events/events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RewindArticleComponent } from './rewind-article/rewind-article.component';

const routes: Routes = [
  { path: '', component: DescriptionComponent },
  {
    path: 'articles', component: ArticleListComponent, children: [
      { path: '', redirectTo: 'rewind', pathMatch: 'full' },
      {
        path: 'rewind', component: RewindComponent
      },
      { path: 'cursor', component: CursorComponent },
    ]
  },
  { path: 'articles/rewind/:id', component: RewindArticleComponent },
  { path: 'articles/cursor/:id', component: CursorArticleComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'cursor', component: CursorArticleComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
