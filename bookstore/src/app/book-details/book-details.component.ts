import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bs-book-details',
  templateUrl: './book-details.component.html',
  styles: [
  ]
})
export class BookDetailsComponent {

  @Input() book : Book | undefined
  @Output() showListEvent = new EventEmitter<any>();


  showBookList() {
    this.showListEvent.emit();
  }

}
