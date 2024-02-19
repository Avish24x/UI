import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SdwdsHeaderComponent, SdwdsHeaderNavbarComponent, SdwdsHeaderNavbarDividerComponent, SdwdsHeaderNavbarItemComponent } from '@sdworx/sdwds/header';
import { SdwdsPasswordInputComponent } from '@sdworx/sdwds/password-input';
import { SdwdsDrawerComponent } from '@sdworx/sdwds/drawer';
import { SdwdsSidenavComponent, SdwdsSidenavItemComponent, } from '@sdworx/sdwds/sidenav';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { SdwdsHeaderProfileButtonComponent, SdwdsHeaderProfileComponent, SdwdsHeaderProfileLinkComponent, SdwdsHeaderProfileListComponent, SdwdsHeaderProfileSelectComponent, } from '@sdworx/sdwds/header-profile';
import { InterceptorsProviders } from './interceptors/interceptors';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AnalyticsChartsComponent } from './components/analytics-charts/analytics-charts.component';

import { FinanceComponent } from './components/finance/finance.component';

import { GroupLeadersComponent } from './components/group-leaders/group-leaders.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TeamLeadersComponent } from './components/team-leaders/team-leaders.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { EventsComponent } from './components/events/events.component';
import { EventRegistrationComponent } from './components/event-registration/event-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    NavbarComponent,
    SidebarComponent,
    AnalyticsComponent,
    AnalyticsChartsComponent,
    FinanceComponent,
    SearchBarComponent,
    

    GroupLeadersComponent,
          LogoutComponent,
          MyprofileComponent,
          PagenotfoundComponent,
          SearchBarComponent,
          SignUpComponent,
          TeamLeadersComponent,
          ForgetpasswordComponent,
          EventRegistrationComponent,
  ],
  imports: [
    SdwdsHeaderComponent,
    HighchartsChartModule,
    SdwdsHeaderNavbarComponent,
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    SdwdsHeaderComponent,
    SdwdsHeaderNavbarComponent,
    SdwdsHeaderNavbarItemComponent,
    SdwdsDrawerComponent,
    SdwdsPasswordInputComponent,
    SdwdsSidenavComponent,
    SdwdsSidenavItemComponent, SdwdsHeaderNavbarDividerComponent,
    FullCalendarModule,
    NgbModule,
    NgSelectModule,
    NgbDatepickerModule,
    SdwdsHeaderProfileComponent,
    SdwdsHeaderProfileButtonComponent,
    SdwdsHeaderProfileLinkComponent,
    SdwdsHeaderProfileSelectComponent,
    SdwdsHeaderProfileListComponent,
    NgbDropdownModule,
    EventsComponent,
    EventsComponent,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token'); // Adjust based on your storage implementation
        },
      },
    }),
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    InterceptorsProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  applicationName: string = 'SD events';
}
