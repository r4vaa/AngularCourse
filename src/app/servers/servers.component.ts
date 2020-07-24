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


  constructor() {
    setTimeout(() => {
      this.allowNewServer =true },2000);
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStauts='New Server Creatd name is ' + this.serverName;
  }
  onUpdateServer(event:Event){
    this.serverName =(<HTMLInputElement>event.target).value;
  }
}
