import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreambitButtonComponent } from './streambit-button.component';

describe('StreambitButtonComponent', () => {
  let component: StreambitButtonComponent;
  let fixture: ComponentFixture<StreambitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreambitButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreambitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
