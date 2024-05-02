import styles from './Login.module.scss';

export default function LogIn() {
  return (
    <form action="" className={styles.block}>
      <input type="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" id="" />
      <button type="submit">Log in</button>
    </form>
  );
}
