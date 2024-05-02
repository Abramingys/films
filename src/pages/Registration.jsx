import SingUp from '../components/SingUp/SingUp';

export default function Registration() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
  };
  return (
    <div style={styles}>
      <h1> Registration </h1>
      <SingUp />
      <a
        href="/registration"
        style={{
          color: 'var(--apricot)',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        Log In
      </a>
    </div>
  );
}
