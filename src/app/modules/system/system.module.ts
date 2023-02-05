import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IdentityFeatureModule } from '@domains/identity/feature/identity-feature.module';
import { SystemRouting } from '../system/system.routing';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SharedDomainModule } from '@domains/shared/domain/shared-domain.module';
import { NzGridModule } from 'ng-zorro-antd/grid';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    SharedDomainModule,
    IdentityFeatureModule,
    SystemRouting,
    NzGridModule,
    NzLayoutModule,
  ]
})
export class SystemModule { }
