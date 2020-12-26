import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewindArticleComponent } from './rewind-article.component';

describe('RewindArticleComponent', () => {
  let component: RewindArticleComponent;
  let fixture: ComponentFixture<RewindArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewindArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewindArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
