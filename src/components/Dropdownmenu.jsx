import React from "react";
import Select from "react-select";
import "../stylesheets/Dropdownmenu.css";

const states = [
 
    { label: "Activos", value: "Activos" },
    { label: "En Espera", value: "En Espera" },
    { label: "Terminados", value: "Terminados" },
    { label: "Otros", value: "Otros" },
 
];

function Dropdownmenu(){
  return(
    <div className="drop-container">
      <Select 
      id = "dropdown"
        options={states}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "none"
           
          }),
        }}
      
      />
      
    </div>
  );
}



export default Dropdownmenu;