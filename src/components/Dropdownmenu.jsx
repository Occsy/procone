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
            backgroundColor: '#2f5674',
            color: 'white'
          }),
          option: (styles) => ({
              ...styles,
              color: "white",
              backgroundColor: '#2f5674'
          }),
          singleValue: (styles) => ({
            ...styles,
            color: 'white',
            backgroundColor: "white"
          }),
          menuList: (styles) =>({
              ...styles,
              backgroundColor: "white",
              border: "2px solid white"
          }),
          menu: (styles) =>({
            ...styles,
            backgroundColor: "#2f5674"
          }),
          placeholder: (styles) =>({
            ...styles,
            color: "white"
          }),
        
        }}
      
      />
      
    </div>
  );
}



export default Dropdownmenu;