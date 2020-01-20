import { Component, Input } from '@angular/core';
import { faStripeS } from '@fortawesome/free-brands-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feed-posts-list-item',
  templateUrl: './feed-posts-list-item.component.html',
  styleUrls: ['./feed-posts-list-item.component.scss'],
})
export class FeedPostsListItemComponent {
  @Input() post;
  faInfo = faInfo;
  faStripeS = faStripeS;
}
