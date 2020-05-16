import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstallationSettingsComponent } from './installation-settings.component';
import { InstallationSettingsFormComponent } from './installation-settings-form/installation-settings-form.component';

const routes: Routes = [
  {
    path: '',
    component: InstallationSettingsComponent,
    children: [
      {
        path: '',
        component: InstallationSettingsFormComponent,
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
export class InstallationSettingsRoutingModule {
}

export const routedComponents = [
  InstallationSettingsComponent,
  InstallationSettingsFormComponent,
];