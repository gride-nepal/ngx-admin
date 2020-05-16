import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { BasicSettingsRoutingModule, routedComponents } from './basic-settings-routing.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import {LanguagesSettingsService} from  '../../services/languages-settings.service';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    BasicSettingsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [LanguagesSettingsService],
})
export class BasicSettingsModule { }
