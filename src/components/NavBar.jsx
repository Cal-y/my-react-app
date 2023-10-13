import React from 'react';

const NavBar = ({ onPreviousClick, onNextClick, isPreviousDisabled, isNextDisabled }) => {
  return (
    <div>
      <button onClick={onPreviousClick} disabled={isPreviousDisabled}>
        Précédent
      </button>
      <button onClick={onNextClick} disabled={isNextDisabled}>
        Suivant
      </button>
    </div>
  );
};

export default NavBar;
