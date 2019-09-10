import React from "react";

const NumberButton = (props) => {
  return (
    <>
        <button className='number-button'>
          {props.value}
        </button>
    </>
  );
};

export default NumberButton;