import { useState } from "react";

const RegistrationForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [registrationErrorMessage, setRegistrationErrorMessage] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const userNameHandler = (event) => {
    const userName = event.target.value;
    setUserName(userName);
    if (userName.length > 10) {
      setUserNameError("Please enter less than 10 characters");
    } else {
      setUserNameError("");
    }
  };

  const passwordHandler = (event) => {
    const password = event.target.value;
    setPassword(password);
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const confirmPasswordHandler = (event) => {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!userName || !password || !confirmPassword) {
      setRegistrationErrorMessage("Please fill in all fields");
    } else if (usernameError || passwordError || confirmPasswordError) {
      setRegistrationErrorMessage("Please fix the errors in the form");
    } else {
      const userInfo = { username: userName, password: password };
      serverCall(userInfo);
    }
  };

  const serverCall = (userInfo) => {
    fetch("https://dummyjson.com/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          setRegistrationErrorMessage(response.error);
        } else {
          setRegistrationSuccess(true);
        }
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {registrationSuccess ? (
            <>
              <h2>Registration Successful</h2>
              <p>You may now log in with your credentials.</p>
            </>
          ) : (
            <form onSubmit={onFormSubmit}>
              <div className="mb-3 mt-3">
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  className={`form-control ${usernameError ? "is-invalid" : ""}`}
                  id="username"
                  placeholder="Enter username"
                  name="username"
                  value={userName}
                  onChange={userNameHandler}
                />
                {usernameError && <div className="invalid-feedback">{usernameError}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className={`form-control ${passwordError ? "is-invalid" : ""}`}
                  id="password"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={passwordHandler}
                />
                {passwordError && <div className="invalid-feedback">{passwordError}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  className={`form-control ${confirmPasswordError ? "is-invalid" : ""}`}
                  id="confirmPassword"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={confirmPasswordHandler}
                />
                {confirmPasswordError && <div className="invalid-feedback">{confirmPasswordError}</div>}
              </div>

              {registrationErrorMessage && (
                <div className="alert alert-danger" role="alert">
                  {registrationErrorMessage}
                </div>
              )}

              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
