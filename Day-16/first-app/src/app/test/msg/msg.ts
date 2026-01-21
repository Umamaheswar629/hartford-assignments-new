import { Component, inject } from '@angular/core';
import { MessageService } from '../../services/message-service';
import { Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-msg',
  imports: [FormsModule],
  templateUrl: './msg.html',
  styleUrl: './msg.css',
})
export class Msg {
messages:string[]=[];
message:string='';
private messageService=inject(MessageService);
addData():void{
  this.messageService.addData(this.message);
  this.messages=this.messageService.getData();
  this.message='';
}

}


