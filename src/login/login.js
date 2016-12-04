import {inject} from 'aurelia-dependency-injection';
import {Aurelia} from 'aurelia-framework';
import {Server, User} from 'backend/server';

@inject(Aurelia, Server)
export class Login {
  constructor(aurelia, server) {
    this.aurelia = aurelia;
    this.server = server;
    this.username = '';
    this.password = '';
    this.message = '';
  }
  
  login() {
    this.server.login(this.username, this.password).then(result => {
      if (result && this.username=='admin') {
        this.message = '';
        //TODO: Track the logged in user and render the main app.
        this.aurelia.use.instance(User, result);
        this.aurelia.setRoot('shell/shell');
      }
      else if (result && this.username=='associate') {
        this.message = '';
        //TODO: Track the logged in user and render the main app.
        this.aurelia.use.instance(User, result);
        this.aurelia.setRoot('ashell/ashell');
      } 
      else {
        this.message = 'Incorrect Username or Password!';
      }
    });
  }
}
