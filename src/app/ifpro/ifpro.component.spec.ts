import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfproComponent } from './ifpro.component';

describe('IfproComponent', () => {
  let component: IfproComponent;
  let fixture: ComponentFixture<IfproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
