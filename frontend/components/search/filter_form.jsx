import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm = ({ limit, updateFilter }) => (
  <div>
    <br/>
    <label>Limit Results</label>
    <input
      type="number"
      value={limit}
      onChange={handleChange('limit', updateFilter)}
    />
    <br/>
  </div>
);

export default FilterForm;
