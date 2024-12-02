interface BaseChartProps {
    data: number[];
    labels: string[];
}

interface BarChartProps extends BaseChartProps {
    type: 'bar';
    barWidth: number;
}

interface LineChartProps extends BaseChartProps {
    type: 'line';
    lineColor: string;
}

interface PieChartProps extends BaseChartProps {
    type: 'pie';
    pieRadius: number;
}

export type ChartProps = BarChartProps | LineChartProps | PieChartProps;
  