function CreateAngularGaugeChart(id) {
	FusionCharts.ready(function() {
		var cSatScoreChart = new FusionCharts({
			type: 'angulargauge',
			renderAt: id,
			width: '100%',
			height: '100%',
			dataFormat: 'json',
			dataSource: {
				"chart": {
					"showBorder": "1",
					"captionOnTop": "1",
					"captionAlignment": "left",
					"caption": "图例",
					"captionFontSize": "15",
					"captionFontColor": "#ffffff",
					"subcaption": "速度",
					"subCaptionFontSize": "12",
					"subCaptionFontColor": "#ffffff",
					"gaugeStartAngle": "180",
					"gaugeEndAngle": "90",
					"lowerLimit": "0",
					"upperLimit": "100",
					"gaugeInnerRadius": "98%",
					"majorTMColor": "#ffffff",
					"baseFontColor": "#ffffff",
					"bgColor": "438383,76BBB6",
					"bgratio": "10,90",
					"bgAlpha": "100,100",
					"showValue": "1",
					"placeValuesInside": "1",
					"theme": "fint"
				},
				"colorRange": {
					"color": [{
						"code": "#FFFFFF"
					}]
				},
				"dials": {
					"dial": [{
						"value": "67",
						"borderAlpha": "10",
						"bgColor": "#549997,#1A625C,#549997"
					}]
				}
			},
			events: {
				'beforeRender': function(evt, args) {
					//在图形渲染之前
				},
				'rendered': function(evtObj, argObj) {
					//加载数据的时候
					evtObj.sender.intervalVar = setInterval(function() {
						var chartIns = evtObj.sender,
							prcnt = 65 + parseInt(Math.floor(Math.random() * 10), 10);
						chartIns.feedData("value=" + prcnt);
					}, 2000);
				},
				"realtimeUpdateComplete": function(evtObj, argObj) {
					//数据变化的时候
				},
				"renderComplete": function(evt, args) {},
				"disposed": function(evtObj, argObj) {
					clearInterval(evtObj.sender.intervalVar);
				}
			}
		}).render();
	});
}

$(".AngularGaugeChart").each(function(n, e) {
	CreateAngularGaugeChart(e.id);
});

$(".VbulletChart").each(function(n, e) {
	CreateVbulletChart(e.id);
});

function CreateVbulletChart(id) {
	FusionCharts.ready(function() {
		var fusioncharts = new FusionCharts({
			type: 'vbullet',
			renderAt: id,
			width: '100%',
			height: '100%',
			dataFormat: 'json',
			dataSource: {
				"chart": {
					"theme": "fint",
					"lowerLimit": "0",
					"showBorder": "1",
					"minorTMNumber": "3",
					"majorTMColor": "#ffffff",
					"minorTMColor": "#ffffff",
					"baseFontColor": "#ffffff",
					"plotFillColor": "#6AD2C7",
					"targetColor": "#FFFFFF",
					"bgColor": "438383,76BBB6",
					"bgratio": "10,90",
					"bgAlpha": "100,100",
					"upperLimit": "10",
					"caption": "油压"
				},
				"colorRange": {
					"color": [{
						"minValue": "0",
						"maxValue": "50",
						"alpha": "25"
					}, {
						"minValue": "50",
						"maxValue": "75",
						"alpha": "25"
					}, {
						"minValue": "75",
						"maxValue": "120",
						"alpha": "25"
					}]
				},
				"value": "8"
			}
		});
		fusioncharts.render();
	});
}
$(".AngularGaugeChartB").each(function(n, e) {
	CreateAngularGaugeTypeB(e.id);
});

function CreateAngularGaugeTypeB(id) {
	FusionCharts.ready(function() {
		var fusioncharts = new FusionCharts({
			type: 'angulargauge',
			renderAt: id,
			width: '100%',
			height: '100%',
			dataFormat: 'json',
			dataSource: {
				"chart": {
					"caption": "KVA",
					"lowerLimit": "0",
					"upperLimit": "100",
					"gaugeInnerRadius": "98%",
					"showBorder": "1",
					"showValue": "1",
					"valueBelowPivot": "1",
					"majorTMNumber": "9",
					"minorTMNumber": "4",
					"placeValuesInside": "1",
					"gaugeStartAngle": "-65",
					"gaugeEndAngle": "245",
					"majorTMColor": "#ffffff",
					"majorTMAlpha": "0",
					"baseFontColor": "#ffffff",
					"bgColor": "438383,76BBB6",
					"bgratio": "10,90",
					"bgAlpha": "100,100",
					"theme": "fint"
				},
				"colorRange": {
					"color": [{
						"code": "#ffffff"
					}]
				},
				"dials": {
					"dial": [{
						"value": "67",
						"bgcolor": "FFFFFF",
						"borderColor": "#ffffff",
					}]
				}
			}
		});
		fusioncharts.render();
	});
}

$.ajax({
		type: 'GET',
		url: 'json/DoughNut2d.json',
		dataType: 'json',
		success: function(DoughNut2d) {
			$(".DoughNut2d").each(function(n, e) {
				CreateDoughNut2d(e.id, DoughNut2d);
			});
		}
	})
	/*var DoughNut2d = {
		"chart": {
			"caption": "COS",
			"defaultCenterLabel": "COS占比"
		},
		"data": [{
			"label": "cos",
			"value": "60"
		}, {
			"label": "其余",
			"value": "40"
		}]
	};*/
	//					DoughNut2d.data = [{
	//						"label": "cos",
	//						"value": "80"
	//					}, {
	//						"label": "其余",
	//						"value": "20"
	//					}];
	//					DoughNut2d.caption = "COS";
	//					DoughNut2d.defaultCenterLabel = "COS占比";

function CreateDoughNut2d(id, DoughNut2d) {
	FusionCharts.ready(function() {
		var revenueChart = new FusionCharts({
			type: 'doughnut2d',
			renderAt: id,
			width: '100%',
			height: '100%',
			dataFormat: 'json',
			dataSource: {
				"chart": {
					"caption": DoughNut2d.chart.caption,
					"paletteColors": "#6BD4C8,#ffffff",
					"showBorder": "1",
					"use3DLighting": "1",
					"radius3D": "1",
					"showShadow": "1",
					"enableSmartLabels": "0",
					"startingAngle": "310",
					"showLabels": "0",
					"showPercentValues": "1",
					"pieRadius": "60",
					"defaultCenterLabel": DoughNut2d.chart.defaultCenterLabel,
					"centerLabel": "$value",
					"centerLabelBold": "1",
					"showTooltip": "1",
					"baseFontColor": "#ffffff",
					"bgColor": "438383,76BBB6",
					"bgratio": "10,90",
					"bgAlpha": "100,100",
					"theme": "fint"
				},
				"data": DoughNut2d.data
			}
		}).render();
	});
}