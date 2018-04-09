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
  actualCount: string = '00';
  progress: string;
  userItem: UserItem = new UserItem();
  loading: boolean = false;
  title: string;

  constructor(private progressService: ProgressService, private userService: UserService, public snackBar : MatSnackBar) { }

  ngOnInit() {
     this.user = this.userService.getCurrentUser();
     this.getProgressByUser(this.user.id);
  }
  @HostListener('markerFound', ['$event.target'])
  onMarkerFound(target) {
    this.userItem.marker = target.id;
    this.title = target.title;
    this.userItem.token = this.userService.getCurrentUserToken();
    this.progressService.addToProgress(this.userItem)
       .subscribe(result => this.progressService.getProgressByUser(this.user.id)
         .subscribe(data => {
           this.itemsFound = data.markers;
           var prevCount = this.actualCount;
           this.actualCount = data.markers.length.toString();
           if (data.markers.length < 10) {
             this.actualCount = '0' + this.actualCount;
           }
           this.progress = data.progress;
           if (this.actualCount !== prevCount) {
             var output = 'You found ' + this.title + '!';
             this.snackBar.open(output, '', { duration: 3000, panelClass: 'custom-snackbar' });
           }
    }));
  }
  getProgressByUser(id: number): void {
    this.progressService.getProgressByUser(id)
      .subscribe(data => {
        this.itemsFound = data.markers;
        this.actualCount = data.markers.length.toString();
        if (data.markers.length < 10) {
          this.actualCount = '0' + this.actualCount;
        }
      }, error => {});
  }
}
