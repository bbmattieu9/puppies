import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './puppy-detail.component.html',
  styleUrls: ['./puppy-detail.component.css']
})
export class PuppyDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
  }

}
