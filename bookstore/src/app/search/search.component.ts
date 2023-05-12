import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'bs-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  
  foundBooks: Book[] = [];
  keyup = new EventEmitter<string>();
  @Output() bookSelected = new EventEmitter<Book>();

  constructor (private bs: BookStoreService) {}

  ngOnInit() {
    this.keyup.pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .pipe(switchMap(searchTerm => this.bs.getAllSearch(searchTerm)))
      .subscribe((books => this.foundBooks = books));
  }

}
