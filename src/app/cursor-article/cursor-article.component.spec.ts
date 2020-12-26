import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorArticleComponent } from './cursor-article.component';

describe('CursorArticleComponent', () => {
  let component: CursorArticleComponent;
  let fixture: ComponentFixture<CursorArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursorArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursorArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
