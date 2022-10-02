import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from 'src/app/model/Servico';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.component.html',
  styleUrls: ['./manutencao.component.css']
})
export class ManutencaoComponent implements OnInit {

  servico!: Servico;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { 
    this.servico = new Servico();
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('idCliente') === null || sessionStorage.getItem('nomeCliente') === null){
      this.router.navigate(['/login']);
    }else{
      this.servico.idEstrangeiroCliente = Number(sessionStorage.getItem('idCliente'));
      this.servico.nomeEstrangeiroCliente = sessionStorage.getItem('nomeCliente');
      this.servico.tituloServico = "Serviço de Manutenção";
    //  this.servico.dataAberturaServico 
      this.servico.statusServico = "Pendente";
    }
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
