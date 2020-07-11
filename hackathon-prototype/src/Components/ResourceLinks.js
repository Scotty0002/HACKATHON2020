import React from "react";
import { Grid } from "semantic-ui-react";

function ResourceLinks() {
  return (
    <div>
      <Grid columns="two" centered stackable textAlign="center">
        <Grid.Row>
            <Grid.Column textAlign="center" className="both">
                Open Source Software
            </Grid.Column>
            <Grid.Column textAlign="center" className="both">
                Accessibility
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column textAlign="center" className="dev">
                Web Security
            </Grid.Column>
            <Grid.Column textAlign="center" className="dev">
                Responsiveness
            </Grid.Column>
        </Grid.Row>
      </Grid>

     
        
      </div>

  );
}

export default ResourceLinks;
