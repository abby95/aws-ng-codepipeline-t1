import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-parent-child-interaction',
  templateUrl: './parent-child-interaction.component.html',
  styleUrls: ['./parent-child-interaction.component.scss']
})
export class ParentChildInteractionComponent {
messageFromBeta = ""
constructor(private renderer:Renderer2,private el:ElementRef){

}
  receiveDataFromBeta(message:string){
    this.messageFromBeta =message
  }

  changeBg(){
let button = this.el.nativeElement.querySelector('.btn-papa')
this.renderer.setStyle(button,'background-color','blue')
this.renderer.setValue(button,"Blue Button")
  }
}
