import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './util/filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunkoDetailPainelComponent } from './shared/funko-detail-painel/funko-detail-painel.component';
import { FunkoPainelComponent } from './pages/funko-painel/funko-painel.component';
import { FormsModule } from '@angular/forms';
import { MessageAddHomeScreenComponent } from './shared/message-add-home-screen/message-add-home-screen.component';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FunkoDetailFeaturesComponent } from './shared/funko-detail-features/funko-detail-features.component';
import { FunkoDetailStampComponent } from './shared/funko-detail-stamp/funko-detail-stamp.component';
import { FunkoDetailExclusiveComponent } from './shared/funko-detail-exclusive/funko-detail-exclusive.component';
import { PaginationPipe } from './util/pagination.pipe';
import { FunkoPainelPaginationComponent } from './shared/funko-painel-pagination/funko-painel-pagination.component';
import { FunkoPainelItemsPerPageComponent } from './shared/funko-painel-items-per-page/funko-painel-items-per-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FunkoDetailPainelComponent,
    FunkoPainelComponent,
    FilterPipe,
    PaginationPipe,
    MessageAddHomeScreenComponent,
    FunkoDetailFeaturesComponent,
    FunkoDetailStampComponent,
    FunkoDetailExclusiveComponent,
    FunkoPainelPaginationComponent,
    FunkoPainelItemsPerPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // ServiceWorkerModule.register('/ngsw-worker.js', {
    //   enabled: true,
    //   // Register the ServiceWorker as soon as the application is stable or after 30 seconds (whichever comes first).
    //   // registrationStrategy: 'registerImmediately',
    // }),
    // ServiceWorkerModule.register('/ngsw-worker.js', {
    //   enabled: environment.production,
    //   registrationStrategy: 'registerWhenStable:30000',
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
