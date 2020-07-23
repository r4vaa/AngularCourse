import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer= false;
  serverCreationStauts='No Server Creatd';
  serverName='';


  constructor() {
    setTimeout(() => {
      this.allowNewServer =true },2000);
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStauts='New Server Creatd';
  }
  onUpdateServer(event:Event){
    this.serverName =(<HTMLInputElement>event.target).value;
  }
}
