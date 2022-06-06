import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsListViewComponent } from './artists-list-view.component';

describe('ArtistsListViewComponent', () => {
  let component: ArtistsListViewComponent;
  let fixture: ComponentFixture<ArtistsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
