import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormallerComponent } from './formaller.component';

describe('FormallerComponent', () => {
  let component: FormallerComponent;
  let fixture: ComponentFixture<FormallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormallerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
