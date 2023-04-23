import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'; // импортируем хуки
import { updateFilter } from '../../redux/contactsSlice'; // импортируем действие

import css from '../Filter/Filter.module.css';

function Filter() {
  const filterValue = useSelector(state => state.contacts.filter); // получаем значение фильтра из хранилища
  const dispatch = useDispatch(); // получаем функцию для отправки действия в хранилище

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(updateFilter(value)); // отправляем действие в хранилище при изменении фильтра
  };

  return (
    <div className={css.FilterConteiner}>
      <label className={css.FilterLabel}>
        Find contacts by name
        <input
          className={css.FilterInputs}
          type="text"
          value={filterValue}
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
