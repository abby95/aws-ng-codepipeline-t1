import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input() parentData =""
@Output() emitDataToPapa = new EventEmitter()

sendDataToPitaji(){
this.emitDataToPapa.emit('Hum Theek Pitaji.. Aap Batao')
}
}
