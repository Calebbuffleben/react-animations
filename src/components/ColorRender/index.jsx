import Color from "../Color";

const ColorRender = () => {
    const color = [
    {
        hex: '#DFFF00',
        name: 'color 1'
    },
    {
        hex: '#FFBF00',
        name: 'color 2'
    },
    {
        hex: '#FF7F50',
        name: 'color 3'
    },
    {
        hex: '##DE3163',
        name: 'color 4'
    }];
    return (
        <Color colors={color} />
    )    
}

export default ColorRender;