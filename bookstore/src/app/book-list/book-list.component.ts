import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book, Image, Author } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: [
  ]
})
export class BookListComponent implements OnInit {

  books: Book[] = [];


  constructor (private bs: BookStoreService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.bs.getAll().subscribe(res => this.books = res);
    this.toastr.success('Booklist loaded', 'Everything ok');

  }



}
