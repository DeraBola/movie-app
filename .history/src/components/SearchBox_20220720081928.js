import React from 'react';

const SearchBox = (props) => {
return(
    <div className='col col-sm-4'>
      <input className='form-control'
      value={props.value} 
      onChange = {() => props.setSearchValue(event.target) }
      placeholder="Type to search..."></input>
    </div>
);
};
export default SearchBox;