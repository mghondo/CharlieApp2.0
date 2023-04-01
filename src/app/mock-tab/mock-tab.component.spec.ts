import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockTabComponent } from './mock-tab.component';

describe('MockTabComponent', () => {
  let component: MockTabComponent;
  let fixture: ComponentFixture<MockTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
