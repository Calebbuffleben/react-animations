import { useState } from "react";

const DynamicContentLoader = () => {
    const [content, setContent] = useState([]);

    const loadContent = async (id) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const loadedContent = {
            id,
            text: `Tab ${id} Data`
        };

        setContent(prev => [...prev, loadedContent])
    }

    const handleButtonClick = (id) => {
        loadContent(id);
    }

    return (
        <div>
            <h2>Dynamic content Loader</h2>
            <button onClick={() => handleButtonClick(1)} >Tab 1</button>
            <button onClick={() => handleButtonClick(2)}>Tab 2</button>
            <button onClick={() => handleButtonClick(3)}>Tab 3</button>
            <button onClick={() => handleButtonClick(4)}>Tab 4</button>
            <button onClick={() => handleButtonClick(5)}>Tab 5</button>

            <div>
                <h3>Loaded content</h3>
                <ul>{content.map((item, index) => {
                    <li key={`${item.id}${index}`}>{item.text}</li>
                })}</ul>
            </div>
        </div>
    )
}

export default DynamicContentLoader;