import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRegistrationComponent } from './movie-registration.component';

describe('MovieRegistrationComponent', () => {
  let component: MovieRegistrationComponent;
  let fixture: ComponentFixture<MovieRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
