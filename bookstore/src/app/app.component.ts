import { Component } from '@angular/core';
import { Book } from './shared/book';
import { AuthenticationService } from './shared/authentication.service';

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  listOn = true;
  detailsOn = false;

  book : Book | undefined;

  constructor(private authService: AuthenticationService) {}

  isLoggedIn() : boolean {
    return this.authService.isLoggedIn();
  }

  getLoginLabel() : string {
    return this.isLoggedIn() ? "Logout" : "Login";
  }

}
