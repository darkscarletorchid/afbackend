import {Component, HostListener, OnInit} from '@angular/core';
import {ProgressService} from '../../services/progress.service';
import {UserItem} from '../../models/item';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {

  }


}
