import LogIn from '../components/Login/Login';
export default function Authorisation() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
  };
  return (
    <div style={styles}>
      <h1> Authorisation </h1>
      <LogIn />
      <a
        href="/registration"
        style={{
          color: 'var(--apricot)',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        Registration
      </a>
    </div>
  );
}
