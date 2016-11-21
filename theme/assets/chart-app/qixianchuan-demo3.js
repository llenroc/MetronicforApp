$.ajax({
	type: "get",
	url: "json/Chart.json",
	async: true,
	dataType: 'json',
	success: function(data) {
		for(var i = 0; i < data.AngularGaugeChart.length; i++) {
			CreateAngularGaugeChart(data.AngularGaugeChart[i].id, data.AngularGaugeChart[i]);
		}

		for(var i = 0; i < data.AngularGaugeChartB.length; i++) {
			CreateAngularGaugeTypeB(data.AngularGaugeChartB[i].id, data.AngularGaugeChartB[i]);
		}

		for(var i = 0; i < data.DoughNut2d.length; i++) {
			CreateDoughNut2d(data.DoughNut2d[i].id, data.DoughNut2d[i]);
		}

		for(var i = 0; i < data.Thermometer.length; i++) {
			CreateThermometer(data.Thermometer[i].id, data.Thermometer[i]);
		}

		for(var i = 0; i < data.CylinderChart.length; i++) {
			CreateCylinder(data.CylinderChart[i].id, data.CylinderChart[i]);
		}
	}
});

function CreateAngularGaugeChart(id, AngularGaugeChart) {
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
					"borderColor": "#3d7f88",
					"borderThickness": "1",
					//"borderAlpha": "90",
					//"manageresize": "1",
					"alignCaptionWithCanvas": "1",
					//"captionOnTop": "1",
					"captionAlignment": "left",
					"caption": AngularGaugeChart.chart.caption,
					"captionFontSize": "10",
					"captionFontColor": "#ffffff",
					"chartTopMargin": "2",
					"chartBottomMargin": "0",
					"chartLeftMargin": "2",
					"chartRightMargin": "4",
					//"canvasBaseDepth":"500",
					"subcaption": AngularGaugeChart.chart.subcaption,
					"subCaptionFontSize": "14",
					"subCaptionFontColor": "#ffffff",
					"gaugeStartAngle": "180",
					"gaugeEndAngle": "90",
					"lowerLimit": "0",
					"upperLimit": "100",
					"showTooltip": "1",
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
						"value": AngularGaugeChart.dials.dial[0].value,
						//"borderColor":"#549997",
						//"borderAlpha": "38",
						//"borderThickness":"5",
						"bgColor": "#549997,#1A625C,#549997"
					}]
				}
			},
			events: {
				'beforeRender': function(evt, args) {
					//在图形渲染之前
					init(evt);
				},
				'rendered': function(evtObj, argObj) {
					//加载数据的时候
					evtObj.sender.intervalVar = setInterval(function() {
						var chartIns = evtObj.sender,
							prcnt = AngularGaugeChart.dials.dial[0].value - 0 + parseInt(Math.floor(Math.random() * 10), 10);
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

function CreateVbulletChart(id, VbulletChart) {
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
					"upperLimit": "10",
					"showBorder": "1",
					"showTooltip": "1",
					"minorTMNumber": "3",
					"majorTMColor": "#ffffff",
					"minorTMColor": "#ffffff",
					"baseFontColor": "#ffffff",
					"plotFillColor": "#6AD2C7",
					"targetColor": "#FFFFFF",
					"bgColor": "438383,76BBB6",
					"bgratio": "10,90",
					"bgAlpha": "100,100",
					"colorRangeFillRatio": "10,70,20",
					"showShadow": "1",
					"caption": VbulletChart.chart.caption
				},
				/*"colorRange": {
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
				},*/
				"value": VbulletChart.value
			},
			events: {
				'beforeRender': function(evt, args) {
					//在图形渲染之前
					init(evt);
				},
				'rendered': function(evtObj, argObj) {
					var chartIns = evtObj.sender;
					chartIns.intervalVar = setInterval(function() {
						var prcnt = parseInt(Math.floor(Math.random() * 6), 10);
						chartIns.feedData("&value=" + prcnt + "&id=" + VbulletChart.id);
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
		});
		fusioncharts.render();
	});
}

function CreateAngularGaugeTypeB(id, AngularGaugeTypeB) {
	FusionCharts.ready(function() {
		var fusioncharts = new FusionCharts({
			type: 'angulargauge',
			renderAt: id,
			width: '100%',
			height: '100%',
			dataFormat: 'json',
			dataSource: {
				"chart": {
					"caption": AngularGaugeTypeB.chart.caption,
					"subCaption": AngularGaugeTypeB.chart.subcaption,
					"captionAlignment": "left",
					"captionFontSize": "10",
					"chartTopMargin": "2",
					"lowerLimit": "0",
					"upperLimit": "100",
					"gaugeInnerRadius": "98%",
					"showBorder": "1",
					"showValue": "1",
					"showTooltip": "1",
					"valueBelowPivot": "1",
					"majorTMNumber": "9",
					"minorTMNumber": "4",
					"placeValuesInside": "1",
					"gaugeStartAngle": "245",
					"gaugeEndAngle": "-65",
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
						"value": AngularGaugeTypeB.dials.dial[0].value,
						"borderAlpha": "10",
						"bgColor": "#549997,#1A625C,#549997"
					}]
				}
			},
			events: {
				'beforeRender': function(evt, args) {
					//在图形渲染之前
					init(evt);
				},
				'rendered': function(evtObj, argObj) {
					//加载数据的时候
					evtObj.sender.intervalVar = setInterval(function() {
						var chartIns = evtObj.sender,
							prcnt = AngularGaugeTypeB.dials.dial[0].value - 0 + parseInt(Math.floor(Math.random() * 10), 10);
						chartIns.feedData("&value=" + prcnt);
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
		});
		fusioncharts.render();
	});
}

function CreateDoughNut2d(id, DoughNut2d) {
	FusionCharts.ready(function() {
		var revenueChart = new FusionCharts({
			type: 'doughnut2d',
			id: "DoughNut2d",
			renderAt: id,
			width: '100%',
			height: '100%',
			dataFormat: 'json',
			dataSource: {
				"chart": {
					"caption": DoughNut2d.chart.caption,
					"subcaption": DoughNut2d.chart.subcaption,
					//"subcaptionAlignment": "left",
					"captionOnTop": "1",
					"captionAlignment": "right",
					"chartTopMargin": "0",
					//"chartTopMargin": "5",
					"paletteColors": "#3aa095,#ffffff",
					"showBorder": "1",
					"use3DLighting": "1",
					"radius3D": "30",
					"showShadow": "1",
					"enableSmartLabels": "0",
					"startingAngle": "45",
					"showLabels": "0",
					"showPercentValues": "1",
					"pieRadius": "62",
					"labelDistance": "1000",
					"centerLabel": "$value",
					"defaultCenterLabel": DoughNut2d.data[0].value,
					"centerLabelBold": "4",
					"showTooltip": "1",
					"baseFontColor": "#ffffff",
					"bgColor": "438383,76BBB6",
					"bgratio": "10,90",
					"bgAlpha": "100,100",
					"baseFontColor": "#ffffff",
					"theme": "fint"
				},
				"data": DoughNut2d.data
			},
			"events": {
				'beforeRender': function(evt, args) {
					init(evt);
				},
				"rendered": function(evtObj, argObj) {},
				"realtimeUpdateComplete": function(evtObj, argObj) {
					//数据变化的时候
				},
				"renderComplete": function(evt, args) {},
				"disposed": function(evtObj, argObj) {
					clearInterval(evtObj.sender.intervalVar);
					clearInterval(intervalVar);
				}
			}
		}).render();

		var intervalVar = setInterval(function() {
			$.ajax({
				type: "get",
				url: "json/DoughNut2d.json",
				async: true,
				dataType: 'json',
				success: function(data) {
					$("#chart-container16").updateFusionCharts({
						dataSource: {
							"chart": {
								"caption": DoughNut2d.chart.caption,
								"subcaption": DoughNut2d.chart.subcaption,
								"captionOnTop": "1",
								"chartTopMargin": "0",
								"captionAlignment": "right",
								//"chartTopMargin": "5",
								"paletteColors": "#3aa095,#ffffff",
								"showBorder": "1",
								"use3DLighting": "1",
								"radius3D": "30",
								"showShadow": "1",
								"enableSmartLabels": "0",
								"startingAngle": "45",
								"showLabels": "0",
								"showPercentValues": "1",
								"pieRadius": "62",
								"labelDistance": "1000",
								"centerLabel": "$value",
								"defaultCenterLabel": data.data[0].value,
								"centerLabelBold": "1",
								"showTooltip": "1",
								"baseFontColor": "#ffffff",
								"bgColor": "438383,76BBB6",
								"bgratio": "10,90",
								"bgAlpha": "100,100",
								"baseFontColor": "#ffffff",
								"theme": "fint"
							},
							"data": [{
								"label": data.data[0].label,
								"value": data.data[0].value
							}, {
								"label": data.data[1].label,
								"value": data.data[1].value
							}]
						}
					});
				}
			});
		}, 4000);

	});
}

function CreateThermometer(id, Thermometer) {

	FusionCharts.ready(function() {
		var chart = new FusionCharts({
				type: 'thermometer',
				renderAt: id,
				id: Thermometer.mid,
				width: '100%',
				height: '100%',
				dataFormat: 'json',
				dataSource: {
					"chart": {
						"caption": Thermometer.chart.caption,
						"captionOnTop": "1",
						"chartTopMargin": "5",
						"chartBottomMargin": "5",
						"captionFontSize": "13",
						"chartLeftMargin": "0",
						"baseFontColor": "#ffffff",
						"thmBulbRadius": "6",
						//"captionFontSize":"8",
						"majorTMColor": "#ffffff",
						"lowerLimit": "0",
						"upperLimit": "100",
						"showGaugeBorder": "1",
						"gaugeBorderColor": "#008ee4",
						"decimals": "1",
						"bgColor": "438383,76BBB6",
						"bgratio": "10,90",
						"bgAlpha": "100,100",
						"showBorder": "1",
						"showShadow": "1",
						"ticksOnRight": "0",
						"thmFillColor": "#008ee4",
						"theme": "fint",
					},
					"value": Thermometer.value
				},
				"events": {
					'beforeRender': function(evt, args) {
						//在图形渲染之前
						init(evt);
					},
					"rendered": function(evtObj, argObj) {
						var intervalVar = setInterval(function() {
							var temp = parseInt(Math.floor(Math.random() * 100), 10);
							var strData = "&value=" + temp;
							FusionCharts.items[Thermometer.mid].feedData(strData);
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
			})
			.render();
	});
}

function CreateCylinder(id, Cylinder) {
	FusionCharts.ready(function() {
		var fusioncharts = new FusionCharts({
			type: 'cylinder',
			dataFormat: 'json',
			id: 'fuelMeter-5',
			renderAt: Cylinder.id,
			width: '100%',
			height: '100%',
			dataSource: {
				"chart": {
					"theme": "fint",
					"captionOnTop": "1",
					"chartTopMargin": "5",
					"captionFontSize": "13",
					//"chartLeftMargin": "8",
					"chartRightMargin": "20",
					"chartBottomMargin": "4",
					"caption": Cylinder.chart.caption,
					"lowerLimit": "0",
					"upperLimit": "100",
					//"lowerLimitDisplay": "0",
					//"upperLimitDisplay": "100",
					"showValue": "1",
					"decimals": "1",
					"baseFontColor": "#ffffff",
					"majorTMColor": "#ffffff",
					"bgColor": "438383,76BBB6",
					"bgratio": "10,90",
					"bgAlpha": "100,100",
					//"chartBottomMargin": "25",
					//"cylFillHoverColor": "#0099fd",
					//"cylFillHoverAlpha": "100",
					//"cylHeight": "290",
					//"cylOriginY": "325",
					"cylRadius": "6",
					"showBorder": "1",
					"showShadow": "1",
					"tickmarkDistance": "0",
					"ticksOnRight": "0"
				},
				"value": Cylinder.value
			},
			"events": {
				'beforeRender': function(evt, args) {
					//在图形渲染之前
					init(evt);
				},
				"rendered": function(evtObj, argObj) {
					setInterval(function() {
						var consVolume = parseInt(Math.floor(Math.random() * 100), 10)
						FusionCharts("fuelMeter-5").feedData("&value=" + consVolume);
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
$(function() {
	$("#equipment-small").hover(function() {
		$("#tree_2").stop().show(300);
	}, function() {
		$("#tree_2").stop().hide(300);
	});
	$('#tree_2').jstree({
		'plugins': ["wholerow", "checkbox", "types"],
		'core': {
			"themes": {
				"responsive": false
			},
			'data': [{
				"id": "1",
				"text": "设备制造商",
				"children": [{
					"id": "11",
					"text": "福建某集团",
					"state": {
						"selected": true
					}
				}, {
					"id": "12",
					"text": "天津某企业"
				}, {
					"id": "13",
					"text": "成都某企业",
					"state": {
						"opened": true
					},
					"children": [{
						"id": "131",
						"text": "成都市某某公司"
					}]
				}, {
					"id": "15",
					"text": "贵州某公司"
				}]
			}, {
				"id": "2",
				"text": "天津某公司",
				"state": {
					"opened": true
				},
				"children": [{
					"id": "21",
					"text": "深圳某企业"
				}]
			}]
		},
		"types": {
			"default": {
				"icon": "fa fa-folder icon-state-warning icon-lg"
			},
			"file": {
				"icon": "fa fa-file icon-state-warning icon-lg"
			}
		}
	});
	$('#tree_2').on("changed.jstree", function(e, data) {
		var i, j, r = [];
		for(i = 0, j = data.selected.length; i < j; i++) {
			if(data.instance.get_node(data.selected[i]).text !== 'initially selected') {
				r.push(data.instance.get_node(data.selected[i]).text);
			}
		}
		$('#equipmentval').val(r.join(', '));
	}).jstree();
})

function click(e) {
	if(document.all) {
		if(event.button == 2 || event.button == 3) {
			alert("欢迎光临寒舍，有什么需要帮忙的话，请与站长联系！谢谢您的合作！！！");
			oncontextmenu = 'return false';
		}
	}
	if(document.layers) {
		if(e.which == 3) {
			oncontextmenu = 'return false';
		}
	}
}
if(document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false;")
document.onkeydown = document.onkeyup = document.onkeypress = function() {
	if(window.event.keyCode == 123) {
		window.event.returnValue = false;
		return(false);
	}
}