import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogSampleComponent } from './dialog-sample/dialog-sample.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { RolesComponent } from './data-settings/data-settings/roles/roles.component';
import { UsersComponent } from './data-settings/data-settings/users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentComponent } from './document/document.component';
import { FacultyComponent } from './faculty/faculty.component';
import { TagComponent } from './tag/tag.component';

const routes: Routes = [
  {
    path: '',
    component: MainDashboardComponent,
    children: [
      // {
      //   path: 'dialog',
      //   component: DialogSampleComponent,
      // },
      // {
      //   path: 'roles',
      //   component: RolesComponent,
      // },
      // {
      //   path: 'users',
      //   component: UsersComponent,
      // },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'document',
        component: DocumentComponent
      },
      {
        path: 'faculty',
        component: FacultyComponent
      },
      {
        path: 'tag',
        component: TagComponent
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
