import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeNumberComponent } from './pipe-number.component';

describe('PipeNumberComponent', () => {
  let component: PipeNumberComponent;
  let fixture: ComponentFixture<PipeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
