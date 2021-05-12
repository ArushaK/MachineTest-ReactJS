import React, { useContext, useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import AuthContext from "../../store/auth-context";

function User() {
  const [comp, setComp] = useState(false);
  const ctx = useContext(AuthContext);
  var len = localStorage.password.split("");

  const changePassword = () => {
    setComp(true);
  };

  const handlePass = (e) => {
    localStorage.password = e.target.value;
    ctx.password = localStorage.getItem("password");
    console.log(ctx.password);
  };

  const savePassword = (e) => {
    alert("new Password is " + ctx.password);
  };
  return (
    <main>
      <Card className={classes.home}>
        <h6>Username: {localStorage.name}</h6>
        {!comp && (
          <>
            <h6>
              Password:
              {len.map((item) => (
                <h7>*</h7>
              ))}
            </h6>
            <button className={classes.button4} onClick={changePassword}>
              Change Password
            </button>
          </>
        )}
        {comp && (
          <>
            {" "}
            <h6>
              New Password: <input type="password" onChange={handlePass} />
            </h6>
            <button className={classes.button4} onClick={savePassword}>
              Save Password
            </button>
          </>
        )}
        <button className={classes.button4} onClick={ctx.onLogout}>
          Logout
        </button>
      </Card>
    </main>
  );
}

export default User;
