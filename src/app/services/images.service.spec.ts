import { TestBed } from '@angular/core/testing';

import { of, Observable } from 'rxjs'; 
import { ImagesService } from './images.service';
import {searchResult} from '../store/interface'
import { HttpClientModule } from '@angular/common/http';
import { NgRedux } from '@angular-redux/store';
import {LoadingBarService} from "ngx-loading-bar";

describe('ImagesService', () => {
  let imagesService: ImagesService; 
  

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[HttpClientModule], 
    providers: [ImagesService, NgRedux, LoadingBarService]
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
      let response : searchResult;

      spyOn(imagesService, 'searchImages').and.returnValue(of(response.data));

      await imagesService.searchImages(search)

      expect(response.data.length).toEqual(25);
    });
  });
});
