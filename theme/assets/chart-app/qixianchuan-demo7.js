$(function() {
	var table = $('#sample_1');
	var oTable = table.dataTable({
		columnDefs: [{
			orderable: false, //禁用排序
			targets: 4 //指定的列
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

function _del(obj, id) {
	layer.confirm('确认要删除吗？', function(index) {
		$(obj).parents("tr").remove();
		layer.msg('已删除!', {
			icon: 1,
			time: 1000
		});
	});
}

function _edit(title, id) {
	layer.open({
		type: 1,
		fix: false, //不固定
		maxmin: true,
		shade: 0.4,
		title: title,
		content: $('#form'),
		btn: ['修改', '取消'],
		yes: function(index, layero) {
			//按钮【按钮一】的回调
			layer.close(index);
		},
		btn2: function(index, layero) {
			//按钮【按钮二】的回调
		},
		cancel: function() {
			//右上角关闭回调
		}
	});
}
$(function() {
	$("#addItem").click(function() {
		layer.open({
			type: 1,
			title: '新增常见问题',
			content: $('#form'),
			maxmin: true,
			anim: 1,
			btn: ['新增', '取消'],
			yes: function(index, layero) {
				//按钮【按钮一】的回调
				layer.close(index);
			},
			btn2: function(index, layero) {
				//按钮【按钮二】的回调
			},
			cancel: function() {
				//右上角关闭回调
			}
		});
	});
	//					//官网欢迎页
	//					layer.open({
	//						type: 2,
	//						title: 'layer弹层组件官网',
	//						fix: false,
	//						maxmin: true,
	//						shadeClose: true,
	//						area: ['1100px', '600px'],
	//						content: 'http://sentsin.com/jquery/layer/?form=local',
	//						end: function() {
	//							layer.tips('Hi', '#about', {
	//								tips: 1
	//							})
	//						}
	//					});
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