interface IOptionActions {
	options: {plugins: {title: {align: string}}};
	update: () => void;
}
export const actions = [
	{
		name: "Title Alignment: start",
		handler(chart: IOptionActions) {
			chart.options.plugins.title.align = "start";
			chart.update();
		}
	},
	{
		name: "Title Alignment: center (default)",
		handler(chart: IOptionActions) {
			chart.options.plugins.title.align = "center";
			chart.update();
		}
	},
	{
		name: "Title Alignment: end",
		handler(chart: IOptionActions) {
			chart.options.plugins.title.align = "end";
			chart.update();
		}
	}
];
