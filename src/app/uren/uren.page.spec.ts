import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrenPage } from './uren.page';

describe('UrenPage', () => {
  let component: UrenPage;
  let fixture: ComponentFixture<UrenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
