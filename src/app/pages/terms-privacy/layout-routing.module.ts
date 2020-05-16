import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { Tab1Component, Tab2Component, Tab3Component, Tab4Component, TabsComponent } from './tabs/tabs.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      component: TabsComponent,
      children: [
        {
          path: 'user-terms',
          component: Tab1Component,
        },
        {
          path: 'user-privacy',
          component: Tab2Component,
        },
        {
          path: 'partner-terms',
          component: Tab3Component,
        },
        {
          path: 'partner-privacy',
          component: Tab4Component,
        },
      ],
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}