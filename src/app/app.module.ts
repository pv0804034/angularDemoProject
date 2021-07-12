import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NbContextMenuModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbUserModule, NbCheckboxModule, NbActionsModule, NbButtonModule, NbThemeModule, NbWindowModule, NbInputModule, NbToastrModule, NbDialogModule, NbTooltipModule } from '@nebular/theme';
import { PagesModule } from './pages/pages.module';
import { NbSecurityModule } from '@nebular/security';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HomeComponent } from './user-page/home/home.component';
import { TagComponent } from './user-page/tag/tag.component';
import { AddDocumentComponent } from './user-page/add-document/add-document.component';
import { SupportComponent } from './user-page/support/support.component';
import { AboutComponent } from './user-page/about/about.component';

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  CKEditorModule,
  PagesModule,
  AuthModule,
  HttpClientModule,

]

const NB_MODULES = [
  NbLayoutModule,
  NbThemeModule.forRoot({ name: 'default' }),
  NbMenuModule.forRoot(),
  NbSidebarModule.forRoot(),
  NbSecurityModule.forRoot(),
  NbWindowModule.forRoot(),
  NbToastrModule.forRoot(),
  NbDialogModule.forRoot(),
  NbUserModule,
  NbContextMenuModule,
  NbCheckboxModule,
  NbActionsModule,
  NbInputModule,
  NbButtonModule,
  NbEvaIconsModule,
  NbTooltipModule,
]

@NgModule({
  declarations: [AppComponent, HomeComponent, TagComponent, AddDocumentComponent, SupportComponent, AboutComponent],
  imports: [...MODULES, ...NB_MODULES],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
