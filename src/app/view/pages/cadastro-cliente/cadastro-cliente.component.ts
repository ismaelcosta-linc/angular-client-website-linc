import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/service/cliente.service';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {

  cliente!: Cliente;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private clienteService: ClienteService) {
    this.cliente = new Cliente();
  }

  onSubmit() {
    this.http.post<Cliente>("https://api-website-linc.herokuapp.com/cadastrar-cliente", this.cliente).subscribe();
    this.gotoUserList();
  }

  gotoUserList() {
    this.router.navigate(['/login']);
  }

}
