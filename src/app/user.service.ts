import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';

@Injectable()
export class UserService{

  private url = "assets/users.json";
  constructor(private http: HttpClient){ }

  getUsers(){
    return this.http.get(this.url);
  }

  createUser(user: User){
    const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.url, JSON.stringify(user), {headers: myHeaders});
  }
  updateUser(id: number, user: User) {
    const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(this.url, JSON.stringify(user), {headers:myHeaders});
  }
  deleteUser(id: number){
    return this.http.delete(this.url + '/' + id);
  }
}
