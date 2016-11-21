$(function() {
	$("#equipment").hover(function() {
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

$(function() {
	var table = $('#sample_1');
	var oTable = table.dataTable({
		columnDefs: [{
			orderable: false, //禁用排序
			targets: 6 //指定的列
		}],
		"language": {
			"processing": "玩命加载中...",
			"lengthMenu": "显示 _MENU_ 项结果",
			"zeroRecords": "没有匹配结果",
			"info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
			"infoEmpty": "显示第 0 至 0 项结果，共 0 项",
			"infoFiltered": "(由 _MAX_ 项结果过滤)",
			"infoPostFix": "",
			"search": "搜索:",
			"url": "",
			"paginate": {
				"first": "首页",
				"previous": "上页",
				"next": "下页",
				"last": "末页"
			},
			"aria": {
				"sortAscending": ": 升序排序",
				"sortDescending": ": 降序排序"
			},
			"emptyTable": "无数据"
		},
		buttons: [{
			extend: 'print',
			className: 'btn dark btn-outline',
			text: '打印'
		}, {
			extend: 'copy',
			className: 'btn red btn-outline',
			text: '拷贝'
		}, {
			extend: 'pdf',
			className: 'btn green btn-outline'
		}, {
			extend: 'excel',
			className: 'btn yellow btn-outline '
		}, {
			extend: 'csv',
			className: 'btn purple btn-outline '
		}, {
			extend: 'colvis',
			className: 'btn dark btn-outline',
			//text: 'Columns'
			text: '列显示'
		}],
		responsive: true,
		"order": [
			[0, 'asc']
		],
		"lengthMenu": [
			[5, 10, 15, 20, -1],
			[5, 10, 15, 20, "All"] // change per page values here
		],
		"pageLength": 10,
		"dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable
	});
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