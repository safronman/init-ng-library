import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InLibComponent } from './in-lib.component';

describe('InLibComponent', () => {
  let component: InLibComponent;
  let fixture: ComponentFixture<InLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
