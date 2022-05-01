import React from 'react';

const Header = ({title}) => {
    return (
        <div>
            <h2 className='header-title'>{title}</h2>
        </div>
    );
};

export default Header;