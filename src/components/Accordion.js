import React from 'react';

import styles from './Accordion.module.css';

const Accordion = props => {
    const {open, onClick, id} = props;
    return (
        <span onClick={() => onClick(id, open)} className={open ? styles.open : ""}>{open ? "open" : "closed"}</span>
    );
};

Accordion.defaultProps = {
    open: false,
    onClick: () => {}
};

export default Accordion;
