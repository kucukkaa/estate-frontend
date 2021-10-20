import React from "react";
import { useParams } from "react-router";
import { Card, Icon, Image } from "semantic-ui-react";
import { useSelector } from "react-redux";

export default function EstateDetail() {
  let { id } = useParams();

  const { estateValue } = useSelector((state) => state.estateReducer);

  return (
    <div>
      <Card fluid>
        <Image
          src="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{estateValue[0].estateType.name}</Card.Header>
          <Card.Meta>
            <span>
              {estateValue[0].district.name}/{estateValue[0].city.name}
            </span>
          </Card.Meta>
          <Card.Description>
            {estateValue[0].flat}.kat / {estateValue[0].size} metrekare /{" "}
            {estateValue[0].room}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <h5>
            <Icon name="lira sign" />
            {estateValue[0].price}
          </h5>
        </Card.Content>
      </Card>
    </div>
  );
}
