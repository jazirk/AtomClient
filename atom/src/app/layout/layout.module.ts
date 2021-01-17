import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SearchComponent } from '../search/search.component';
import { HttpInterceptorProviders } from '@app/core/interceptors';


@NgModule({
  declarations: [
    WrapperComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule
  ]
})
export class LayoutModule { }
