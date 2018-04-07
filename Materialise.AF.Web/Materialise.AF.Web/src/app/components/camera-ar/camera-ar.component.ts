import {Component, HostListener, OnInit} from '@angular/core';
import {UserItem} from '../../models/item';
import {ProgressService} from '../../services/progress.service';
import {UserService} from '../../services/user.service';
import {User, UserDto} from '../../models/user';
import {MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-camera-ar',
  templateUrl: './camera-ar.component.html',
  styleUrls: ['./camera-ar.component.css']
})
export class CameraArComponent implements OnInit {

  user: User;
  itemsFound: string[];
  actualCount: number = 0;
  progress: string;
  userItem: UserItem = new UserItem();
  loading: boolean = false;

  constructor(private progressService: ProgressService, private userService: UserService, public snackBar : MatSnackBar) { }

  ngOnInit() {
     this.user = this.userService.getCurrentUser();
     this.getProgressByUser(this.user.id);
  }
  @HostListener('markerFound', ['$event.target'])
  onMarkerFound(target) {
    this.userItem.marker = target.id;
    this.userItem.token = this.userService.getCurrentUserToken();
    this.progressService.addToProgress(this.userItem)
       .subscribe(result => this.progressService.getProgressByUser(this.user.id)
         .subscribe(data => {
           this.itemsFound = data.markers;
           this.actualCount = data.markers.length;
           this.progress = data.progress;
           this.snackBar.open('New object found!', '', { duration: 3000, panelClass: 'custom-snackbar' });
    }));
  }
  getProgressByUser(id: number): void {
    this.progressService.getProgressByUser(id)
      .subscribe(data => {
        this.itemsFound = data.markers;
        this.actualCount = data.markers.length;
      }, error => {});
  }
}
