
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EventDisplayComponent } from './components/event-display/event-display.component';
import { FaqComponent } from './components/faq/faq.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { EventsComponent } from './components/events/events.component';
import { GroupLeadersComponent } from './components/group-leaders/group-leaders.component';
import { TeamLeadersComponent } from './components/team-leaders/team-leaders.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { EventRegistrationComponent } from './components/event-registration/event-registration.component';

// import { AnalyticsChartsComponent } from './components/analytics-charts/analytics-charts.component';



const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'event-display', component: EventDisplayComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'finance', component: AnalyticsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'group-leaders', component: GroupLeadersComponent },
  { path: 'team-leaders', component: TeamLeadersComponent},
  { path: 'forgetpassword', component: ForgetpasswordComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'sidebar', component: SidebarComponent},
  { path: 'event-registration', component: EventRegistrationComponent},




  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
