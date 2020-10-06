import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/users.service'
import { HttpClient } from '@angular/common/http';
// import { Profile, Repo } from '../profile';
// import { profile } from 'console';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

//@Input() users:string
 profile: any[];
 repos: any[];
 username:string;

  constructor(private userService: UsersService, private http:HttpClient) { 
   this.userService.getUserProfile().subscribe((profile:any[])=>{
     console.log(profile);
     this.profile = profile;
   });
   this.userService.getRepo().subscribe((repos:any[])=>{
 console.log(repos);
 this.repos = repos;
   })


  }
    

  findProfile(){
    this.userService.updateProfile(this.username);
    this.userService.getUserProfile().subscribe((profile:any[])=>{
      console.log(profile);
      this.profile = profile;
    });
    this.userService.getRepo().subscribe((repos:any[])=>{
      console.log(repos);
      this.repos = repos;
    })
  }


  
  ngOnInit(): void {
 
  }

}
