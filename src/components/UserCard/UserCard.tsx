import { Link } from 'react-router-dom';

import { useCardAnimation } from '../../hooks/useCardAnimation';
import { User } from '../../types/user';

import styles from './UserCard.module.scss';

interface UserCardProps {
  user: User;
  index: number;
}

const UserCard = ({ user, index }: UserCardProps) => {
  const ref = useCardAnimation(index);

  return (
    <>
      <Link to={`/users/${user.id}`} className={styles.card} ref={ref}>
        <div className={styles.buttonBlock}>
          <button className={styles.button}>Know more</button>
        </div>
        <div className={styles.item}>
          <strong>Name:</strong>
          <span>{user.name}</span>
        </div>
        <div className={styles.item}>
          <strong>Email:</strong> <span>{user.email}</span>
        </div>
        <div className={styles.item}>
          <strong>Company name:</strong> <span>{user.company.name}</span>
        </div>
      </Link>
    </>
  );
};

export default UserCard;
