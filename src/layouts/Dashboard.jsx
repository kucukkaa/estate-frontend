import React from "react";
import EstateList from "../pages/EstateList";
import EstateType from "./EstateType";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import EstateDetail from "../pages/EstateDetail";
import EstateAdd from "../pages/EstateAdd";
import EstateListByType from "../pages/EstateListByType";
import CustomerList from "../pages/CustomerList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <EstateType />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={EstateList} />
            <Route exact path="/estates" component={EstateList} />
            <Route exact path="/estates/:id" component={EstateDetail} />
            <Route exact path="/estate/add" component={EstateAdd} />
            <Route
              exact
              path="/estate/filter/:estateTypeId"
              component={EstateListByType}
            />
            <Route exact path="/mycompany/customers" component={CustomerList} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
