import styles from "./styles.module.sass";
import {
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineClock,
} from "react-icons/hi";

const SellerInfo: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
        <div className={styles.LocationCard}>
          <i className={styles.iconcss}>
            <HiOutlineLocationMarker />
          </i>
          <div>
            <p>Localizacao</p>
            <strong>São Paulo, São Paulo</strong>
          </div>
        </div>
        <div className={styles.LocationCard}>
          <div className={styles.ReputationCard}>
            <ul className={styles.ReputationThermometer}>
              <li />
              <li />
              <li />
              <li />
              <li className="active" />
            </ul>
            <div className={styles.ReputationRow}>
              <div>
                <strong>561</strong>
                <span>vendas nos últimos 4 meses</span>
              </div>
              <div>
                <strong>
                  <i>
                    <HiOutlineChatAlt2 />
                  </i>
                </strong>
                <span>Presta um bom atendimento</span>
              </div>
              <div>
                <strong>
                  <i>
                    <HiOutlineClock />
                  </i>
                </strong>
                <span>Entrega os produtos dentro do prazo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className={styles.More}>
        Ver mais dados do vendedor
      </a>
    </div>
  );
};

export default SellerInfo;
