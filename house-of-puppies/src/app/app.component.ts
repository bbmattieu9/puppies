import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  <h1>
    Welcome to {{ title }}!!
  </h1>
  <app-puppy-list></app-puppy-list>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'house-of-puppies';
}
