import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPuppy } from './puppy';
import { PuppyService } from './puppy.service';

@Component({
  templateUrl: './puppy-detail.component.html',
  styleUrls: ['./puppy-detail.component.css']
})
export class PuppyDetailComponent implements OnInit {

  pageTitle = 'Puppy Name';
  puppy: IPuppy;
  errorMessage;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private puppySrv: PuppyService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getPuppyById(id);
    }
  }

  getPuppyById(puppyId: number) {
    this.puppySrv.getPuppyById(puppyId).subscribe({
      next: puppy => {
        this.puppy = puppy;
        console.log(`Single Puppy Fetched is:`);
      },
      error: err => { this.errorMessage = err; }
    });
  }


  onBack(): void {
    this.router.navigate(['/puppies']);
  }

}
