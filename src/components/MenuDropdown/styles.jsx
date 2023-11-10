import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DropdownWrapper = styled(motion.div)`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: grey !important;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1;
  width: 200px;
`;

export const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: white !important;
  background-color: black;
`;