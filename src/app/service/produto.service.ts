import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Produto } from "../model/Produto";
import { PRODUTO } from "./produtos.database";


@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    getProdutos(): Observable<Produto[]>{
        const produtos = of(PRODUTO);
        return produtos;
    }
}