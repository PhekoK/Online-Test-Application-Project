import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JstestComponent } from './jstest.component';

describe('JstestComponent', () => {
  let component: JstestComponent;
  let fixture: ComponentFixture<JstestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JstestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
