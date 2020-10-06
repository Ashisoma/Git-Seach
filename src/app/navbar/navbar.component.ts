import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
repos:any;
profile:any;

  constructor(private userService: UsersService) {
    {
      this.userService = userService
    }
   }

   getRepo(){}

  ngOnInit(): void {
    this.userService.getRepo().subscribe((repos:any)=>{
      console.log(repos);
      this.repos = repos
    })

  }

}
