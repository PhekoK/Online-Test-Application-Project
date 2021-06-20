import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DptestComponent } from './dptest.component';

describe('DptestComponent', () => {
  let component: DptestComponent;
  let fixture: ComponentFixture<DptestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DptestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DptestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
