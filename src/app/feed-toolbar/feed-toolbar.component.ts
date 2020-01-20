import { Component, EventEmitter, Output } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feed-toolbar',
  templateUrl: './feed-toolbar.component.html',
  styleUrls: ['./feed-toolbar.component.scss'],
})
export class FeedToolbarComponent {
  @Output() newPost = new EventEmitter();
  @Output() search = new EventEmitter();
  faFile = faFile;
}
