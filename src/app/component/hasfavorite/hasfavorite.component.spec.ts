import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasfavoriteComponent } from './hasfavorite.component';

describe('HasfavoriteComponent', () => {
  let component: HasfavoriteComponent;
  let fixture: ComponentFixture<HasfavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasfavoriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HasfavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
