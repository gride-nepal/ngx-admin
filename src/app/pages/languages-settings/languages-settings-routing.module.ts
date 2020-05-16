import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguagesSettingsComponent } from './languages-settings.component';
import { LanguageTableComponent } from './language-table/language-table.component';

const routes: Routes = [{
  path: '',
  component: LanguagesSettingsComponent,
  children: [
    {
      path: '',
      component: LanguageTableComponent,
    },
   
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguagesSettingsRoutingModule { }

export const routedComponents = [
  LanguagesSettingsComponent,
  LanguageTableComponent,
];
