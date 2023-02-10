import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInputComponent } from './tabla-input.component';

describe('TablaInputComponent', () => {
  let component: TablaInputComponent;
  let fixture: ComponentFixture<TablaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
