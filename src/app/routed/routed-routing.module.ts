import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutedComponent } from './routed/routed.component';

const routes: Routes = [
  {
    path: '',
    component: RoutedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutedRoutingModule {}
