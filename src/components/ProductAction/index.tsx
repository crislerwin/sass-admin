import styles from "./styles.module.sass";

import {
  HiOutlineHeart,
  HiOutlineCheck,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const ProductAction: React.FC = () => {
  return (
    <div className={styles.ProductContainer}>
      <div className={styles.Condition}>Novo</div>
      <div className={styles.ActionRow}>
        <h1>Camiseta Branca Desconhecida</h1>
        <i className={styles.HeartIcon}>
          <HiOutlineHeart />
        </i>
      </div>
      <div className={styles.DispatchTag}> Enviando Normalmente</div>
      <div className={styles.PriceCard}>
        <div className={styles.PriceRow}>
          <span className="simbol">R$</span>
          <span className="fraction">34,</span>
          <span className="cents">99</span>
        </div>
        <div className={styles.InstallmentsInfo}>em 3x de R$ 11,67</div>
      </div>

      <div className={styles.StockStatus}>Estoque disponivel</div>
      <div className={styles.MethodCard}>
        <i className={styles.CheckIcon}>
          <HiOutlineCheck />
        </i>
        <div>
          <span className="title">Frete grátis</span>
          <span className="details">Benefício Lorem Ipsum</span>
          <a href="#" className="more">
            Ver mais opções
          </a>
        </div>
        <div className={styles.Actions}>
          <button className={styles.Button}>Comprar Agora</button>
          <button className={styles.Button}>Adicionar ao carrinho</button>
        </div>
        <div className={styles.Benefits}>
          <li>
            <i className={styles.ShieldIcon}>
              <HiOutlineShieldCheck />
            </i>
            <p>
              Compra Garantida, receba o produto que está esperando ou
              devolvemos seu dinheiro.
            </p>
          </li>
        </div>
      </div>
    </div>
  );
};

export default ProductAction;
