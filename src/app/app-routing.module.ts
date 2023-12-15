import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunkoFormComponent } from './pages/funko-form/funko-form.component';
import { FunkoPainelComponent } from './pages/funko-painel/funko-painel.component';
import { FunkoViewComponent } from './pages/funko-view/funko-view.component';

const routes: Routes = [
  { path: '', component: FunkoPainelComponent },
  { path: 'add-funko', component: FunkoFormComponent },
  { path: 'edit-funko', component: FunkoFormComponent },
  { path: 'view-funko', component: FunkoViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
