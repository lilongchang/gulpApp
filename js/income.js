	var income = {
			// 验证项目金额
			verificationAmount:function(money){
				// 一百的倍数   正则表达式
				var r = /^[1-9]\d*00$/;
				return r.test(money);
			}
	};
	
	
	$(function(){
		laydate.skin('dahong');//切换皮肤，请查看skins下面皮肤库
		var start = {
				elem: '#startDate',
				format: 'YYYY-MM-DD',
				istime: true,
				istoday: false
				
			};
			laydate(start);
			
			// 数字格式初始化（保留两位小数）
			common.moneyFormat();
			// 日期格式初始化
			common.dataFormat();
			
		// 加载
		$("#butt").click(function(){
			var duetimeType = $("input[name='duetimeType']:checked").val();//期数类型
			// 获取金额
			var amount = $("#money").val();
			// 获取期数
			var persiods = $("#qishu").val();
			// 获取起息日
			var beginTime = $("#startDate").val();
			// 获取年化利率
			var rate = $("#interest").val();
			// 获取还款方式
			var payType = common.radiofun();    // a 值是1 2 3     1是等额本息还款方式    2是等额本金   3 月付息   到期还本
			// 不能超过两位小数的正则表达式
			var re2 = /^\d+(?:\.\d{1,2})?$/;
			// 不能超过一位小数的正则表达式
			var re1 = /^\d+(?:\.\d{1})?$/;
			// 正整数正则表达式
			var  integer = /^[0-9]*[1-9][0-9]*$/;
			
			
			
			// 年华收益率如果为整数，后面多加两个0
			if(integer.test(rate)){
				$("#interest").val(rate+=".00");
			}

			if(amount == ""){
				layer.alert("项目金额不能为空",{icon: 2, title:'操作提示'});
				return false;
			}else if(amount < 1 || amount >= 10000000){
				layer.alert("项目金额不能小于1并且不能大于1千万！",{icon: 2, title:'操作提示'});
				return false;
			}else if(!re2.test(amount)){
				layer.alert("项目金额小数位不能超过两位",{icon: 2, title:'操作提示'});
				return false;
			}else if(persiods == ""){
				layer.alert("项目期数不能为空",{icon: 2, title:'操作提示'});
				return false;
			}else if(persiods<1 || persiods>50){
				layer.alert("项目期数必须为1-50期之间",{icon: 2, title:'操作提示'});
				return false;
			}else if(beginTime == ""){
				layer.alert("起息日不能为空",{icon: 2, title:'操作提示'});
				return false;
			}else if(rate == ""){
				layer.alert("预期年化收益率不能为空",{icon: 2, title:'操作提示'});
				return false;
			}else if(rate<1 || rate>50){
				layer.alert("预期年化收益率必须为1-50之间",{icon: 2, title:'操作提示'});
				return false;
			}else if(!re2.test(rate)){
				layer.alert("预期年化收益率小数位不能超过两位",{icon: 2, title:'操作提示'});
				return false;
			}else {
				var param={"payType":payType,"beginTime":beginTime,"persiods":persiods,"amount":amount,"rate":rate,"duetimeType":duetimeType,"stagingServicesRate":0};
				$.post(common.getRootPath()+"/income/calculator",param,function(data){
					var dataObj=eval("("+data+")");
					// 渲染数据(由于其返回值不一样，所以要做一下判断)
					var html = $("#paymentDetailTmpl").render(dataObj.data);
					// 利息收益总额
					if(integer.test(dataObj.payInfos.interestTotal)){
						$("#grossInter").val(dataObj.payInfos.interestTotal+=".00");
					}else if(re1.test(dataObj.payInfos.interestTotal)){
						$("#grossInter").val(dataObj.payInfos.interestTotal+="0");
					}else{
						$("#grossInter").val(dataObj.payInfos.interestTotal);
					}
					// 本息总额
					if(integer.test(dataObj.payInfos.controlTotal)){
						$("#countGross").val(dataObj.payInfos.controlTotal+=".00");
					}else if(re1.test(dataObj.payInfos.controlTotal)){
						$("#countGross").val(dataObj.payInfos.controlTotal+="0");
					}else{
						$("#countGross").val(dataObj.payInfos.controlTotal);
					}
					// 拼接表格
					$("#repaymentDetails").html(html);
				});
			}
		});
	});
	
	/**
	 * *******************************************
	 * 功能说明：重置按钮
	 * 创建日期：2016-1-3
	 * 创建人：乔春峰
	 * *******************************************
	 */
	function empty(){
		$("#money").val("");		//清空项目金额
		$("#qishu").val("");		//清空项目期数
		$("#startDate").val("");		//清空起息日
		$("#interest").val("");		//清空年化收益率
		$("#grossInter").val("");		//清空利息收益总额
		$("#countGross").val("")		//清空本息总额
		$("#repaymentDetails").html("<tr><td class='t-center fs14 color_B50' colspan='6'>暂无数据</td></tr>");		//清空计算出来的数据
	}

	//期数类型改变事件
	function typeChange(){
		//期数类型
		var duetimeType = $("input[name='duetimeType']:checked").val();
		//如果期数类型选择周还款方式默认选择等额本息
		if(duetimeType == 2){
			$("#b_equ_x").prop("checked","checked");
			$("#x_back_per_m").removeAttr("checked");
			$("#b_equ_x").attr("disabled","disabled");
			$("#x_back_per_m").attr("disabled","disabled");
		}else{
			$("#b_equ_x").removeAttr("disabled");
			$("#x_back_per_m").removeAttr("disabled");
		}
	}