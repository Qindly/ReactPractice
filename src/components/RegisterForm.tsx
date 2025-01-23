import { useState } from "react";

const RegisterForm = () => {
  //console.log(useState()[1]);
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  // const [displayName, setDisplayName] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    displayName: "",
  });

  const isDisabled =
    !formData.username || !formData.password || !formData.displayName;
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={(e) => {
            setFormData({
              ...formData,
              username: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="displayname">Display Name</label>
        <input
          id="displayname"
          name="udisplayname"
          value={formData.displayName}
          onChange={(e) => {
            setFormData({ ...formData, displayName: e.target.value });
          }}
        />
      </div>
      <button disabled={isDisabled}>Sign up</button>
    </form>
  );
};

export default RegisterForm;
