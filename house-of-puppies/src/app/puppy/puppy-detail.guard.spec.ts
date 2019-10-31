import { TestBed, async, inject } from '@angular/core/testing';

import { PuppyDetailGuard } from './puppy-detail.guard';

describe('PuppyDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuppyDetailGuard]
    });
  });

  it('should ...', inject([PuppyDetailGuard], (guard: PuppyDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
