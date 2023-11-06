// MenuDropdown.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DropdownWrapper = styled(motion.div)`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1;
  width: 200px;
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  color: black !important;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const MenuDropdown = ({ isOpen, items, onItemClick }) => {
  return (
    <DropdownWrapper
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
      exit={{ opacity: 0, y: -10 }}
    >
      {items.map((item, index) => (
        <MenuItem key={index} onClick={() => onItemClick(item)}>
          {item}
        </MenuItem>
      ))}
    </DropdownWrapper>
  );
};

export default MenuDropdown;
