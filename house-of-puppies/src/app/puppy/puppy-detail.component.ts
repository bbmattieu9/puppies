import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPuppy } from './puppy';

@Component({
  templateUrl: './puppy-detail.component.html',
  styleUrls: ['./puppy-detail.component.css']
})
export class PuppyDetailComponent implements OnInit {

  pageTitle = 'Puppy Name';
  puppy: IPuppy;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.puppy =  {
      puppyId: 10,
      puppyName: 'Hush',
      puppyCode: 'GMG-0042',
      releaseDate: 'October 15, 2019',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      imageUrl: 'assets/images/hush.jpg'
};
  }


  onBack(): void {
    this.router.navigate(['/puppies']);
  }

}
