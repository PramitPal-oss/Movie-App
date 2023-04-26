import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import classes from './Search.module.css';

function SearchInput(props) {
  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const submitHandler = function (e) {
    e.preventDefault();
    navigate('/searched/' + input);
  };

  return (
    <form className={classes.search} onSubmit={submitHandler}>
      <div className={classes.inputContainer}>
        <FaSearch className={classes.icon} />
        <input
          type="text"
          className={classes.inputField}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
        />
      </div>
    </form>
  );
}

export default SearchInput;
