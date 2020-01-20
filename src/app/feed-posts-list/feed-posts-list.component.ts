import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feed-posts-list',
  templateUrl: './feed-posts-list.component.html',
  styleUrls: ['./feed-posts-list.component.scss'],
})
export class FeedPostsListComponent {
  @Input() posts;

  onPostClick(post) {
    post.isRead = true;
  }
}
