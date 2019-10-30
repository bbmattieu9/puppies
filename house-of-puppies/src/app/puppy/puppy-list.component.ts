import { Component, OnInit } from '@angular/core';
import { IPuppy } from './puppy';
import { PuppyService } from './puppy.service';


@Component({
    templateUrl: './puppy-list.component.html',
    styleUrls: ['./puppy-list.component.css']
})

export class PuppyListComponent implements OnInit {

    pageTitle = 'Puppy List';

    constructor(private puppySrv: PuppyService) {}

    puppiesArr: IPuppy[];
    errorMessage;

      onRatingClicked(message: string): void {
        this.pageTitle = 'Puppies: ' + message;
      }

      getPuppies(): void {
           this.puppySrv.getPuppies().subscribe({
            next: puppies => {
            this.puppiesArr = puppies;
            console.log('An array of Puppies: ', this.puppiesArr);
          },
            error: err => { this.errorMessage = err; }
          });
      }

      ngOnInit(): void {
        this.getPuppies();
      }
}
