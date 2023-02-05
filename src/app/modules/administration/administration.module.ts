import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AdministrationRouting } from './administration.routing';
import { HospitalFeatureModule } from '@domains/hospital/feature/hospital-feature.module';
import { SharedDomainModule } from '@domains/shared/domain/shared-domain.module';
import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { DepartmentFeatureModule } from '@domains/department/feature/department-feature.module';
import { UnitFeatureModule } from '@domains/unit/feature/unit-feature.module';
import { SettingFeatureModule } from '@domains/setting/feature/setting-feature.module';
import { ClientFeatureModule } from '@domains/client/feature/client-feature.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedDomainModule,
    NzLayoutModule,
    NzAvatarModule,
    NzDropDownModule,
    NzModalModule,
    NzGridModule,
    NzDrawerModule,
    NzIconModule,
    NzMenuModule,
    NgxPermissionsModule,
    AdministrationRouting,
    HospitalFeatureModule,
    DepartmentFeatureModule,
    UnitFeatureModule,
    SettingFeatureModule,
    ClientFeatureModule,
  ],
  providers: []
})
export class AdministrationModule { }
