import { Component, OnInit } from '@angular/core';
//import { resolve } from 'dns';
//import { profile } from 'console';
//import { from } from 'rxjs';
import { UsersService } from 'src/app/users.service'
import { HttpClient } from '@angular/common/http';
import { Profile, Repo } from '../profile';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

//@Input() users:string
 profile: Profile;
 repos: Repo[];
 username:string;

  constructor(private userService: UsersService, private http:HttpClient) { 
  //this.userService.getUserProfile()
      //this.user = profile;
    //this.userService.getRepo
  }
  
  
  findUser(){
    this.userService.updateProfile(this.username)

    this.userService.getUserProfile()
    .subscribe((profile:any)=>{
      this.profile = profile.json()
    });

    this.userService.getRepo()
    .subscribe((repos:any)=>{
      this.repos = repos.json()
    })
  }
  // profile:any[];

  // constructor(private profileService: GitProfileService) { 
  //   this.profileService.getProfileInfo().subscribe(profile => {
  //     console.log(profile);
  //     this.profile = profile;
  //   })
  // }
  
  


  
  ngOnInit(): void {
  //   this.userService.getRepo().subscribe((response:any)=>{
  //     this.profile = response
  //     console.log(response)
  //   }
  //   );
  // this.userService.getUserProfile().subscribe((response:any)=>{
  //   this.repo = response
  // })
  }

}
