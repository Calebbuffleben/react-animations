import styled from "styled-components";

export const LightInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const LightButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const DarkInput = styled.input`
  padding: 10px;
  border: 1px solid #555;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #333;
  color: #eee;
`;

export const DarkButton = styled.button`
  padding: 10px 20px;
  background-color: #555;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;