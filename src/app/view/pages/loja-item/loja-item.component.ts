import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/model/Produto';
import { Venda } from 'src/app/model/Venda';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-loja-item',
  templateUrl: './loja-item.component.html',
  styleUrls: ['./loja-item.component.css']
})
export class LojaItemComponent implements OnInit {

  produto!: Produto;
  venda!: Venda;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('idCliente') === null){
      this.router.navigate(['/login']);
    }else{
      if(sessionStorage.getItem('idProduto') === null){
        this.router.navigate(['/loja']);
      }else{
        this.venda = new Venda();

        this.http.post<Produto>("https://api-website-linc.herokuapp.com/loja-item" , Number(sessionStorage.getItem('idProduto')))
          .subscribe(data => {this.produto = data; this.preencheSessaoProduto();});
      }
  }
}

/*
    idProduto
    nomeProduto
    modeloMarcaProduto
    precoRevendaUnidade
    descricaoProduto
    pathImagemProduto
    imagem
*/
preencheSessaoProduto(){
  // sessionStorage.setItem('idProduto', this.produto.idProduto.toString());
  sessionStorage.setItem('nomeProduto', this.produto.nomeProduto.toString());
  // sessionStorage.setItem('modeloMarcaProduto', this.produto.modeloMarcaProduto.toString());
  // sessionStorage.setItem('precoRevendaUnidade', this.produto.precoRevendaUnidade.toString());
  // sessionStorage.setItem('descricaoProduto', this.produto.descricaoProduto.toString());
  // sessionStorage.setItem('pathImagemProduto', this.produto.pathImagemProduto.toString());
  // sessionStorage.setItem('imagem', this.produto.imagem.toString());
}


/*
    idVenda
    idEstrangeiroCliente
    idEstrangeiroProduto
    nomeEstrangeiroCliente
    nomeEstrangeiroProduto
    observacaoVenda
    quantItemVenda  
    customizacaoVenda
*/
preencheSessaoVenda(){
  //NÃO PRECISA DE SESSÃO DE VENDA, POIS A VENDA É O FIM DA NAVEGAÇÃO DO USUÁRIO;
}

finalizarCompra(){

  this.venda.idEstrangeiroCliente = Number(sessionStorage.getItem('idCliente'));
  this.venda.nomeEstrangeiroCliente = sessionStorage.getItem('nomeCliente');
  this.venda.idEstrangeiroProduto = Number(sessionStorage.getItem('idProduto'));
  this.venda.nomeEstrangeiroProduto = this.produto.nomeProduto;

  this.http.post<Venda>("https://api-website-linc.herokuapp.com/finalizar-compra", this.venda).subscribe();
  this.router.navigate(['/loja']);
}

}
