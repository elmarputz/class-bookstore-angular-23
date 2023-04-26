import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookFactory } from '../shared/book-factory';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styles: [
  ]
})
export class BookFormComponent implements OnInit {
 
  bookForm : FormGroup;
  book : Book = BookFactory.empty();
  errors : { [key: string]: string } = {};
  isUpdatingBook = false; 
  images : FormArray;

  constructor (
    private fb: FormBuilder,
    private bs: BookStoreService,
    private route: ActivatedRoute, 
    private router: Router
  ) {
    this.bookForm = this.fb.group({});
    this.images = this.fb.array([]);

  }

  ngOnInit(): void {
    const isbn = this.route.snapshot.params["isbn"];
    if (isbn) {
      this.isUpdatingBook = true;
      this.bs.getSingle(isbn).subscribe(
        book => {
            this.book = book; 
            this.initBook();
        }  
      );

    }
    this.initBook();
  }

  initBook() {
    this.buildThumbnailsArray();
    this.bookForm = this.fb.group ({
      id: this.book.id, 
      title: [this.book.title, Validators.required],
      subtitle: this.book.subtitle, 
      isbn: [
        this.book.isbn, [
          Validators.required, 
          Validators.minLength(10),
          Validators.maxLength(13),
        ]
      ],
      description: this.book.description,
      rating: [ this.book.rating, [Validators.min(0), Validators.max(10)]],
      images: this.images, 
      published: [this.book.published, Validators.required]
    });

    this.bookForm.statusChanges.subscribe(() => 
      this.updateErrorMessages());

  }

  buildThumbnailsArray() {
    if (this.book.images) {
      this.images = this.fb.array([]);
      for (let img of this.book.images) {
        let fg = this.fb.group({
          id: new FormControl(img.id),
          url: new FormControl(img.url, [Validators.required]), 
          title: new FormControl(img.title, [Validators.required])

      });
      this.images.push(fg);
      }


    }

  }

  addThumbnailControl() {
    this.images.push(this.fb.group({ id: 0, url: null, title: null }));
  }


  updateErrorMessages() {
    console.log("Is form invalid? " + this.bookForm.invalid);
    this.errors = {};


  }

  submitForm() {}

}
