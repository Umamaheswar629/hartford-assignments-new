import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: string[] = [];
  addData(message:string){
    this.messages.push(message);
  }
  getData():string[]{
    return this.messages;
  }
}
