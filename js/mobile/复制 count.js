window.onload = function () {
	$("#list").on('click','li',function(event){
		if (event.target.nodeName.toLocaleLowerCase() == 'li') {
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
		}
   });

	var syChart = echarts.init(document.getElementById('sychart'));
	var bjChart = echarts.init(document.getElementById('bjchart'));
	var lxChart = echarts.init(document.getElementById('lxchart'));
	
			var month = new Date().getMonth();
			var a = month + 1;
			var b = month;
			var c = month - 1;
			var d = month - 2;
			var e = month - 3;
			var f = month - 4;
			a = month + 1;
			if (a == 1) {
				b = 12;
				c = 11;
				d = 10;
				e = 9;
				f = 8;
			}
			if (b == 1) {
				c = 12;
				d = 11;
				e = 10;
				f = 9;
			}
			if (c == 1) {
				d = 12;
				e = 11;
				f = 10;
			}
			if (d == 1) {
				e = 12;
				f = 11;
			}
			if (e == 1) {
				f = 12;
			}

			// 指定图表的配置项和数据
			syOption = {
				title: {
					show: true,
					text: '近六个月收益走势',
					textStyle: {
						color: "#fff",
						fontSize: '0.15rem'
					},
					top: '15%',
					left: '28%',
//	            	textAlign: 'center',

				},
	   			textStyle : {
	   				color: "#fff",
	   				fontSize: '0.14rem'
	   			},
				tooltip : {
					trigger : 'axis'
				},
				grid : {
					show : false,
					left : '2%',
					top : '30%',
					containLabel : true
				},
				xAxis : [ {
					type : 'category',
					boundaryGap : false,
					data : [ f + '月', e + '月', d + '月', c + '月', b + '月', a + '月' ],
					axisLine : {
						show : true,
						onZero : false,
						lineStyle : {
							color : '#ddd',
							width : 2,
							type : 'solid',
							opacity : 1
						}
					},
					axisLabel : {
						show : true,
						textStyle : {
							color : '#aaa',
							fontStyle : '',
							fontWeight : '',
							fontFamily : '',
							fontSize : '16'
						},
						margin : 20
					},
					splitLine : {
						show : true
					}
				} ],
				yAxis : [ {
					type : 'value',
					axisLine : {
						show : true,
						lineStyle : {
							color : '#ddd',
							width : 2,
							type : 'solid',
							opacity : 1
						}
					},
					axisTick : {
						show : true,
						lineStyle : {
							color : '#ddd',
							width : 1,
							type : 'solid',
							opacity : 1
						}
					},
					axisLabel : {
						show : false
					},
					splitLine : {
						show : false
					},
					splitArea : {
						show : false
					}
				} ],
				series : [ {
					name : '收益走势',
					type : 'line',
					smooth : false,
					sampling : 'average',
					stack : '总量',
					label : {
						normal : {
							show : true,
							position : 'top'
						}
					},
					itemStyle : {
						normal : {
							color : 'rgb(0, 143, 255)',
						}
					},
					areaStyle : {
						normal : {
							color : new echarts.graphic.LinearGradient(0, 0, 0,
									1, [ {
										offset : 0.5,
										color : 'rgb(60, 169, 255)'
									}, {
										offset : 1,
										color : 'rgb(250, 253, 255)'
									} ])
						}
					},
					data : [ 10,
							20,
							30,
							30,
							10,
							90 ],
					silent : false,
					animation : true,
					animationDuration : 2000
				} ]
			};

			// if (parseFloat($('#monthInterest1').val()) == 0
			// 		&& parseFloat($('#monthInterest2').val()) == 0
			// 		&& parseFloat($('#monthInterest3').val()) == 0
			// 		&& parseFloat($('#monthInterest4').val()) == 0
			// 		&& parseFloat($('#monthInterest5').val()) == 0
			// 		&& parseFloat($('#monthInterest6').val()) == 0) {
			// 	$.extend(true, syOption, {
			// 		yAxis : [ {
			// 			min : -1,
			// 			max : 3
			// 		} ],
			// 		series : [ {
			// 			areaStyle : {
			// 				normal : {
			// 					opacity : 0
			// 				}
			// 			}
			// 		} ]
			// 	});
			// }

			// 使用刚指定的配置项和数据显示折线图。
			syChart.setOption(syOption);
		

				//本金对比
			bjOption = {
			    tooltip: {
			        trigger: 'none',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        orient: 'horizontal',
			        x: 'center',
			        y:'bottom',
			        data:['待收本金','已收本金'],
			        textStyle: {
			            fontSize:12
			        },
			        itemWidth:8,
			        itemHeight:8
			    },
			     color: ['#ff5400','#ffae00'],
			    series: [
			        {
			            name:'访问来源',
			            type:'pie',
			            radius: ['40%', '70%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: true,
			                    position: 'inside',
			                    formatter: '{d}%',
			                    textStyle: {
			                        fontSize: '6',
			                    }
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '10',
			                    },
			                    
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false,
			                    
			                }
			            },
			            data:[
			                {value:335, name:'待收本金'},
			                {value:310, name:'已收本金'},
			            ]
			        }
			    ]
			};
			bjChart.setOption(bjOption);
			
			
			//利息对比
			lxOption = {
			    tooltip: {
			        trigger: 'none',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        orient: 'horizontal',
			        x: 'center',
			        y:'bottom',
			        data:['待收利息','已收利息'],
			        textStyle: {
			            fontSize:12
			        },
			        itemWidth:8,
			        itemHeight:8
			    },
			     color: ['#007eff','#00ccff'],
			    series: [
			        {
			            name:'访问来源',
			            type:'pie',
			            radius: ['40%', '70%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: true,
			                    position: 'inside',
			                    formatter: '{d}%',
			                    textStyle: {
			                        fontSize: '6',
			                    }
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '10',
			                    },
			                    
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false,
			                    
			                }
			            },
			            data:[
			                {value:335, name:'待收利息'},
			                {value:310, name:'已收利息'},
			            ]
			        }
			    ]
			};
			lxChart.setOption(lxOption);
			
}
