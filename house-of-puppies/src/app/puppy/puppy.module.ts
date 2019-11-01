import { NgModule } from '@angular/core';
import { PuppyListComponent } from './puppy-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { PuppyDetailComponent } from './puppy-detail.component';
import { RouterModule } from '@angular/router';
import { PuppyDetailGuard } from './puppy-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PuppyListComponent,
    ConvertToSpacesPipe,
    PuppyDetailComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'puppies', component: PuppyListComponent },
      { path: 'puppy/:id',
        canActivate: [PuppyDetailGuard],
        component: PuppyDetailComponent },
    ]),
    SharedModule
  ]
})
export class PuppyModule { }
