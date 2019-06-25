import React from 'react';
import styles from './App.module.css';
import TodoListContainer from "../../containers/TodoListContainer";
import ItemStatusFilterContainer from "../../containers/ItemStatusFilterContainer";
import SearchPanelContainer from "../../containers/SearchPanelContainer";
import AppHeaderContainer from "../../containers/AppHeaderContainer";
import ItemAddFormContainer from "../../containers/ItemAddFormContainer";

const App = () => {
    return (
        <div className={styles.appWrapper}>
            <AppHeaderContainer/>
            <SearchPanelContainer/>
            <ItemStatusFilterContainer/>
            <TodoListContainer/>
            <ItemAddFormContainer/>
        </div>
    );
};

export default App;
