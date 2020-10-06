import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
//import 'rxjs/add/operator/map';
// import { from } from 'rxjs';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private username:string;
  private clientid : '2549639557fad239e9e1';
  private clientsecret:'995c7339715a31f44426a277275da0d3f892b8839';

  constructor(private http: HttpClient) {
console.log ('we are on!!')
this.username = 'Ashisoma'
  
  }

 
getUserProfile(){
  
  return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)

}

  getRepo() {
    const url = `https://api.github.com/users/${this.username}/repos?client_id=${this.clientid}&client_secret=${this.clientsecret}`
    return this.http.get(url);
}
   updateProfile(username:string){
     this.username = username;
   }
 }
 //return this.http.get('https://api.github.com/search/users?access_token=e3a1b33c1d6d6b20e6ef2b7ce2de6985091c91b6&q=Ashisoma')
 //`https://api.github.com/users/${this.username}/repos?client_id=${this.clientid}&client_secret=${this.clientsecret}`
