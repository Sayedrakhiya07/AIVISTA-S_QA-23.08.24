import React from 'react';
import '../Styles/FilterModal.scss';

function FilterModal({ isOpen, onClose, onApplyFilter, filterOptions, setFilterOptions }) {
  if (!isOpen) return null;

  const handleSortChange = (e) => {
    setFilterOptions({ ...filterOptions, sortBy: e.target.value });
  };

  const handleTagChange = (e) => {
    setFilterOptions({ ...filterOptions, tag: e.target.value });
  };

  const applyFilter = () => {
    onApplyFilter();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Filter Questions</h3>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="filter-section">
            <h4>Sort By</h4>
            <select value={filterOptions.sortBy} onChange={handleSortChange}>
              <option value="Newest">Newest</option>
              <option value="Most Viewed">Most Viewed</option>
              <option value="Oldest">Oldest</option>
              <option value="Bountied">Bountied</option>
            </select>
          </div>
          <div className="filter-section">
            <h4>Filter By Tag</h4>
            <input 
              type="text" 
              placeholder="Enter tag" 
              value={filterOptions.tag} 
              onChange={handleTagChange} 
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="apply-button" onClick={applyFilter}>Apply Filter</button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
