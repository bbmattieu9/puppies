import { Component, OnInit } from '@angular/core';
import { IPuppy } from './puppy';
import { PuppyService } from './puppy.service';


@Component({
    selector: 'app-puppy-list',
    templateUrl: './puppy-list.component.html',
    styleUrls: ['./puppy-list.component.css']
})

export class PuppyListComponent implements OnInit {

    pageTitle = 'Puppy List';

    constructor(private puppySrv: PuppyService) {}

    puppies: IPuppy[] = [];
    errorMessage;

      onRatingClicked(message: string): void {
        this.pageTitle = 'Puppies: ' + message;
      }

      getPuppies(): void {
          this.puppySrv.getPuppies().subscribe({
            next(puppies) { this.puppies = puppies; },
            error(err) { this.errorMessage = err; }
          });
      }

      ngOnInit(): void {
        this.getPuppies();
      }
}
