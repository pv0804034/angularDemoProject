import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbDialogModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
  NbToggleModule,
  NbUserModule,
  NbWindowModule,
} from '@nebular/theme';
import { PagesRoutingModule } from './pages-routing.module';
import { OneColumnLayoutComponent } from '../layouts/one-column/one-column.layout';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DialogSampleComponent } from './dialog-sample/dialog-sample.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataSettingsModule } from './data-settings/data-settings/data-settings.module';
import { TableFilterPipe } from '../pipes/table-filter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DocumentComponent } from './document/document.component';
import { FacultyComponent } from './faculty/faculty.component';
import { TagComponent } from './tag/tag.component';

const COMPONENTS = [
  MainDashboardComponent,
  OneColumnLayoutComponent,
  DialogSampleComponent,
  HeaderComponent,
  TableFilterPipe,
  DashboardComponent,
];

const MODULES = [
  CommonModule,
  RouterModule,
  PagesRoutingModule,
  SharedModule,
  FormsModule,
  ReactiveFormsModule,
  DataSettingsModule,
  NgxPaginationModule,
];

const NB_MODULES = [
  NbMenuModule,
  NbSidebarModule,
  NbIconModule,
  NbLayoutModule,
  NbIconModule,
  NbToggleModule,
  NbButtonModule,
  NbDialogModule.forChild(),
  NbWindowModule.forChild(),
  NbCardModule,
  NbUserModule,
  NbActionsModule,
  NbContextMenuModule,
  NbSelectModule,
];

@NgModule({
  imports: [...MODULES, ...NB_MODULES],
  declarations: [...COMPONENTS, DocumentComponent, FacultyComponent, TagComponent,],
})
export class PagesModule { }
