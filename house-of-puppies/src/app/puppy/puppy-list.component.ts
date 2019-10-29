import { Component } from '@angular/core';


@Component({
    selector: 'app-puppy-list',
    templateUrl: './puppy-list.component.html'
})

export class PuppyListComponent {

    pageTitle = 'Puppy List';

    puppies: any[] = [
        {
          puppyId: 1,
          puppyName: 'Jake',
          puppyCode: 'GDN-0011',
          releaseDate: 'March 19, 2019',
          description: 'Leaf rake with 48-inch wooden handle.',
          price: 19.95,
          starRating: 3.2,
          imageUrl: 'assets/images/jake.jpg'
        },
        {
          puppyId: 2,
          puppyName: 'Garden',
          puppyCode: 'GDN-0023',
          releaseDate: 'March 18, 2019',
          description: '15 gallon capacity rolling garden cart',
          price: 32.99,
          starRating: 4.2,
          imageUrl: 'assets/images/pompey.jpg'
        },
        {
          puppyId: 5,
          puppyName: 'Hamm',
          puppyCode: 'TBX-0048',
          releaseDate: 'May 21, 2019',
          description: 'Curved claw steel hammer',
          price: 8.9,
          starRating: 4.8,
          imageUrl: 'assets/images/hamm.jpg'
        },
        {
          puppyId: 8,
          puppyName: 'Cawl',
          puppyCode: 'TBX-0022',
          releaseDate: 'May 15, 2019',
          description: '15-inch steel blade hand saw',
          price: 11.55,
          starRating: 3.7,
          imageUrl: 'assets/images/cawl.jpg'
        },
        {
          puppyId: 10,
          puppyName: 'Hush',
          puppyCode: 'GMG-0042',
          releaseDate: 'October 15, 2018',
          description: 'Standard two-button video game controller',
          price: 35.95,
          starRating: 4.6,
          imageUrl: 'assets/images/hush.jpg'
        }
      ];
}
