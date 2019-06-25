import React from 'react';
import styles from './SearchPanel.module.css';

const SearchPanel = (props) => {
    const onChange = (e) => props.updateSearchValue(e.currentTarget.value);
    return (
        <div className={styles.searchWrapper}>
            <input placeholder="&#128269;" value={props.searchValue}
                   className="form-control" onChange={onChange}
            />
        </div>
    );
};

export default SearchPanel;
