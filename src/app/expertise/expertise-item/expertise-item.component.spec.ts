import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseItemComponent } from './expertise-item.component';

describe('ExpertiseItemComponent', () => {
  let component: ExpertiseItemComponent;
  let fixture: ComponentFixture<ExpertiseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertiseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertiseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
