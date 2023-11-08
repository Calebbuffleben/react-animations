import SplitScreen from './SplitScreen';

const LeftHandPage = () => {
    return <h1>Left</h1>
}

const RightHandPage = () => {
    return <h1>Right</h1>
}

const SplitScreenPage = () => (
    <SplitScreen left={LeftHandPage} right={RightHandPage} />
)

export default SplitScreenPage;