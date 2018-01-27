import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterSample1SharedModule, UserRouteAccessService } from './shared';
import { JhipsterSample1AppRoutingModule} from './app-routing.module';
import { JhipsterSample1HomeModule } from './home/home.module';
import { JhipsterSample1AdminModule } from './admin/admin.module';
import { JhipsterSample1AccountModule } from './account/account.module';
import { JhipsterSample1EntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterSample1AppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSample1SharedModule,
        JhipsterSample1HomeModule,
        JhipsterSample1AdminModule,
        JhipsterSample1AccountModule,
        JhipsterSample1EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSample1AppModule {}
