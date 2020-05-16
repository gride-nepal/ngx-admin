import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {LanguagesSettingsService} from '../../../services/languages-settings.service';
@Component({
  selector: 'bt-language-table',
  templateUrl: './language-table.component.html',
  styleUrls: ['./language-table.component.scss'],
})
export class LanguageTableComponent {
  
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'LANGUAGE',
        type: 'string',
      },
      code: {
        title: 'CODE',
        type: 'string',
      },
      nativeLanguage:{
        title: 'NATIVE LANGUAGE',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: LanguagesSettingsService) {
  this.service.getData().subscribe((data) => {
    this.source.load(<any> data);
});
  }

  onCreateConfirm(event): void {
    this.service.add(event.newData).subscribe(res =>{
      console.log(res);
      event.confirm.resolve();
      },
      error => {
        console.log(error.error.message);
        event.confirm.reject();
      }
      )
  }


  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      this.service.update(event.newData).subscribe(res=>{
        event.confirm.resolve();
       })
    } else {
      event.confirm.reject();
    }
  }
  
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data._id).subscribe(res=>{
        console.log(res.toString);
        event.confirm.resolve();
      });
    } else {
      event.confirm.reject();
    }
  }
}
