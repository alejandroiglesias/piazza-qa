import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { FeedPostGroupComponent } from './feed-post-group/feed-post-group.component';
import { FeedPostsListComponent } from './feed-posts-list/feed-posts-list.component';
import { FeedPostsListItemComponent } from './feed-posts-list-item/feed-posts-list-item.component';
import { FeedToolbarComponent } from './feed-toolbar/feed-toolbar.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    FeedPostGroupComponent,
    FeedPostsListComponent,
    FeedPostsListItemComponent,
    FeedToolbarComponent,
    SearchInputComponent,
  ],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
