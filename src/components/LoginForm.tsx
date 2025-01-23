import useDocumentClick from "../utils/Myhooks/useDocumentClick";

const LoginForm = () => {
  useDocumentClick();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const username = formData.get("username");
        const password = formData.get("password");
        fetch("http://localhost:3001/api/login"),
          {
            body: {
              username,
              password,
            },
            method: "POST",
          };
      }}
    >
      <label htmlFor="username">Username</label>
      <br />
      <input id="username" name="username" />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input id="password" type="password" name="password" />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
