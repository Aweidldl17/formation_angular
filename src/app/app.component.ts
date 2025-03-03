import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis toujours !',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Chimpanzee-Head.jpg/640px-Chimpanzee-Head.jpg',
      new Date(),
      10
    );

    this.myOtherSnap = new FaceSnap(
      'Jean-Pierre',
      'Mon papa, le plus fort des hommes de la terre !!!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuS6omtrVNSWWG3SOPLSufeIxS29fc-xUAMw&s',
      new Date(),
      8
    );

    this.myLastSnap = new FaceSnap(
      'Carla',
      'Ma mère, la plus belle maman de l\'univers !',
      'https://images.pexels.com/photos/16190971/pexels-photo-16190971/free-photo-of-portrait-de-femme-en-sepia.jpeg',
      new Date(),
      13
    );
  }
}
