import { useParams } from 'react-router-dom';

import styles from './UserDetail.module.scss';
import { useGetUserByIdQuery } from '../../features/users/userApi';
import Loader from '../Loader/Loader';

const UserDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetUserByIdQuery(Number(id));

  if (isLoading || !data) return <Loader />;

  return (
    <div className={styles.container}>
      <div className={styles.detail}>
        <div className={styles.name}>
          <h2>{data.name}</h2>
          <div className={styles.item}>
            <strong>User name: </strong> <span>{data.username}</span>
          </div>
          <div className={styles.item}>
            <strong>Email: </strong> <span>{data.email}</span>
          </div>

          <div className={styles.item}>
            <strong>Phone: </strong>
            <span>{data.phone}</span>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.items}>
            <h3>Address</h3>

            <div className={styles.item}>
              <strong>Street: </strong> <span>{data.address.street}</span>
            </div>

            <div className={styles.item}>
              <strong>Suite: </strong>
              <span>{data.address.suite}</span>
            </div>

            <div className={styles.item}>
              <strong>City: </strong> <span>{data.address.city}</span>
            </div>

            <div className={styles.item}>
              <strong>Zipcode: </strong>
              <span>{data.address.zipcode}</span>
            </div>
          </div>

          <div className={styles.items}>
            <h3>Company</h3>

            <div className={styles.item}>
              <strong>Company name: </strong>
              <span>{data.company.name}</span>
            </div>

            <div className={styles.item}>
              <strong>Catch Phrase: </strong>
              <span>{data.company.catchPhrase}</span>
            </div>

            <div className={styles.item}>
              <strong>Cs: </strong>
              <span>{data.company.bs}</span>
            </div>
          </div>
        </div>
        <a href={`http://${data.website}`} target="_blank">
          Website
        </a>
      </div>
    </div>
  );
};

export default UserDetail;
