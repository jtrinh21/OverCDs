import { Component, OnInit, Inject } from '@angular/core';
import { ExchangeService } from 'src/app/shared/exchange.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css'],
})
export class AddItemFormComponent implements OnInit {
  isAuthenticated = false;
  constructor(
    private dialog: MatDialog,

    private exchange: ExchangeService, private auth: AuthService) {}

  ngOnInit(): void {
    this.isAuthenticated =
      typeof localStorage.getItem('key') !== 'undefined' ? true : false;
  }

  onSubmitSignup(form: NgForm) {
    this.exchange.addItem(form);
  }

  onClose() {
    this.dialog.closeAll();
  }
}
