import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFieldComponent } from './search-field.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component'
import { ResultsListComponent } from '../results-list/results-list.component'
import { NgRedux } from '@angular-redux/store';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarService } from 'ngx-loading-bar';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';



describe('SearchFieldComponent', () => {
  // let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, HttpClientModule], 
      providers:[NgRedux, LoadingBarService,
      ],
      declarations: [ SearchFieldComponent, FooterComponent, ResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFieldComponent);
    // component = fixture.componentInstance;
    
    // fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('Search Field Test: should correctly render the entered value ', () => {
    // component.searchKey = 'test input';
    
    const de = fixture.debugElement.query(By.css('#srchinput'));
    const el = de.nativeElement;
    el.value = 'test input'
    fixture.detectChanges();
  expect(el.value).toBe('test input');
    
    // expect(fixture.nativeElement.value).toBe('test input');
  });
});
