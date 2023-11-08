import { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${ props => props.color === 'dark' ? 'grey' : props.color === 'white' ? 'white' : ''}
`;

const DarkMode = ({ children }) => {
    const [color, setColor] = useState('white');

    return (
        <Container color= {color}>
            {children}
            <button onClick={() => setColor(color === 'white' ? 'dark' : 'white')}>Change color</button>
        </Container>
    )
}

export default DarkMode;