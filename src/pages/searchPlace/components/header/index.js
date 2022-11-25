import React from 'react';
import { logo } from '../../utils';
import PropTypes from 'prop-types';
import './style.css';
import { PLACES_OPTIONS } from '../../../../constants';
import Dropdown from '../../../../components/dropdown';

const dropdownHelper = (handleChange) => (
  <section className="header__dropdown">
    <Dropdown
      options={PLACES_OPTIONS}
      handleChange={handleChange}
      data-test="dropdownComponent"
    />
  </section>
);

const Header = (props) => {
  const handleChange = (val) => {
    props.handleChange(val);
  };

  return (
    <>
      <div className="header" data-test="headerComponent">
        <section className="header__logo" data-test="logoTest">
          {logo}
        </section>
        {window.innerWidth > 600 && dropdownHelper(handleChange)}
        <section className="header__profile">
          <button
            className="header__profile__button"
            data-test="profileButtonTest"
          >
            BB
          </button>
        </section>
      </div>

      {/* Mobile device only */}
      {window.innerWidth <= 600 && (
        <div className="header__mobile__menu" data-test="headerComponent">
          {dropdownHelper(handleChange)}
        </div>
      )}
    </>
  );
};

Header.propTypes = {
  handleChange: PropTypes.func,
};

export default Header;
