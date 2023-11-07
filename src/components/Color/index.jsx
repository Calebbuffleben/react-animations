import { styled } from "styled-components";

const Colors = styled.div`
    width: 100px;
    height: 100px;
    color: white;
    background-color: ${props =>  props.color};
`;

const Color = ({ colors }) => (
    <>
        {colors.map(color => (
            <Colors color={color.hex}>{color.name}</Colors>
        ))}
    </>
)

export default Color;