import {inject} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {MessageBox} from './message-box';
import {Prompt} from './prompt';

@inject(DialogService)
export class CommonDialogs {
  constructor(dialogService) {
    this.dialogService = dialogService;
  }
  
  showMessage(message, title = 'Message', options = ['Ok']) {
    return this.dialogService.open({ viewModel: MessageBox, model: { message, title, options } });
  }

  //Prompt Methods
  prompt(message, title='Info Box') {
    //Add Action
    return this.dialogService.open({ viewModel: Prompt, model: { message, title } })
  }
}