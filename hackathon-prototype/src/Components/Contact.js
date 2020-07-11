import React from "react";
import { Container, Icon } from "semantic-ui-react";

function Contact() {
  return (
    <div className="parent-contact">
        <Container>
        <h1 >
            Contact Us
        </h1>
        
          <div className="footer">
            <a className="link" target="_blank" rel="noopener">
              <Icon name="facebook f"/>
              Facebook
              
            </a>
            <a
              className="link"
               target="_blank" rel="noopener"
            >
              <Icon name="twitter"/>
              Twitter
              
            </a>
            <a className="link"  target="_blank" rel="noopener">
              
              <Icon name="envelope"/>
              Email
            </a>

            
          </div>
        </Container>
      
    </div>
  );
}

export default Contact;
