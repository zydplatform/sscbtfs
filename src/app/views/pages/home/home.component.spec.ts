import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { HomeComponent } from './home.component';
import { IconModule } from '@coreui/icons-angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [FormModule, CardModule, GridModule, ButtonModule, IconModule],
      providers: [IconSetService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
