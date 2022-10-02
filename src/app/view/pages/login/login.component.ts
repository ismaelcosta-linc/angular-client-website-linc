import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  cliente!: Cliente;
  clienteConferido!: Cliente;

  constructor(private route: ActivatedRoute, private router: Router, private clienteService: ClienteService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    sessionStorage.removeItem('idCliente');
  }

  onSubmit(){
    this.clienteService.login(this.cliente).subscribe(data => {this.clienteConferido = data; this.gotoUserList();});
  }

  gotoUserList() {
    if(this.cliente.usernameCliente === this.clienteConferido.usernameCliente && this.cliente.passwordCliente === this.clienteConferido.passwordCliente){
      // this.saveData(this.clienteConferido.idCliente);

      sessionStorage.setItem('idCliente', this.clienteConferido.idCliente.toString());
      sessionStorage.setItem('usernameCliente', this.clienteConferido.usernameCliente.toString());
      sessionStorage.setItem('passwordCliente', this.clienteConferido.passwordCliente.toString());
      sessionStorage.setItem('nomeCliente' ,this.clienteConferido.nomeCliente.toString());
      sessionStorage.setItem('celularCliente', this.clienteConferido.celularCliente.toString());
      sessionStorage.setItem('enderecoCliente' ,this.clienteConferido.enderecoCliente.toString());

      this.router.navigate(['']);
    }
  }

  /*
    idCliente
    usernameCliente
    passwordCliente
    nomeCliente
    celularCliente
    enderecoCliente
  */

}
