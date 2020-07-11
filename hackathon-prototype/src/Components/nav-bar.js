import React from "react";

import { Menu } from "semantic-ui-react";

function NavBar() {
  return (
    <div>
      <Menu > 
   
        <Menu.Item
          name="Home"
        
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="resources"
         
        >
          Resources
        </Menu.Item>

        <Menu.Item
          name="about"
     
        >
          About
        </Menu.Item>
        <Menu.Item
          name="contact"
     
        >
          Contact
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default NavBar;
