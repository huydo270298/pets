import * as Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';
import HighchartsReact from 'highcharts-react-official';
import { useRef } from 'react';

highchartsMore(Highcharts);
solidGauge(Highcharts);

const options: Highcharts.Options = {
	chart: {
		type: 'solidgauge',
		backgroundColor: 'transparent',
	},
	title: {
		text: 'Satisfaction Rate',
		align: 'left',
		useHTML: true,
	},
	subtitle: {
		text: 'From all projects',
		align: 'left',
		useHTML: true,
	},
	series: [
		{
			type: 'solidgauge',
			data: [95],
		},
	],
	pane: {
		startAngle: -125,
		endAngle: 125,
	},
	yAxis: [
		{
			min: 0,
			max: 100,
			labels: {
				enabled: false,
			},
			minorTicks: false,
		},
	],
};

function ChartFav(props: HighchartsReact.Props) {
	const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={options}
			ref={chartComponentRef}
			containerProps={{ className: 'chart-fav' }}
			{...props}
		/>
	);
}

export default ChartFav;
