const App = () => {
  const names = ['Bob','Alice','Vassia'];
  const loggedIn = true;
  const name = 'world';
  const styles = {
    color: 'red',
    fontSize: '55px',
  };
  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={styles}>Hello {name}!</p>
      <ul>
        {names.map((name)=>(
          <li>{name}</li>
        ))}
      </ul>
      { loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
    </>
  );
};
export default App;