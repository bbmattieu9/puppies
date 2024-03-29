import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{ pageTitle }}</a>
      <ul class='nav nav-pills'>
        <li><a [routerLink]="['/welcome']" class='nav-link'>Home</a></li>
        <li><a [routerLink]="['/puppies']" class='nav-link'>Puppies</a></li>
      </ul>
    </nav>

    <div class="container">
        <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'house-of-puppies';
}
