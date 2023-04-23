import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice';
import css from '../Filter/Filter.module.css';

function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <div className={css.FilterConteiner}>
      <label className={css.FilterLabel}>
        Find contacts by name
        <input
          className={css.FilterInputs}
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
