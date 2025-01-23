import style from"./styles.module.css"
const UsernameDisplay = ({username}:any) => {
  return (
    <>
      <b className={username}>Username:</b>
      <span>{username}</span>
    </>
  );
};

export default UsernameDisplay ;
