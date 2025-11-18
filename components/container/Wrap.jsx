import React from 'react'
import PropTypes from 'prop-types';

const Wrap = ({children,style}) => {
  return (
    <div className='custom-container' style={style}>
        {children}

    </div>
  )
}

export default Wrap;

//props validation
Wrap.propTypes = {
  children: PropTypes.node.isRequired,
};
