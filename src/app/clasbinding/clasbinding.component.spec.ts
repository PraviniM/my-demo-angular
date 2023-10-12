import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasbindingComponent } from './clasbinding.component';

describe('ClasbindingComponent', () => {
  let component: ClasbindingComponent;
  let fixture: ComponentFixture<ClasbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasbindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
