import { TestBed } from '@angular/core/testing';

import { DeezerDatasourceService } from './deezer-datasource.service';

describe('DeezerDatasourceService', () => {
  let service: DeezerDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeezerDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
