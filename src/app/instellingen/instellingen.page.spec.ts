import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstellingenPage } from './instellingen.page';

describe('InstellingenPage', () => {
  let component: InstellingenPage;
  let fixture: ComponentFixture<InstellingenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstellingenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstellingenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
