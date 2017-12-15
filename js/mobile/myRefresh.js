

			
			mui.init({
				pullRefresh: {
					container: '#scroll1',
					down: {
						callback: pulldownRefresh,
						auto: true
					},
					up: {
						contentrefresh: '正在加载...',
						callback: pullupRefresh
					}
				}
			});
			/**
			 * 下拉刷新具体业务实现
			 */
			function pulldownRefresh() {
				setTimeout(function() {
					alert('下拉');
					mui('#scroll1').pullRefresh().endPulldownToRefresh();
				},1000);
			}
			/**
			 * 上拉加载具体业务实现
			 */
			function pullupRefresh() {
				setTimeout(function() {
					alert('上拉----加载');
					mui('#scroll1').pullRefresh().endPulldownToRefresh();
					
				}, 1500);
			}
			
		
