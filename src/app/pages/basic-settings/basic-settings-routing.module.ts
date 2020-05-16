import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicSettingsComponent } from './basic-settings.component';
import { BasicSettingsFormComponent } from './basic-settings-form/basic-settings-form.component';

const routes: Routes = [
  {
    path: '',
    component: BasicSettingsComponent,
    children: [
      {
        path: '',
        component: BasicSettingsFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class BasicSettingsRoutingModule {
}

export const routedComponents = [
  BasicSettingsComponent,
  BasicSettingsFormComponent,
];