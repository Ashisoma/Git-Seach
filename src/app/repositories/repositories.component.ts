import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
repos:any;

  constructor(private userService:UsersService) {
    {
      this.userService = userService
    }
   }

getRepo(){
  
}
   
  ngOnInit(): void {
    this.userService.getRepo().subscribe((repos:any)=>{
      console.log(repos);
      this.repos = repos
    })
  }

}
