import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsDetailViewComponent } from './artists-detail-view.component';

describe('ArtistsDetailViewComponent', () => {
  let component: ArtistsDetailViewComponent;
  let fixture: ComponentFixture<ArtistsDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
