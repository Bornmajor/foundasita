import React from 'react'
import PropTypes from 'prop-types';

const PrimaryText = ({children}) => {
  return (
    <span style={{color:"#ad7e51"}}> {children}</span>
  )
}

export default PrimaryText;

PrimaryText.propTypes = {
  children: PropTypes.node.isRequired,
};