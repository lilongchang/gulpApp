mui.init({
	pullRefresh: {
		container: '#refreshContainer',
		down: {
			callback: pulldownRefresh
		},
		up: {
			contentrefresh: '正在加载...',
			callback: pullupRefresh,
			contentnomore:'没有更多数据了'
		}
	}
});
/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
	setTimeout(function() {
		//处理逻辑业务
	
;		//下拉刷新结束
		mui('#refreshContainer').pullRefresh().endPulldownToRefresh(); //refresh completed
	}, 1500);
}
/**
 * 上拉加载具体业务实现
 */
function pullupRefresh() {
	setTimeout(function() {
		//处理逻辑业务
		
		
	
		//上拉加载结束
		mui('#refreshContainer').pullRefresh().endPullupToRefresh(); //endPullupToRefresh参数为true代表没有更多数据了。
		
	}, 1500);
}