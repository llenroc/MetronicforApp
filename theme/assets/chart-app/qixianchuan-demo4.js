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

$.ajax({
	type: "get",
	url: "json/date.json",
	async: true,
	dataType: 'json',
	success: function(data) {
		var startdate = "2011-11-11";
		var enddate = "2011-11-11";
		startdate = data.startdate;
		enddate = data.enddate;
		//初始化日期控件	
		$('#date-range').daterangepicker({
			format: 'YYYY-MM-DD',
			startDate: startdate,
			endDate: enddate,
			locale: {
				applyLabel: '确定',
				cancelLabel: '取消',
				fromLabel: '从',
				toLabel: '至',
				weekLabel: '周',
				customRangeLabel: '日期范围',
				daysOfWeek: moment()._lang._weekdaysMin.slice(),
				monthNames: moment()._lang._monthsShort.slice(),
				firstDay: 0
			}
		}, function(start, end) {
			$('#date-range .date-title').html(start.format('YYYY-MM-DD') + ' 至 ' + end.format('YYYY-MM-DD'));
			$(':hidden[name=startdate]').val(start.format('YYYY-MM-DD'));
			$(':hidden[name=enddate]').val(end.format('YYYY-MM-DD'));
		});
	}
});

$(function() {
	$("#equipment1").hover(function() {
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
			'data': {
				'url': function(node) {
					return node.id === '#' ? './json/jstree_roots.json' : './json/jstree_children.json';
				},
				'data': function(node) {
					return {
						'id': node.id
					};
				}
			}
			//						'data': [{
			//								"id": "1",
			//								"text": "设备制造商",
			//								"children": [{
			//									"id": "11",
			//									"text": "福建某集团",
			//									"state": {
			//										"selected": true
			//									}
			//								}, {
			//									"id": "12",
			//									"text": "天津某企业"
			//								}, {
			//									"id": "13",
			//									"text": "成都某企业",
			//									"state": {
			//										"opened": true
			//									},
			//									"children": [{
			//										"id": "131",
			//										"text": "成都市某某公司"
			//									}]
			//								}, {
			//									"id": "15",
			//									"text": "贵州某公司"
			//								}]
			//							},
			//
			//							{
			//								"id": "2",
			//								"text": "天津某公司",
			//								"state": {
			//									"opened": true
			//								},
			//								"children": [{
			//									"id": "21",
			//									"text": "深圳某企业"
			//								}]
			//							}
			//						]
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