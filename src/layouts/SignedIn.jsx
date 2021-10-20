import React from "react";
import { useHistory } from "react-router";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn(props) {
  const history = useHistory();

  function toMyCustomers() {
    history.push(`/mycompany/customers`);
  }

  function toAddNewEstate() {
    history.push(`/estate/add`);
  }

  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://cdn.pixabay.com/photo/2020/05/12/17/04/man-5163992_960_720.jpg"
        />
        <Dropdown pointing="top center" text="Alierk">
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={toMyCustomers}
              text="Müşterilerim"
              icon="info"
            />
            <Dropdown.Item
              onClick={toAddNewEstate}
              text="Yeni Emlak Ekle"
              icon="plus square outline"
            />
            <Dropdown.Item
              onClick={props.signOut}
              text="Çıkış Yap"
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
