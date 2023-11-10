// HamburgerMenu.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import MenuDropdown from '../MenuDropdown';

const MenuButton = styled.div`
  cursor: pointer;
  padding: 10px;
  z-index: 2;
  background-color: black;
`;

const MenuIcon = styled(motion.div)`
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 5px 0;
`;

const HamburgerMenu = () => {
  const menuItems = ['Home', 'About', 'Services', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        <MenuIcon
          initial={false}
          animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 0 }}
        />
        <MenuIcon
          initial={false}
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        />
        <MenuIcon
          initial={false}
          animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 0 }}
        />
      </MenuButton>
      <AnimatePresence>
        {isOpen && (
          <MenuDropdown
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            items={menuItems}
            exit={{ opacity: 0, y: -10 }}
          >
            {/* Your menu items go here */}
          </MenuDropdown>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
