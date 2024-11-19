import { ReactElement, useState } from 'react'
import Modal from 'react-modal'

//Not allow the parent component to pass properties not allowed
interface ModalHolderProps {
    contentToShow: JSX.Element
}

export const ModalHolder = ({ contentToShow }: ModalHolderProps) => {
    const [visibility, setVisibility] = useState(false)

    return (
        <>
            <button onClick={() => setVisibility(true)}> Show Modal</button>

            <Modal isOpen={visibility}>
                <div>{contentToShow}</div>
            </Modal>
        </>
    )
}