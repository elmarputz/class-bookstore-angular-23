import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookFactory } from '../shared/book-factory';

@Component({
  selector: 'bs-book-details',
  templateUrl: './book-details.component.html',
  styles: [
  ]
})
export class BookDetailsComponent {

  book : Book = BookFactory.empty();

  constructor (
    private bs: BookStoreService, 
    private route: ActivatedRoute,
    private router: Router, 
  ) {}

  ngOnInit () {
    const params = this.route.snapshot.params;
    this.bs.getSingle(params['isbn']).subscribe((b:Book) => this.book = b);

  }

  getRating (num: number) {
    return new Array(num);
  }

  removeBook() {
    if (confirm('Buch wirklich löschen?')) {
      this.bs.remove(this.book.isbn).subscribe((res:any) => this.router.navigate(['../'], 
       { relativeTo: this.route }));
    }

  }

}
