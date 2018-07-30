import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// import { Component, OnInit, ViewEncapsulation, Inject } from "@angular/core";
// import {
//     MatIconRegistry,
//     MatDialog,
//     MatDialogRef,
//     MAT_DIALOG_DATA
// } from "@angular/material";
// import { DomSanitizer } from "@angular/platform-browser";
// import { HttpClientModule, HttpClient } from "@angular/common/http";
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// @Component({
//   selector: 'app-education',
//   templateUrl: './education.component.html',
//   styleUrls: ['./education.component.css']
// })
// export class LoginComponent {
//     animal: string;
//     name: string;

//     constructor(
//         private _formBuilder: FormBuilder,
//         iconRegistry: MatIconRegistry,
//         sanitizer: DomSanitizer,
//         public dialog: MatDialog
//     ) {
//       iconRegistry.addSvgIcon(
//         "close",
//         sanitizer.bypassSecurityTrustResourceUrl(
//             'assets/icons/ic_close_48px.svg'
//         )
//     );
// }

// openDialog(): void {
//     let dialogRef = this.dialog.open(LoginDialogComponent, {
//         width: '400px',
//         data: { name: this.name, animal: this.animal }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//         console.log('The dialog was closed');
//         this.animal = result;
//     });
// }
// }
// @Component({
// selector: 'dialog-login',
// templateUrl: 'loginDialog.component.html',
// styleUrls: ['loginDialog.component.css']
// })
// export class LoginDialogComponent {
// constructor(
//   private _formBuilder: FormBuilder,
//   public dialogRef: MatDialogRef<LoginDialogComponent>,
//   @Inject(MAT_DIALOG_DATA) public data: any
// ) {}

// onNoClick(): void {
//   this.dialogRef.close();
// }

// ngOnInit() {
//   this.firstFormGroup = this._formBuilder.group({
//       firstCtrl: ['', Validators.required]
//   });
//   this.secondFormGroup = this._formBuilder.group({
//       secondCtrl: ['', Validators.required]
//   });
// }
// }
