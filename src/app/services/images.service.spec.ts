import { TestBed } from '@angular/core/testing';

import { of, Observable } from 'rxjs'; 
import { ImagesService } from './images.service';
import {searchResult} from '../store/interface'
import { select } from '@angular-redux/store';

describe('ImagesService', () => {
  let imagesService: ImagesService; 
  

  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [ImagesService]
  })
  imagesService = TestBed.get(ImagesService);
});

  // it('should be created', () => {
  //   // const service: ImagesService = TestBed.get(ImagesService);
  //   expect(imagesService).toBeTruthy();
  // });

  // Add tests for searchList() method
  describe('searchImages', () => {
    it('should return a collection of images', async () => {
      const search ={
            searchKey: 'car',
            limit:25,
            offset:0
      }

      // spyOn(imagesService, 'searchImages').and.returnValue(of(srchRes));

      await imagesService.searchImages(search)
      
      let response : searchResult;

      expect(response.length).toEqual(25);
    });
  });
});
