import { Component } from '@angular/core';
import { Book } from './shared/book';

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  listOn = true;
  detailsOn = false;

  book : Book | undefined;


}
