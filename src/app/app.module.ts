import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './util/filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunkoDetailPainelComponent } from './shared/funko-detail-painel/funko-detail-painel.component';
import { FunkoPainelComponent } from './pages/funko-painel/funko-painel.component';
import { FormsModule } from '@angular/forms';
import { MessageAddHomeScreenComponent } from './shared/message-add-home-screen/message-add-home-screen.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FunkoDetailPainelComponent,
    FunkoPainelComponent,
    FilterPipe,
    MessageAddHomeScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
