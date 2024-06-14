import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { SettingsComponent } from '../components/settings/settings.component';

@Component({
  selector: 'app-new-navabr',
  templateUrl: './new-navabr.component.html',
  styleUrls: ['./new-navabr.component.scss']
})
export class NewNavabrComponent {

  isExpanded : boolean = false;

  userName!: string
  userId!: number
  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router,
    private _snackBar: MatSnackBar,private dialog: MatDialog) {

    const token: any = localStorage.getItem('token')
    let user = JSON.parse(token)
    // this.userName = user.employeeNo.toUpperCase()
    this.userId = user.id
  }

  viewProfile(){
    console.log('viewProfile')
  }

  // myProfile(){
  //   this.router.navigateByUrl('admin/settings/userdetails/'+ this.userId)
  // }

  logOut(){
    this.authService.logout()
    this.router.navigateByUrl('')
  }

  barStatus = true;

  viewBar(){
    this.barStatus = !this.barStatus
  }
  settings(){
    const dialogRef = this.dialog.open(SettingsComponent, {
      height: '390px',
      width: '800px',
    });
  }

}

