import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailHospitalizationPageResolver } from '@domains/client/domain/resolver/client-detail-hospitalization-page.resolver';
import { RoomDetailHistoryPageResolver } from '@domains/client/domain/resolver/room-detail-history-page.resolver';
import { SearchPacientDetailPageComponent } from '@domains/client/feature/pages/search-pacient-detail-page/search-pacient-detail-page.component';
import { SearchPatientIndexPageComponent } from '@domains/client/feature/pages/search-patient-index-page/search-patient-index-page.component';
import { SearchRoomDetailPageComponent } from '@domains/client/feature/pages/search-room-detail-page/search-room-detail-page.component';
import { DepartmentDetailPageResolver } from '@domains/department/domain/resolver/department-detail-page.resolver';
import { DepartmentListPageResolver } from '@domains/department/domain/resolver/department-list-page.resolver';
import { DepartmentDetailPageComponent } from '@domains/department/feature/pages/department-detail-page/department-detail-page.component';
import { DepartmentListPageComponent } from '@domains/department/feature/pages/department-list-page/department-list-page.component';
import { HospitalOverviewPageResolver } from '@domains/hospital/domain/resolver/hospital-overview-page.resolver';
import { HospitalDashboardPageComponent } from '@domains/hospital/feature/pages/hospital-dashboard-page/hospital-dashboard-page.component';
import { AuthGuard } from '@domains/identity/domain/guards/auth.guard';
import { HospitalListUserPageResolver } from '@domains/identity/domain/resolver/hospital-list-page.resolver';
import { UserListPageComponent } from '@domains/identity/feature/pages/user-list-page/user-list-page.component';
import { SettingIndexPageComponent } from '@domains/setting/feature/pages/setting-index-page/setting-index-page.component';
import { UnitDashboardPageResolver } from '@domains/unit/domain/resolver/unit-dashboard-page.resolver';
import { UnitDetailPageResolver } from '@domains/unit/domain/resolver/unit-detail-page.resolver';
import { UnitListPageResolver } from '@domains/unit/domain/resolver/unit-list-page.resolver';
import { UnitDashboardPageComponent } from '@domains/unit/feature/pages/unit-dashboard-page/unit-dashboard-page.component';
import { UnitDetailPageComponent } from '@domains/unit/feature/pages/unit-detail-page/unit-detail-page.component';
import { UnitListPageComponent } from '@domains/unit/feature/pages/unit-list-page/unit-list-page.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: LayoutComponent, children: [
      {
        path: 'hospital', component: HospitalDashboardPageComponent,
        resolve: {
          hospital: HospitalOverviewPageResolver
        }
      },
      {
        path: 'departments', component: DepartmentListPageComponent,
        resolve: {
          list: DepartmentListPageResolver
        }
      },
      {
        path: 'departments/:id/detail', component: DepartmentDetailPageComponent,
        resolve: {
          detail: DepartmentDetailPageResolver
        }
      },
      {
        path: 'units', component: UnitListPageComponent,
        resolve: {
          list: UnitListPageResolver
        }
      },
      {
        path: 'units/:id/detail', component: UnitDetailPageComponent,
        resolve: {
          detail: UnitDetailPageResolver
        }
      },
      {
        path: 'units/:id/dashboard', component: UnitDashboardPageComponent,
        resolve: {
          unit: UnitDashboardPageResolver
        }
      },
      {
        path: 'settings', canActivate: [NgxPermissionsGuard], component: SettingIndexPageComponent,
        data: {
          permissions: {
            only: ['PROPERTY_MANAGE'],
            redirectTo: '/hospital'
          }
        }
      },
      {
        path: 'search', canActivate: [NgxPermissionsGuard], component: SearchPatientIndexPageComponent,
        data: {
          permissions: {
            only: ['CLIENT_SEARCH_NOW', 'CLIENT_SEARCH_HISTORY'],
            redirectTo: '/hospital'
          }
        }
      },
      {
        path: 'search/pacient/:id/detail', component: SearchPacientDetailPageComponent,
        resolve: {
          times: ClientDetailHospitalizationPageResolver
        },
        data: {
          permissions: {
            only: ['CLIENT_SEARCH_NOW', 'CLIENT_SEARCH_HISTORY'],
            redirectTo: '/hospital'
          }
        }
      },
      {
        path: 'search/room/:id/detail', component: SearchRoomDetailPageComponent,
        resolve: {
          data: RoomDetailHistoryPageResolver
        },
        data: {
          permissions: {
            only: ['CLIENT_SEARCH_NOW', 'CLIENT_SEARCH_HISTORY'],
            redirectTo: '/hospital'
          }
        }
      },
      {
        path: 'users', canActivate: [NgxPermissionsGuard], component: UserListPageComponent,
        resolve: {
          list: HospitalListUserPageResolver
        },
        data: {
          permissions: {
            only: ['USER_LIST'],
            redirectTo: '/hospital'
          }
        }
      },
    ],
  },
  { path: '', redirectTo: '/hospital', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRouting { }

