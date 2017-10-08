import React from 'react';
import Select from 'material-ui/Select';

export default ({ input, meta: { touched, error}, items, label }) =>
  (<div> 
    <div className="input">
      <label>{label}</label>
    </div>
    <Select native onChange={input.onChange} >
      <option value=''>Select Value</option>
      {
        items.map((item, index) =><option key={index.toString()} value={item.value}>{item.key}</option>)
      }
    </Select>
    { error && touched && <span className="error error--input">{error}</span> }
  </div>)