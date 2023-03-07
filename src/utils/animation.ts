const totalDuration = 50000;
const delayBetweenPoints = totalDuration / 800;

const previousY = (ctx: {
	index: number;
	chart: any;
	dataIndex: number;
	getProps: (arg0: string, arg1: boolean) => void;
	getPixelForValue: (arg0: number) => void;
}) => {
	ctx.index === 0
		? ctx.chart.scales.y.getPixelForValue(6000)
		: ctx.chart.getDatasetMeta(ctx.dataIndex).data[ctx.index - 1];
};

export const animation = {
	x: {
		type: "number",
		easing: "linear",
		duration: delayBetweenPoints,
		from: NaN,
		delay(ctx: any) {
			if (ctx.type !== "data" || ctx.xStarted) {
				return 0;
			}
			ctx.xStarted = true;
			return ctx.index * delayBetweenPoints;
		}
	},
	y: {
		type: "number",
		easing: "linear",
		duration: delayBetweenPoints,
		from: previousY,
		delay(ctx: any) {
			if (ctx.type !== "data" || ctx.yStarted) {
				return 0;
			}
			ctx.yStarted = true;
			return ctx.index * delayBetweenPoints;
		}
	}
};
