import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylebingComponent } from './stylebing.component';

describe('StylebingComponent', () => {
  let component: StylebingComponent;
  let fixture: ComponentFixture<StylebingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylebingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylebingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
