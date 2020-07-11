import React from "react";
import { Icon } from 'semantic-ui-react';

function VisualKeySection() {
  return (
    <div>
      <div className="parent-div-key">
          Find resources relevant to you using these colours:
        <div className="key-text-dev"> <Icon name='code' size='large' className="icon" alt="Developer Resources"/> Resources for Developers</div>
        <div className="key-text-creator"><Icon name='paint brush' size='large' className="icon" alt="Developer Resources"/> Resources for Creators</div>
        <div className="key-text-both"><Icon name='code' size='large' className="icon" alt="Developer Resources"/><Icon name='paint brush' size='large' className="icon" alt="Developer Resources"/> Resources for Both</div>
      </div>

     
        
      </div>

  );
}

export default VisualKeySection;
