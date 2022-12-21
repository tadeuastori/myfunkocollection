import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunkoDetailPainelComponent } from './shared/funko-detail-painel/funko-detail-painel.component';
import { FilterPipe } from './data/filter.pipe';

@NgModule({
  declarations: [AppComponent, FunkoDetailPainelComponent, FilterPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
