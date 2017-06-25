import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  serverName = 'test';
  
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverCreated: boolean = false;
  servers = ['Testserver', 'Testserver 2'];

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created !';
  }

}
