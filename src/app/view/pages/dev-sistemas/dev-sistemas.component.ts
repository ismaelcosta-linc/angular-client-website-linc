import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from 'src/app/model/Servico';

@Component({
  selector: 'app-dev-sistemas',
  templateUrl: './dev-sistemas.component.html',
  styleUrls: ['./dev-sistemas.component.css']
})
export class DevSistemasComponent implements OnInit {

  servico!: Servico;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.servico = new Servico();
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('idCliente') === null || sessionStorage.getItem('nomeCliente') === null){
      this.router.navigate(['/login']);
    }else{
      this.servico.idEstrangeiroCliente = Number(sessionStorage.getItem('idCliente'));
      this.servico.nomeEstrangeiroCliente = sessionStorage.getItem('nomeCliente');
      this.servico.tituloServico = "Serviço de Desenvolvimento de Sistemas";
    //  this.servico.dataAberturaServico 
      this.servico.statusServico = "Pendente";
    }
  }

  onSubmit() {
    this.http.post<Servico>("https://api-website-linc.herokuapp.com/cadastrar-servico", this.servico).subscribe();
    this.router.navigate(['/loja']);
  }


  /*
    idServico
    idEstrangeiroCliente
    idEstrangeiroAdministrador
    nomeEstrangeiroCliente
    nomeEstrangeiroAdministrador
    tituloServico
    dataAberturaServico
    descricaoServico
    statusServico
    precoServico
    disposicaoRemotoServico
    tipoDispositivoServico
    disposicaoLayoutGenerico
    tipoPlataformaSistema
  */
  preencheSessaoServico(){
    //NÃO PRECISA DE SESSÃO DE SERVICO, POIS O SERVICO É O FIM DA NAVEGAÇÃO DO USUÁRIO;
  }


}
