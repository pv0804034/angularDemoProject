import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerApis } from 'src/app/api.constants';
import { Users } from 'src/app/models/User';
import { TransportService } from '../transport/transport.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  UserData: Users = new Users();

  constructor(
    private transportService: TransportService,
    public httpClient: HttpClient
  ) {}

  getAllUsers() {
    return this.transportService.Read(ServerApis.usersUrl);
  }

  createUser(data: Users) {
    return this.transportService.Create<Users>(data, ServerApis.usersUrl);
  }

  deleteUser(id: number) {
    return this.transportService.Delete(ServerApis.usersUrl + '/' + id);
  }

  updateUser(id, data) {
    return this.httpClient.put(ServerApis.usersUrl + '/' + id, data);
  }
}
