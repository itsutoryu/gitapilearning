import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');
  const alertContext = useContext(AlertContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter keyword', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search User...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          onClick={githubContext.clearUsers}
          className='btn btn-light btn-block'
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
