import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOtherComponent } from './content-other.component';

describe('ContentOtherComponent', () => {
  let component: ContentOtherComponent;
  let fixture: ComponentFixture<ContentOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
