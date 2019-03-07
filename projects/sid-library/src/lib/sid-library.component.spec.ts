import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidLibraryComponent } from './sid-library.component';

describe('SidLibraryComponent', () => {
  let component: SidLibraryComponent;
  let fixture: ComponentFixture<SidLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
