import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdentityStoreFacade } from '@domains/identity/domain/application-services/identity-store.facade';
import { UserManagerFacade } from '@domains/identity/domain/application-services/user-manager.facade';
import { NotificationService } from '@domains/shared/domain/application-service/notification.service';
import { REDIRECTPAGE } from '@domains/shared/domain/utils/global-constants';
import { forkJoin, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  protected readonly loggedUser$ = this.identityStore.getLoggedUser$;

  protected readonly currentVersion = environment.appVersion;

  protected readonly testingVersion = environment.testing;

  protected readonly now = new Date();

  mobileMenu = false;

  constructor(
    protected readonly identityStore: IdentityStoreFacade,
    protected readonly route: ActivatedRoute,
    protected readonly router: Router,
    protected readonly notificationService: NotificationService,
    protected readonly userManager: UserManagerFacade) {
    this.route.data.pipe(
      (switchMap(() => this.identityStore.getLoggedUser$))
    ).subscribe({
      next: (user) => {
        if(this.router.url === '/') {
          if(user.deviceUnitId){
            this.router.navigate(['/units/'+user.deviceUnitId+'/dashboard']);
            return;
          }
          this.router.navigate(['/hospital']);
        }
      }
    })
  }

  protected onLogout(): void {
    this.userManager.logoutUser().subscribe({
      next: (user) => {
        this.notificationService.showSuccess('Odhlášení proběhlo v pořádku.', '', false);
        if(!this.router.url.includes('hospital') && !this.router.url.includes('dashboard')) {
          this.router.navigate([REDIRECTPAGE.LOGIN_PAGE]);
        }
      }
    });
  }

  textForAvatar(name: string): string {
    if (name && name.length > 1) {
      return name.substring(0, 2).toUpperCase();
    }
    return 'U';
  }

  showMobile(): void {
    this.mobileMenu = true;
  }

  close(): void {
    this.mobileMenu = false;
  }

}
