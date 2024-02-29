import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { MaterialModule } from '../material/material/material.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  loginForm: FormGroup;
  listaUtenti: any[];
  utentePresente: boolean;
  utenteLoggato: any;

  constructor(private service: ServiceService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.listaUtenti = [];
    this.utentePresente = false;
  }

  ngOnInit() {
    this.service.getUtenti().subscribe({
      next: (res: any) => {
        console.log(res);
        this.listaUtenti = res;
      },
    });
  }

  accedi() {
    this.utentePresente = false;
    this.listaUtenti.forEach((u) => {
      if (
        u.email === this.loginForm.value.email &&
        u.password === this.loginForm.value.password
      ) {
        this.utentePresente = true;
        this.utenteLoggato = u;
      }
    });
    if (this.utentePresente) {
      alert('Login effettuato con successo');
    } else {
      alert('Login non riuscito');
    }
  }
}
