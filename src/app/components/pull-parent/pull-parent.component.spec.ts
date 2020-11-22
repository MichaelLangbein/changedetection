import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullParentComponent } from './pull-parent.component';

describe('PullParentComponent', () => {
  let component: PullParentComponent;
  let fixture: ComponentFixture<PullParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
