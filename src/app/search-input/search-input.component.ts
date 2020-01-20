import { Component, EventEmitter, Output } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() search = new EventEmitter();
  faTimesCircle = faTimesCircle;
  query = '';

  dismissSearch() {
    this.query = '';
    this.search.emit();
  }
}
