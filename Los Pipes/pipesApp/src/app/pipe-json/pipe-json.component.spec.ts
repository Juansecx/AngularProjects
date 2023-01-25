import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeJSONComponent } from './pipe-json.component';

describe('PipeJSONComponent', () => {
  let component: PipeJSONComponent;
  let fixture: ComponentFixture<PipeJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeJSONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
