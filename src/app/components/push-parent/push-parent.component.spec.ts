import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushParentComponent } from './push-parent.component';

describe('PushParentComponent', () => {
  let component: PushParentComponent;
  let fixture: ComponentFixture<PushParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
