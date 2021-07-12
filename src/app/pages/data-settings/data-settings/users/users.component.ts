import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Users } from 'src/app/models/User';
import { RolesService } from 'src/app/service/roles/roles.service';
import { UsersService } from 'src/app/service/users/users.service';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users: Users[] = [];
  listOfRoles: any[] = [];
  public loading: boolean = true;

  constructor(
    private dialogService: NbDialogService,
    private toast: NbToastrService,
    private usersService: UsersService,
    private roleService: RolesService
  ) {}

  public async getAllUsersData(): Promise<void> {
    this.usersService.getAllUsers().subscribe(
      (data: any) => {
        this.users = data;
        this.loading = false;
      },
      (error) => {
        this.toast.danger(error.error.responseObject.message, 'सफल भएन');
      }
    );
  }

  public async getAllRole(): Promise<void> {
    this.roleService.getAllRoles().subscribe((data: any) => {
      this.listOfRoles = data;
      this.loading = false;
    });
  }

  public createUsers(): void {
    this.dialogService.open(AddUsersComponent).onClose.subscribe(
      () => {
        this.getAllUsersData();
      },
      (error) => {
        this.toast.danger(error.error.responseObject.message, 'सफल भएन');
      }
    );
  }

  onDelete(id): void {
    Swal.fire({
      title:
        '<span style="color:#ffffff; font-size: 1.5rem; font-weight: 600;">Are you sure?</span>',
      icon: 'warning',
      iconColor: '#ffffff',
      showCancelButton: true,
      confirmButtonColor: '#EFF2F8',
      cancelButtonColor: '#FF3D71',
      confirmButtonText: '<span style="color:#000000">डिलिट गर्नुहोस!</span>',
      background: '#588C7F',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.deleteUser(id).subscribe(
          () => {
            this.getAllUsersData().then(() => {
              this.toast.success(
                $localize`:@@userDeleted:प्रयोगकर्ता सफलतापूर्वक हटाइयो.`,
                $localize`:@@success:सफल भयो`
              );
              this.loading = false;
            });
          },
          (error) => {
            this.toast.danger(error.error.responseObject.message, 'सफल भएन');
          }
        );
      }
    });
  }

  onUserDataEdit(data: Users) {
    this.usersService.UserData = data;
    this.dialogService.open(EditUsersComponent).onClose.subscribe(() => {
      this.getAllUsersData();
    });
  }

  ngOnInit(): void {
    this.getAllUsersData().then(null);
    this.getAllRole().then(null);
  }
}
