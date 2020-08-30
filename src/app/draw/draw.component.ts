import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef} from "@angular/core";

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {
  @ViewChild("myCanvas") myCanvas: ElementRef;
  image = new Image();
  
  //random image source
   // image.src = "https://picsum.photos/200/300";

 constructor() { }

 ngOnInit() {
this.image.src = "https://picsum.photos/200/300";
 let ctx: CanvasRenderingContext2D =
   this.myCanvas.nativeElement.getContext('2d');
  
  // showing

ctx.fillRect(20, 20, 150, 100);

// Not showing
 this.image.onload = () => {
 console.log("image has loaded!");
  ctx.drawImage(this.image, 100, 100); }
 
}


}
