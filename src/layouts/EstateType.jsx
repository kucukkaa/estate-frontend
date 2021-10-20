import React, { useState, useEffect } from "react";
import { Menu } from "semantic-ui-react";
import EstateTypeService from "../services/estateTypeService";
import { useHistory } from "react-router";

export default function EstateType() {
  const [estateTypies, setEstateTypies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let estateTypeService = new EstateTypeService();
    estateTypeService
      .getEstateTypies()
      .then((result) => setEstateTypies(result.data.data));
  }, []);

  function toEstateListByType(id) {
    history.push(`/estate/filter/${id}`);
  }

  return (
    <div>
      <Menu pointing vertical>
        {estateTypies.map((estateType) => (
          <Menu.Item
            key={estateType.id}
            onClick={() => toEstateListByType(estateType.id)}
          >
            {estateType.name}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
