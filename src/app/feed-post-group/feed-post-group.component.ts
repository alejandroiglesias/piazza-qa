import { Component, EventEmitter, Input, Output } from '@angular/core';
import ShortUniqueId from 'short-unique-id';

@Component({
  selector: 'app-feed-post-group',
  templateUrl: './feed-post-group.component.html',
  styleUrls: ['./feed-post-group.component.scss'],
})
export class FeedPostGroupComponent {
  @Input() postGroup;
  @Output() postClick = new EventEmitter();
  uid = new ShortUniqueId().randomUUID();
}
