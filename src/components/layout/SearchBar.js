import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  const onChange = e => {
    searchLogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: '30px' }} className="blue">
      <div class="nav-wrapper">
        <form>
          <div class="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs..."
              ref={text}
              onChange={onChange}
            />
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(null, { searchLogs })(SearchBar);
