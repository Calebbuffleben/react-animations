import './card.css'
import imageHeader from './Image.png'
import stamp from './selo.png'

const Card = () => (
    <div className="card-container">
        <div>
            <img src={imageHeader} alt="header" />
        </div>
        <div className="content">
            <h2 className="title">Heading</h2>
            <img className="image" src={stamp} alt="stamp" />
            <p className="paragraph">Paragraph</p>
        </div>
        <button>Button</button>
    </div>
);

export default Card;