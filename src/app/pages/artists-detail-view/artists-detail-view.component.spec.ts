import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';

import { ArtistsDetailViewComponent } from './artists-detail-view.component';

describe('ArtistsDetailViewComponent', () => {
  let component: ArtistsDetailViewComponent;
  let fixture: ComponentFixture<ArtistsDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsDetailViewComponent ],
      imports: [ RouterModule.forRoot([]), HttpClientModule ]
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
