import React, { useState } from "react";
import { useHistory } from "react-router";
import { Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();

  function handleSingOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  function toHome() {
    history.push("/");
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="Anasayfa" onClick={toHome} />

          <Menu.Menu position="right">
            <Menu.Item>
              {isAuthenticated ? (
                <SignedIn signOut={handleSingOut} />
              ) : (
                <SignedOut signIn={handleSignIn} />
              )}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
