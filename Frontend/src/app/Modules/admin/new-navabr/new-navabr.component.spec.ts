import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNavabrComponent } from './new-navabr.component';

describe('NewNavabrComponent', () => {
  let component: NewNavabrComponent;
  let fixture: ComponentFixture<NewNavabrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewNavabrComponent]
    });
    fixture = TestBed.createComponent(NewNavabrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
