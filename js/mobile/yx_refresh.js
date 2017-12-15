mui.init({
	pullRefresh: {
		container: '#refreshContainer',
		up: {
			contentrefresh: '正在加载...',
			callback: pullupRefresh,
			contentnomore:'没有更多数据了'
		}
	}
});

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