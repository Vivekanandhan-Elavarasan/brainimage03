import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
    public config = {
    ImageName: 'Brain image',
    AspectRatios: ["4:3", "16:9"],
    //ImageUrl: 'https://ieeexplore.ieee.org/mediastore_new/IEEE/content/media/6287639/8600701/8736208/jalab1ab-2922691-small.gif',
    ImageUrl: 'https://media.istockphoto.com/photos/image-brain-on-black-background-picture-id522675931',
    ImageType: 'image/jpeg'
  }

  public close() {

  }

  public getEditedFile(file: File) {

  }
}
