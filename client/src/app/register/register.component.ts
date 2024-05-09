import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: any = {}

  constructor(private accountService: AccountsService, private toastr: ToastrService) {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => {this.toastr.error(error.error);
      console.log(error);
      }
    })
  }

  cancel() {
    
  }
}
