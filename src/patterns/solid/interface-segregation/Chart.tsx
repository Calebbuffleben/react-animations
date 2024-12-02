import { ChartProps } from "./types";

const Chart: React.FC<ChartProps> = (props) => {
    switch (props.type) {
      case 'bar':
        return <div>Rendering Bar Chart with barWidth {props.barWidth}</div>;
      case 'line':
        return <div>Rendering Line Chart with lineColor {props.lineColor}</div>;
      case 'pie':
        return <div>Rendering Pie Chart with pieRadius {props.pieRadius}</div>;
      default:
        return null;
    }
};

export default Chart;