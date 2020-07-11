import React from "react";
import { Button } from "semantic-ui-react";

const ChangeColourOptions = (props) => {

   const handleItemClick = (e, { content }) => {
        
        props.selectBackgroundColour(content);
      };

  return (
    <div className="parent-color-change">
        Change background colour ->  {     }    
     <Button basic color='red' content='Red' onClick={handleItemClick}/>
      <Button basic color='orange' content='Orange' onClick={handleItemClick}/>
      <Button basic color='yellow' content='Yellow' onClick={handleItemClick}/>
      <Button basic color='green' content='Green' onClick={handleItemClick}/>
      <Button basic color='teal' content='Teal' onClick={handleItemClick}/>
      <Button basic color='blue' content='Blue' onClick={handleItemClick}/>
      <Button basic color='purple' content='Purple' onClick={handleItemClick}/>
      <Button basic color='pink' content='Pink' onClick={handleItemClick}/>
      <Button basic color='brown' content='Brown' onClick={handleItemClick}/>
      <Button basic color='grey' content='Grey' onClick={handleItemClick}/>
      <Button basic color='black' content='White' onClick={handleItemClick}/>
    </div>
  );
}

export default ChangeColourOptions;
