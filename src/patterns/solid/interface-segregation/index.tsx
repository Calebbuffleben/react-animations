import Chart from "./Chart";

const InterfaceSegregation: React.FC = () => (
    <div>
      <Chart type="bar" data={[10, 20, 30]} labels={['A', 'B', 'C']} barWidth={5} />
      <Chart type="line" data={[5, 10, 15]} labels={['X', 'Y', 'Z']} lineColor="blue" />
      <Chart type="pie" data={[50, 30, 20]} labels={['Red', 'Blue', 'Green']} pieRadius={100} />
    </div>
);

export default InterfaceSegregation;