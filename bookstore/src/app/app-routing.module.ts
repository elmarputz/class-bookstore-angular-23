import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { NgModule } from "@angular/core";
import { BookFormComponent } from "./book-form/book-form.component";
import { LoginComponent } from "./login/login.component";
import { CanNavigateToAdminGuard } from "./can-navigate-to-admin.guard";



const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'books', component: BookListComponent },
    { path: 'books/:isbn', component: BookDetailsComponent },
    { path: 'admin', component: BookFormComponent, canActivate:[CanNavigateToAdminGuard]  }, 
    { path: 'admin/:isbn', component: BookFormComponent, canActivate:[CanNavigateToAdminGuard] }, 
    { path: 'login', component: LoginComponent }, 

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [CanNavigateToAdminGuard]
})

export class AppRoutingModule {}