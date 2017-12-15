


	var common = {
			// 时间格式 date是起息日，i是第几期
			dateFormate : function(date,i){
				var dateTime;
				// 获取下个月的最后一天
				var arr = date.split("-");// 把获取的时间给截取
				dateTime=getLastDay(arr[0],arr[1],i);
				var dateArr = dateTime.split("-");
				// 判断当前日期是不是这个月的最后一天 
				if(isLastDay(date)==false){
					// 进来以后跟下个月的最后一天进行比较大小
					// 进行比较日期的大小
					
					if(parseInt(arr[2])<parseInt(dateArr[2])){
						if(dateArr[1] > 9){
							var endTime = dateArr[0]+"-"+dateArr[1]+"-"+arr[2];
							return endTime;	
						}else{
							var endTime = dateArr[0]+"-0"+dateArr[1]+"-"+arr[2];
							return endTime;	
						}
						
					};
				};
				
				
				dateTime=getLastDay(arr[0],arr[1],i);
				return dateTime;
				
			},
			
			/**
		     * ----------------------------------------
		     * @模块描述　选择还款方式
		     * @作者 weiyz
		     * @备注
		     * ----------------------------------------
		     */
			radiofun : function(){
				// 根据客户选择的还款方式进行计算
				// 获取还款方式
				// 单选按钮
				var value="";
				var radio = document.getElementsByName("repaymentMethod");
				for(var i=0;i<radio.length;i++){
					if(radio[i].checked==true){
						value=radio[i].value;
						return value;
					
					}
				} 
			},
			/**
		     * ----------------------------------------
		     * @模块描述　加载层
		     * @作者 燕娜
		     * @备注
		     * ----------------------------------------
		     */
			loadMsg : function(tipMsg){
				/*var index = layer.load(1, {
				    shade: [0.5,'#000'], //0.1透明度的白色背景
				    skin:"sLoading",
				    content:"<p class='s_bg'></p><div class='s_ctn'>"+tipMsg+"</div>"
				});
				return index;*/
			},
			loadMsg2 : function(tipMsg){
				var index = layer.load(1, {
				    shade: [0.5,'#000'], //0.1透明度的白色背景
				    skin:"sLoading",
				    content:"<p class='s_bg'></p><div class='s_ctn'>"+tipMsg+"</div>"
				});
				return index;
			},
			/**
			 * ----------------------------------------
			 * @模块描述 时间比较
			 * @作者 wangcy
			 * @备注 返回1 表示时间2 大于 时间1  返回0 表示时间2 等于 时间1  返回-1 表示时间2 小于 时间1 
			 * ----------------------------------------
			 */
			compareTime : function(firstTime,secondTime){
				var time1 = new Date(firstTime).getTime();				//时间1  
				var time2 = new Date(secondTime).getTime();				//时间2
				var s = time2-time1;
				if(s > 0){
					return 1;
				}
				if(s < 0){
					return -1;
				}
				return s;
			},
			
			/**
			 * ----------------------------------------
			 * @模块描述 计算两个日期相差的天数
			 * @作者 关福旺
			 * @备注  
			 * ----------------------------------------
			 */
			DateDiff : function(sDate1,  sDate2){ //sDate1和sDate2是YYYY-MM-DD格式    
		          var  aDate,  oDate1,  oDate2,  iDays
		          aDate  =  sDate1.split("-")
		          oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])//转换为12-18-2006格式    
		          aDate  =  sDate2.split("-")
		          oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])
		          iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24)//把相差的毫秒数转换为天数   
		          return  iDays + 1   
		      },
			
			/**
		     * ----------------------------------------
		     * @模块描述 计算总页数
		     * @param 每页显示多少条数据 （建议写成变量）
		     * @param 总共多少条数据
		     * @作者 魏颖妮
		     * @备注 用于分页参数总页数显示
		     * @调用方式 例如：common.getPageSum(10,32)
		     * ----------------------------------------
		     */
			getPageSum : function(pageSize, pageTotal){
				var pageSum = parseInt(pageTotal / pageSize);
				pageSum = pageTotal % pageSize == 0 ? pageSum : pageSum + 1;
				return pageSum;
			},
			
			/**
		      * ----------------------------------------
		      * @模块描述 js获取项目根路径
		      * @作者 魏颖妮
		      * @备注 如： http://localhost:8083/uimcardprj
		      * ----------------------------------------
		      */
			getRootPath : function(){
				 return $(".basePath").val();
			},
			/**
		      * ----------------------------------------
		      * @模块描述 将json格式字符串转换为json对象
		      * @作者 魏颖妮
		      * @备注 无
		      * ----------------------------------------
		      */
			formatJson: function(result){
			   var json;
			    if(typeof result === 'object'){
			        json = result;
			    }
			    else{
			        json = eval('(' + result + ')');
			    }
			    return json;
			 },
			 /**
			  * ----------------------------------------
			  * @模块描述 使用渲染时格式化时间
			  * @作者 魏颖妮
			  * @备注 当前方法调用在渲染中使用
			  * ----------------------------------------
			  */
			 dataFormat: function(){
			   $.views.converters("dateFormat", function(val){
				   
				   	if (val) {
				   		/*2015-12-03 weiyingni 修改*/
				   		val = val.replace(/-/g,"/");
				   		return new Date(val).Format("yyyy-MM-dd");
				   	}
				   	return "";
				   });
			 },  
			 /**
			  * ----------------------------------------
			  * @模块描述 使用渲染时金额格式化
			  * @作者 wangcy
			  * @备注 当前方法调用在渲染中使用
			  * ----------------------------------------
			  */
			 moneyFormat : function(){
				   $.views.converters("moneyFormat", function(val){
				   	if (val) {
				   		if(isNaN(val)){
				  	         return("0.00");
				  	     }else{
				  	    	 return(parseFloat(val).toFixed(2));
				  	     }
				   	}
				   	return "0.00";
				   });
			 },
			 /**
			  * ----------------------------------------
			  * @模块描述 使用渲染时利率格式化
			  * @作者 taohui
			  * @备注 当前方法调用在渲染中使用
			  * ----------------------------------------
			  */
			 rateFormat : function(){
				 $.views.converters("rateFormat", function(val){
					 if(val){
						 if(isNaN(val)){
							 return("0.0");
						 }else{
							 return(val.toFixed(1));
						 }
					 }
				 });
			 },
			 /**
			  * ----------------------------------------
			  * @模块描述 使用渲染时手机站出售状态格式化
			  * @作者 wangcy
			  * @备注 当前方法调用在渲染中使用
			  * ----------------------------------------
			  */
			 canSaleFormat : function(){
				   $.views.converters("canSaleFormat", function(val){
				   	if (val) {
				   		return val;
				   	}
				   		return 0;
				   });
			 },
			 /**
			  * ----------------------------------------
			  * @模块描述 检查请求是否正确的方法
			  * @作者 魏颖妮
			  * @备注 调用ajax请求时用于前台判断
			  * ----------------------------------------
			  */
			  checkPost : function(responseCode){
			   	if (!common.isEmpty(responseCode) && common.publicConst["SUCCESS_CODE"] == responseCode){
			   		return true;
			   	}
			   	return false;
			 },
			 /**
			  * ----------------------------------------
			  * @模块描述 标签页切换的公共方法
			  * @作者 魏颖妮
			  * @备注 
			  * ----------------------------------------
			  */
			 sTab : function(){
				 $.fn.sTab=function(options){
					var _opts={
						panel:".tabPanel",
						tabBd:".tabBd",
						eventType:"click",
						activeCls:"current"
					};
					var opts=$.extend({},_opts,options);
					return this.each(function(){
						var $panel=$(this).find(opts.panel);
						var _this=this;
						$panel.delegate("> *",opts.eventType,function(){
							$tabBd=$(_this).find(opts.tabBd);
							var index=$(this).index();
							$(this).addClass(opts.activeCls).siblings().removeClass(opts.activeCls);
							$tabBd.children().hide().eq(index).show();
						});
					});
				};
			 },
			 
			 validIsNull : function(){
				   $.views.converters("validIsNull", function(val) {
				   	if (val == "" || val== undefined || val == null) {
				   		return "";
				   	}
				   	else {
				   		val = val.replace(/-/g,"/");
				   		return new Date(val).Format("yyyy-MM-dd");
				   	}
				   	return val;
				   });
			 },
			 
			 /**
			 * ----------------------------------------
			 * @模块描述 过滤带有html标签的文本
			 * @作者 关福旺
			 * @备注 
			 * ----------------------------------------
			 */
			filterHtml : function(content){
				var content3 = content;
				if(!common.isEmpty(content)){
					var content1 = content.replace(/<\/?.+?>/g,""); 
					var content2 = content1.replace(/<[^>]+>/g,"");
					content3 = content2.replace(/&nbsp;/g,"");//dds为得到后的内容 
				}
				return content3;
			},
			 
			/**
			  * ----------------------------------------
			  * @模块描述 使用渲染时 过滤带有html标签的文本
			  * @作者 wangcy
			  * @备注 当前方法调用在渲染中使用
			  * ----------------------------------------
			  */
			 htmlFormat : function(){
				   $.views.converters("htmlFormat", function(val) {
				   	if (val) {
						var content1 = val.replace(/<\/?.+?>/g,""); 
						var content2 = content1.replace(/<[^>]+>/g,"");
						var content3 = content2.replace(/&nbsp;/g,"");//dds为得到后的内容
						if(content3.length>30){
							content3 = content3.substring(0,60);
							content3 = content3+"...";
				   		}
						return content3;
					}
				   	return "";
				   });
			 },
			 /**
			  * ----------------------------------------
			  * @模块描述 使用渲染时 标题长度处理
			  * @作者 wangcy
			  * @备注 当前方法调用在渲染中使用
			  * ----------------------------------------
			  */
			 lengthFormat : function(){
				   $.views.converters("lengthFormat", function(val) {
				   	if (val) {
				   		if(val.length>30){
				   			val = val.substring(0,30);
				   			val = val+"...";
				   		}
						return val;
					}
				   	return "";
				   });
			 },
			 /**
			 * ----------------------------------------
			 * @模块描述 判断是否为空
			 * @作者 魏颖妮
			 * @备注 
			 * ----------------------------------------
			 */
			isEmpty : function(obj) {
		  		var check = false;
		  		// 去除空格
		  		// obj = obj.replace(/\s/g, "");
		  		// 判断值是否为空
		  		if(!obj || obj == "" || obj == "undefined" || obj == "NaN"){
		  			return true;
		  		}
		  		return check;
		  	},
		  	/**
			 * ----------------------------------------
			 * @模块描述 开始时间-结束时间
			 * @作者 燕娜
			 * @备注 begin:开始时间文本框对象，endTime：结束时间文本框对象
			 * ----------------------------------------
			 */
		  	beginEndDate : function(begin, endTime){
		  		//时间控件
				laydate.skin('dahong');//切换皮肤，请查看skins下面皮肤库
				var start = {
						elem: begin,
						format: 'YYYY-MM-DD',
						start: laydate.now(),
						//max: laydate.now(),
						istime: true,
						istoday: false,
						choose: function(datas){
							
							 end.min = datas; //开始日选好后，重置结束日的最小日期
						}
					};
				laydate(start);
				var end = {
					elem: endTime,
					format: 'YYYY-MM-DD',
					max: '2099-06-16',
					istime: true,
					istoday: false,
					choose: function(datas){
						start.max = datas; //结束日选好后，充值开始日的最大日期
					}
				};
				laydate(end);
				
		  	},
		  	/**
			 * ----------------------------------------
			 * @模块描述 保留小数点 后几位小数
			 * @作者 wangcy
			 * @备注 num1 原始数据   num2 保留的位数
			 * ----------------------------------------
			 */
		  	fixedVal : function(Num1,Num2){
		  	     if(isNaN(Num1)||isNaN(Num2)){
		  	         return("0.00");
		  	     }else{
		  	    	 return(Num1.toFixed(Num2));
		  	     }
		  	},
		  	/**
		       * ----------------------------------------
		       * @模块描述 获取URL中参数 例如：..inde.jsp?name=aa
		       * @作者 魏颖妮
		       * @备注 参数name为url中参数名 返回结果为aa
		       * ----------------------------------------
		       */
	  	   urlGet : function(name){
	  	       var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	  	       var r = window.location.search.substr(1).match(reg);
	  	       if(r!=null)return  unescape(r[2]); return null;
	  	   },
		  	/**
		     * ----------------------------------------
		     * @模块描述 自定义常量值
		     * @作者 魏颖妮
		     * @备注 用于js中高频率出现的常量值
		     * @调用方式 例如：common.publicConst["ENABLED"]
		     * ----------------------------------------
		     */
		  	publicConst : {
	  			/** 状态：启用 */
	  			"ENABLED" : "0",
	  			/** 状态：停用 */
	  			"DISABLE" : "1",
	  			/** 响应信息标识：info */
	  			"RESPONSE_INFO" : "info",
	  			/** 响应状态标识：responseCode */
	  			"RESPONSE_CODE" : "responseCode",
	  			/** 成功 */
	  			"SUCCESS_CODE" : "1",
	  			/** 失败 */
	  			"ERROR_CODE" : "0",
	  			/** 其他 */
	  			"OTHER_CODE" : "2",
	  			/** 直投投资列表pagesize */
	  			"EXPINVEST_PAGESIZE" : 5,
	  			/** 投资列表pagesize */
	  			"INVEST_PAGESIZE" : 10,
	  			/** 未认证 0 */
	  			"NOT_CERTIFIED" : 0,
	  			/** 已认证 1 */
	  			"CERTIFIED" : 1,
	  			/** 充值失败 -可换绑银行卡 4 */
	  			"RECHARGE_FAILED_YES_ERROR" : 4,
	  			/** 充值失败 -不可换绑银行卡  5 */
	  			"RECHARGE_FAILED_NO_ERROR" : 5,
	  			/** 充值失败 --6 */
	  			"RECHARGE_FAILED_TIPS6" : 6,
	  			/** 充值失败 --7 */
	  			"RECHARGE_FAILED_TIPS7" : 7,
	  			/** 充值失败 --8 */
	  			"RECHARGE_FAILED_TIPS8" : 8
	  		},
	  		/**
	  		 * ----------------------------------------
	  		 * @模块描述 定义全局ajax请求 session过期时跳转首页
	  		 * @作者 chuanqi
	  		 * @备注 
	  		 * ----------------------------------------
	  		 */
	  		sessionTimeOut : function(){
	  			$.ajaxSetup({ 
	  				contentType : "application/x-www-form-urlencoded;charset=utf-8", 
	  				complete : function(XMLHttpRequest, textStatus) { 
	  				var sessionstatus = XMLHttpRequest.getResponseHeader("sessionstatus"); // 通过XMLHttpRequest取得响应头，sessionstatus， 
	  				if (sessionstatus == "timeout") { 
	  				// 如果超时就处理 ，指定要跳转的页面 
	  					window.location.href = common.getRootPath()+"/account/login";

	  			       } 
	  			     } 
	  				});
	  		},
	  		
	  		 /**
	  		  * ----------------------------------------
	  		  * @模块描述 loading 
	  		  * @作者 css
	  		  * @备注 
	  		  * ----------------------------------------
	  		  */
	  		  loadingTip:function(msg,option,popBox_opt){
	  			var _opt={
	  				type:2,
	  				color:"red"
	  			};
	  			var opt=$.extend({},_opt,option);
	  			var L_obj={
	  				loadingBox:null,
	  				opt:opt,
	  				close:function(){
	  					this.loadingBox.close();
	  				}
	  			};
	  			var $loadingBody=$('<div>',{"class":'s-loadingBox'});
	  			switch(L_obj.opt.type){
	  				case 1:
	  					var $loadingCircle=$('<div>',{"class":'lodingCircle'});
	  					$loadingBody.append($loadingCircle)
	  					.addClass("loadingBox_A");
	  					break;
	  				case 2:
	  					var $loadingCircle=$('<div>',{"class":'lodingCircle'});
	  					var $tipWords=$('<div>',{"class":'tipWords',text:msg});
	  					$loadingBody.append($loadingCircle);
	  					$loadingBody.append($tipWords)
	  					.addClass("loadingBox_B");
	  					break;
	  				default:
	  					break;
	  			}
	  			
	  			$loadingBody.css({"display":"none"});
				$("body").append($loadingBody);
				$loadingCircle.shCircleLoader({color: L_obj.opt.color});
				var popBoxOpt={
						hd:false,
						btn:false,
						width:"100%",
						zIndex:20606,
						maskClose:false,
						skinCls:"s-LoadingA",
						content:$loadingBody
				};
				$.extend(popBoxOpt,popBox_opt);
				var popbox= sPopbox.win(popBoxOpt);
				L_obj.loadingBox=popbox;
	  			return L_obj;
	  		},
	  		fmtFyRespCode:function(resp_code) {
	  			var info ;
	  			if("0000" == resp_code){
	  				info = "操作成功";
	  				
	  			}else if("2105"== resp_code){
	  				info = "查询密码错误";
	  				
	  			}else if("2106"== resp_code){
	  				info = "支付密码错误";
	  				
	  			}else if("2107"== resp_code){
	  				info = "查询密码错误次数超限";
	  				
	  			}else if("2108"== resp_code){
	  				info = "支付密码错误次数超限";
	  				
	  			}else if("3012"== resp_code || "3013"== resp_code|| "3014"== resp_code|| "3015"== resp_code|| "3016"== resp_code || "100017"== resp_code
	  						|| "3017"== resp_code|| "3018"== resp_code|| "3018"== resp_code|| "3023"== resp_code|| "3020"== resp_code|| "3021"== resp_code){
	  				info = "余额不足";
	  				
	  			}else if("3022"== resp_code){
	  				info = "交易金额不足以支付手续费";
	  				
	  			}else if("3024"== resp_code){
	  				info = "交易金额太大";
	  				
	  			}else if("5002"== resp_code){
	  				info = "验签失败";
	  				
	  			}else if("5138"== resp_code || "5345"== resp_code){
	  				
	  				info = "请求失败";
	  			}else if("5019"== resp_code){
	  				
	  				info = "数据校验失败";
	  			}else if("5110"== resp_code){
	  				
	  				info = "用户名或密码错误";
	  				
	  			}else{
	  				info = "获得数据失败，请联系客服。";
	  			}
	  			
	  			return info;
	  		},
	  		//充值弹框
	  		showRechargeDialog:function() {
	  			 var layer1=layer.open({
	  				type: 1,
	  				title:'<p class="bLine"><s class="fs14">充值</s></p>',
	  				btn: false,
	  				area:['640px','450px'],
	  				skin: 'skin_simple skin_simple_EX1',
	  				content:$("#rechargebox")
	  			});
	  			  $("#czInput").val("");
	  			  $("#czInputKj").val("");
	  			
	  		},

	  		//提现弹框
	  		showCaseDialog : function (){
	  
	  			 var layer1=layer.open({
	  				type: 1,
	  				title:'<p class="bLine"><s class="fs14">提现</s></p>',
	  				btn: false,
	  				area:['640px','340px'],
	  				skin: 'skin_simple skin_simple_EX1',
	  				content:$("#cashbox")
	  				
	  			 });
	  			$("#txInput").val("");
	  			
	  		}
	};
  	
	 /**
	  * ----------------------------------------
	  * @模块描述 对Date的扩展，将Date转化为指定格式的String
	  * @作者 魏颖妮
	  * @备注 详情百度 "js 时间格式化"
	  * ----------------------------------------
	  */
	 Date.prototype.Format = function (fmt) { //author: meizz 
	     var o = {
	             "M+": this.getMonth() + 1, //月份 
	             "d+": this.getDate(), //日 
	             "h+": this.getHours(), //小时 
	             "m+": this.getMinutes(), //分 
	             "s+": this.getSeconds(), //秒 
	             "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
	             "S": this.getMilliseconds() //毫秒 
	         };
	         if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	         for (var k in o)
	         if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	         return fmt;
	 };
	 
	$(function(){
		common.sessionTimeOut();
		
	});
	
	