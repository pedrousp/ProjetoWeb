import Product from "../../components/Product"

import { Link } from "react-router-dom";

import styles from "./styles.module.css"

import img1 from "../../assets/produtos/racaoGato.png"
import img2 from "../../assets/produtos/aparador.webp"

function ListProduct() {
  return (
    <>
      <div>
        <div className={styles.products_title}>
          <h1>Conheça nossos produtos</h1>
          <p>
          Temos vários itens interessantes para o seu pet! Não deixe de
          conferir!
          </p>
        </div>
      </div>

      <div className={styles.filter_container + ' ' + styles.select_filter}>
        <label htmlFor="products-filter">Filtrar por:</label>
        <select id="products-filter">
          <option value="todos">Todos</option>
          <option value="racao">Ração</option>
          <option value="coleira">Coleira</option>
          <option value="brinquedo">Brinquedo</option>
        </select>
      </div>

      <div
        className={styles.main + ' ' + styles.conteudo + ' ' + styles.padding_padrao}>
        <div class={styles.row_padding + ' ' +  styles.center}>
          {/* PRODUTOS */}
          <Product category="racao" src={img1} name="Racao" desc="Produto teste desc" price="20.00" button="Ver detalhes" link="../productDetails"/>
          <Product category="coleira" src={img2} name="Coleira diferenciada" desc="Produto teste desc" price="30.00" button="Ver detalhes" link="../productDetails"/>
          <Product category="racao" src={img1} name="Racao" desc="Produto teste desc" price="20.00" button="Ver detalhes" link="../productDetails"/>
          <Product category="racao" src={img1} name="Racao" desc="Produto teste desc" price="20.00" button="Ver detalhes" link="../productDetails"/>
          <Product category="racao" src={img1} name="Racao" desc="Produto teste desc" price="20.00" button="Ver detalhes" link="../productDetails"/>
          <Product category="racao" src={img1} name="Racao" desc="Produto teste desc" price="20.00" button="Ver detalhes" link="../productDetails"/>

        </div>
      </div>
    </>
  );
}

export default ListProduct;
