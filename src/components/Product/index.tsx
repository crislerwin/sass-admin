/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.sass";

const Product: React.FC = () => {
  return (
    <div className={styles.ProductContainer}>
      <div className={styles.Row}>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
        <div className={styles.Panel}>
          <div className={styles.Column}>
            <div className={styles.Gallery}>
              <img alt="T-Shirt" src="" />
            </div>
            <Info />
          </div>
          <div className={styles.Column}>
            {/* <ProductInfo />  */}
            {/* <SellerInfo />  */}
            <WarrantySection />
          </div>
        </div>
      </div>
    </div>
  );
};

const WarrantySection: React.FC = () => {
  return (
    <div className={styles.Section}>
      <h4 className={styles.title}>Garantia</h4>
      <div>
        <span>
          <p className={styles.description}>
            Receba o produto que está esperando ou devolvolvemos seu dinheiro
          </p>
        </span>
        <span>
          <p className={styles.title}>Garantia do vendedor</p>
          <p className={styles.description}>sem garantia</p>
        </span>
      </div>
      <a href="#">Saiba mais sobre garantia</a>
    </div>
  );
};

const Info: React.FC = () => {
  return (
    <div className={styles.Description}>
      <h2>Descrição</h2>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
        dolor bibendum diam ullamcorper bibendum vitae a ex. Ut in ipsum lacus.
        Nullam dictum nisi sem, sed sagittis arcu ultricies ut. Mauris sodales
        nisl velit. Mauris quis velit at urna bibendum viverra. Pellentesque
        sodales laoreet nunc, et blandit libero lobortis eget. Pellentesque
        pellentesque sed mauris dictum porttitor.
        <br />
        <br />
        Itens inclusos: <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        <br />
        Etiam semper a dui ac lacinia. Curabitur at nisi ut urna aliquet
        venenatis. Nullam eget leo nec lectus euismod finibus vel in enim.
        Vivamus sollicitudin nisi est, cursus rhoncus orci finibus in. Cras
        volutpat sodales neque. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Donec imperdiet lorem a
        efficitur viverra. Donec consectetur orci id ex sollicitudin vulputate.
        Nulla eget sapien tortor. Aenean iaculis pellentesque felis, facilisis
        molestie risus mollis non. Proin tempus, nunc non pulvinar tristique,
        ligula risus porta odio, non pulvinar elit nisi vitae velit. Morbi
        vulputate dolor eu tortor iaculis ultricies. Aliquam accumsan aliquam
        cursus. Curabitur id egestas dolor. Ut sed nulla vestibulum, condimentum
        lacus a, semper augue. Vestibulum sagittis dui ut lorem scelerisque
        rhoncus. In id facilisis leo. Sed porttitor faucibus fringilla. Aenean
        eget mi vitae est convallis pretium eget sed quam. Phasellus purus
        magna, consequat id laoreet in, blandit quis eros. Integer fringilla
        justo nisi, vitae vulputate erat finibus et. Duis lacinia ultrices
        purus. Curabitur ipsum purus, lacinia ut nisl nec, rutrum tristique
        ipsum. Duis luctus est sem, a laoreet quam scelerisque eget. Phasellus
        justo ex, pellentesque et dignissim nec, malesuada at justo. Cras porta
        vel lacus in ultricies. Curabitur id tempus tellus. Pellentesque
        hendrerit massa sit amet vulputate varius.
      </p>
    </div>
  );
};

export default Product;
