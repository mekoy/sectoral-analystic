const getOrCreateTooltip = (chart: {
	canvas: {
		parentNode: {
			querySelector: (arg0: string) => any;
			appendChild: (arg0: any) => void;
		};
	};
}) => {
	let tooltipEl = chart.canvas.parentNode.querySelector("div");

	if (!tooltipEl) {
		tooltipEl = document.createElement("div");
		tooltipEl.style.background = "rgba(211, 15, 15, 0.7)";
		tooltipEl.style.borderRadius = "3px";
		tooltipEl.style.color = "white";
		tooltipEl.style.opacity = 1;
		tooltipEl.style.pointerEvents = "none";
		tooltipEl.style.position = "absolute";
		tooltipEl.style.transform = "translate(-50%, 0)";
		tooltipEl.style.transition = "all .1s ease";

		const table = document.createElement("table");
		table.style.margin = "0px";

		tooltipEl.appendChild(table);
		chart.canvas.parentNode.appendChild(tooltipEl);
	}

	return tooltipEl;
};

export const externalTooltipHandler = (context: any) => {
	// Tooltip Element
	const {chart, tooltip} = context;
	const tooltipEl = getOrCreateTooltip(chart);
	// Hide if no tooltip
	if (tooltip.opacity === 0) {
		tooltipEl.style.opacity = 0;
		return;
	}
};
