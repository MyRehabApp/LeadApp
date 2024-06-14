import { Component, Inject, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectTypeComponent } from '../project-type/project-type.component';
import { StatusComponent } from '../status/status.component';
import { DeleteBaseComponent } from '../delete-base/delete-base.component';
import { HandOverComponent } from '../hand-over/hand-over.component';
import { EditBaseComponent } from '../Edit/edit-base/edit-base.component';
import { RoleComponent } from '../role/role.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(public dialog: MatDialog,
    @Optional() public dialogRef: MatDialogRef<SettingsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private dialogData: any){}

  // goHome(){
  //   this.router.navigateByUrl('/admin')
  // }

  manageUser(){
    const dialogRef = this.dialog.open(UserComponent, {
      height: '790px',
      width: '800px',
    });
}
manageProjectType(){
  const dialogRef = this.dialog.open(ProjectTypeComponent, {
    height: '790px',
    width: '800px',
  });

}

manageStatus(){
  const dialogRef = this.dialog.open(StatusComponent, {
    height: '790px',
    width: '800px',
  });

}
manageDeleteBase(){
  const dialogRef = this.dialog.open(DeleteBaseComponent, {
    height: '790px',
    width: '800px',
  });


}

manageHandover(){
  const dialogRef = this.dialog.open(HandOverComponent, {
    height: '790px',
    width: '800px',
  });

}
editBase(){
  const dialogRef = this.dialog.open(EditBaseComponent, {
    height: '790px',
    width: '800px',
  });

}
manageRole(){
  const dialogRef = this.dialog.open(RoleComponent, {
    height: '790px',
    width: '800px',
  });


}
onCancelClick(): void {
  this.dialogRef.close();
}


}
