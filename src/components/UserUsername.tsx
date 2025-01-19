import style from"./styles.module.css"
const UserUsername = (props: any) => {
  return (
    <>
      <b className={style.username}>Username:</b>
      <span>{props.username}</span>
    </>
  );
};

export default UserUsername;
