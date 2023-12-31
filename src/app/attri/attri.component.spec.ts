import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttriComponent } from './attri.component';

describe('AttriComponent', () => {
  let component: AttriComponent;
  let fixture: ComponentFixture<AttriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
