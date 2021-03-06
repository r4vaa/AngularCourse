import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer= false;
  serverCreationStauts='No Server Creatd';
  serverName='TestServer';
  serverCreated = false;
  servers = ['testserver', 'testserver2'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer =true },2000);
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreated= true;
    this.serverCreationStauts='New Server Creatd name is ' + this.serverName;
  }
  onUpdateServer(event:Event){
    this.serverName =(<HTMLInputElement>event.target).value;
  }
}
