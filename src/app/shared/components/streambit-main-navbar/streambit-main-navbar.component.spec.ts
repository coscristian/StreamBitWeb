import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreambitMainNavbarComponent } from './streambit-main-navbar.component';

describe('StreambitMainNavbarComponent', () => {
  let component: StreambitMainNavbarComponent;
  let fixture: ComponentFixture<StreambitMainNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreambitMainNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreambitMainNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
