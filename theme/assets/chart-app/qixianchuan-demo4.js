$.ajax({
	type: "get",
	url: "json/Chart1.json",
	async: true,
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < data.mscolumn3d.length; i++) {
			Createmscolumn3d(data.mscolumn3d[i].id, data.mscolumn3d[i]);
		}
	}
});

//Createmscolumn3d(id, mscolumn3d);

function Createmscolumn3d(id, mscolumn3d) {
	FusionCharts.ready(function() {
		var fusioncharts = new FusionCharts({
			type: 'mscolumn3d',
			renderAt: id,
			width: '100%',
			height: '100%',
			dataFormat: 'json',
			dataSource: {
				"chart": {
					//"caption": "Comparison of Quarterly Revenue",
					//"xAxisname": "Quarter",
					//"yAxisName": "Revenues (In USD)",
					//"numberPrefix": "$",
					"plotFillAlpha": "80",
					//Cosmetics
					"paletteColors": "#0075c2,#1aaf5d",
					"baseFontColor": "#333333",
					"baseFont": "Helvetica Neue,Arial",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"showBorder": "0",
					"bgColor": "#ffffff",
					"showShadow": "0",
					"canvasBgColor": "#ffffff",
					"canvasBorderAlpha": "0",
					"divlineAlpha": "100",
					"divlineColor": "#999999",
					"divlineThickness": "1",
					"divLineIsDashed": "1",
					"divLineDashLen": "1",
					"divLineGapLen": "1",
					"usePlotGradientColor": "0",
					"showplotborder": "0",
					"valueFontColor": "#ffffff",
					"placeValuesInside": "1",
					"showHoverEffect": "1",
					"rotateValues": "1",
					"showXAxisLine": "1",
					"xAxisLineThickness": "1",
					"xAxisLineColor": "#999999",
					"showAlternateHGridColor": "0",
					"legendBgAlpha": "0",
					"legendBorderAlpha": "0",
					"legendShadow": "0",
					"legendPosition": "right",
					"legendItemFontSize": "10",
					"legendItemFontColor": "#666666"
				},
				"categories": [{
					"category": mscolumn3d.category
				}],
				"dataset": mscolumn3d.dataset

			},
			"events": {
				"beforeRender": function(evt, args) {
					//console.log("df");bar2d
					//
					init(evt);
					if($(window).width() <= 767) {
						evt.sender.chartType("bar2d");
					}

				},
				'rendered': function(evtObj, argObj) {
					//加载数据的时候

				}
			}
		});
		fusioncharts.render();
	});
}

function init(evt) {
	var loadMessage = evt.sender.options;
	loadMessage.loadMessage = "正在加载图表，请稍后";
	loadMessage.dataInvalidMessage = "无效的数据";
	loadMessage.dataEmptyMessage = "不显示数据";
	loadMessage.renderErrorMessage = "无法绘制图表";
	loadMessage.dataLoadErrorMessage = "加载数据中的错误";
	loadMessage.dataLoadStartMessage = "检索数据。请稍等";
	loadMessage.typeNotSupportedMessage = "不支持图表类型";
}