import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingSessionComponent } from './binding-session.component';

describe('BindingSessionComponent', () => {
  let component: BindingSessionComponent;
  let fixture: ComponentFixture<BindingSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
