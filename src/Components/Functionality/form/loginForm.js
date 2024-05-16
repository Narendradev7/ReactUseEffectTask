import { useState } from "react";

const LoginForm = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [usernameError, setUserNameError] = useState(false);
  const [PasswordError, setPasswordError] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState(null);
  const [login, setLogin] = useState(false);

  const userNamehandler = (event) => {
    const userName = event.target.value;
    setUserName(userName);
    if (userName.length > 10) {
      setUserNameError("please enter less than 10 Charcters");
    } else {
      setUserNameError(null);
    }
  };

  const passwordhandler = (event) => {
    const password = event.target.value;
    setPassword(password);
    if (password.length > 10) {
      setPasswordError("please enter less than 10 Charcters");
    } else {
      setPasswordError(null);
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const userInfo = { username: userName, password: password };
    serverCall(userInfo);
  };

  const serverCall = (userInfo) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message) {
          setLoginErrorMessage(response.message);
        } else {
          //success
          alert("login success");
          setLoginErrorMessage(null);
          success();
        }
      });
  };
  const success = () => {
    debugger;
    setLogin(true);
    //Navigate to home screen
  };

  return (
    <>
      {login ? (
        <>
          <h2>Welcome user</h2>
        </>
      ) : (
        <form onSubmit={onFormSubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              maxLength={12}
              value={userName}
              onChange={userNamehandler}
            />
            {usernameError && (
              <span style={{ color: "red" }}>{usernameError}</span>
            )}

            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              name="password"
              maxLength={12}
              value={password}
              onChange={passwordhandler}
            />
          </div>

          {PasswordError && (
            <span style={{ color: "red" }}>{PasswordError}</span>
          )}

          {loginErrorMessage && (
            <span style={{ color: "red" }}>{loginErrorMessage}</span>
          )}

          {!usernameError && !PasswordError && (
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          )}
        </form>
      )}
    </>
  );
};

export default LoginForm;
