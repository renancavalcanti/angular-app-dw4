import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CounterComponent, ListProductsComponent, LoginComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  auth$: Observable<boolean>;

  constructor(private authService: AuthService){
    this.auth$ = this.authService.auth$;
  }

  name = 'Renan Cavalcanti';
  imageUrl = "https://i.pinimg.com/736x/39/4b/f6/394bf6e1c3f2a7351105290ef9fe9dd1.jpg";

  clickButton(){
    //console.log("Button Clicked")
    this.imageUrl = "https://cdn.pixabay.com/photo/2016/06/01/07/41/blue-button-1428506_640.png";
  }

  isLoggedIn: boolean = true;

  items: string[] = ["Item A", "Item B", "Item C", "Item D"];

  isActive: boolean = false;

  textColor = 'green';
  fontSize = 40;
}
