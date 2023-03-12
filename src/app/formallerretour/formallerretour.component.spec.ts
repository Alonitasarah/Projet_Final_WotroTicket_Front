import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormallerretourComponent } from './formallerretour.component';

describe('FormallerretourComponent', () => {
  let component: FormallerretourComponent;
  let fixture: ComponentFixture<FormallerretourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormallerretourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormallerretourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
