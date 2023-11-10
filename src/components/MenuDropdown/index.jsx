// MenuDropdown.js
import React from 'react';
import { DropdownWrapper, MenuItem } from './styles';

const MenuDropdown = ({ isOpen, items, onItemClick }) => {
  return (
    <DropdownWrapper>
      {items.map((item, index) => (
        <MenuItem key={index} onClick={() => onItemClick(item)}>
          {item}
        </MenuItem>
      ))}
    </DropdownWrapper>
  );
};

export default MenuDropdown;
