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

    <div className="license">

    
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
          </div>
        </Container>
      
    </div>
  );
}

export default Contact;
