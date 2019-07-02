import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutedRoutingModule } from './routed-routing.module';
import { RoutedComponent } from './routed/routed.component';

@NgModule({
  declarations: [RoutedComponent],
  imports: [
    CommonModule,
    RoutedRoutingModule
  ]
})
export class RoutedModule { }
