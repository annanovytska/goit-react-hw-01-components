import css from './friends.module.css';
export const Friends = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(el => (
        <li className={css.friendsItem} key={el.id}>
          <span className="status">{el.isOnline ? 'Online' : 'Offline'}</span>
          <img
            className={css.avatar}
            src={el.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{el.name}</p>
        </li>
      ))}
    </ul>
  );
};
