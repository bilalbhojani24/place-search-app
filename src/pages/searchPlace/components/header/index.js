import React from 'react';
import Select from 'react-select';
import { logo } from '../../utils';
import PropTypes from 'prop-types';
import './style.css';
import { PLACES_OPTIONS } from '../../../../constants';
import Dropdown from '../../../../components/dropdown';

const Header = (props) => {
  const handleChange = (val) => {
    props.handleChange(val);
  };

  return (
    <>
      <div className="header" data-test="headerComponent">
        <section className="logo" data-test="logoTest">
          {logo}
        </section>
        {window.innerWidth > 600 && (
          <section className="dropdown__menu">
            <Dropdown
              options={PLACES_OPTIONS}
              handleChange={handleChange}
              data-test="dropdownComponent"
            />
          </section>
        )}
        <section className="profile__section">
          <button className="profile_button" data-test="profileButtonTest">
            BB
          </button>
        </section>
      </div>

      {/* Mobile device only */}
      {window.innerWidth <= 600 && (
        <div className="mobile__header" data-test="headerComponent">
          <section className="dropdown__menu">
            <Dropdown
              options={PLACES_OPTIONS}
              handleChange={handleChange}
              data-test="dropdownComponent"
            />
          </section>
        </div>
      )}
    </>
  );
};

Header.propTypes = {
  handleChange: PropTypes.func,
};

export default Header;
