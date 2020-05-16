import { Injectable } from '@angular/core';
import { LanguagesSettingsData } from '../data/languages-settings';

@Injectable()
export class LanguagesSettingsService extends LanguagesSettingsData {

  data = [{
    id: 1,
    name: 'Mark',
    code: 'Otto',
  }, {
    id: 2,
    name: 'Jacob',
    code: 'Thornton',
  }, {
    id: 3,
    name: 'Larry',
    code: 'Bird',
  }, {
    id: 4,
    name: 'John',
    code: 'Snow',
  }, {
    id: 5,
    name: 'Jack',
    code: 'Sparrow',
  }, {
    id: 6,
    name: 'Ann',
    code: 'Smith',
  }, {
    id: 7,
    name: 'Barbara',
    code: 'Black',
  }, {
    id: 8,
    name: 'Sevan',
    code: 'Bagrat',
  }, {
    id: 9,
    name: 'Ruben',
    code: 'Vardan',
  }, {
    id: 10,
    name: 'Karen',
    code: 'Sevan',
  }, {
    id: 11,
    name: 'Mark',
    code: 'Otto',
  }, {
    id: 12,
    name: 'Jacob',
    code: 'Thornton',
  }, {
    id: 13,
    name: 'Haik',
    code: 'Hakob',
  }, {
    id: 14,
    name: 'Garegin',
    code: 'Jirair',
  }, {
    id: 15,
    name: 'Krikor',
    code: 'Bedros',
  }];

  getData() {
    return this.data;
  }
}
