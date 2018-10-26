'strict mode'

	function setCustomerBarOption(){
		var json = document.getElementById("diseases").innerHTML;
		json = JSON.parse(json);
		json = json.diseases;

		var option = {
		    xAxis: {
		        type: 'category',
		        data: [],
		        axisLabel: {
	                    interval: 0,
	                    rotate: 35,
	                    //倾斜度 -90 至 90 默认为0  
	                    margin: 2,
	                    textStyle: {
	                        fontWeight: "bolder",
	                        color: "#000000"
	                    }
	                },
		    },
		    yAxis: {
		        type: 'value',
		        max:100
		    },
		    tooltip: {
		    	trigger: 'axis',
				formatter:function(params){
					return params[0].name+":"+params[0].data+"<br>";
				}
		    },
		    series: [{
		        data: [],//[90, 20, 15, 80, 70, 11, 13, 20],
		        type: 'bar',
		        itemStyle:{
		        	color:"#FF6A6A"//"#B4EEB4"
		        }
		    }]
		};
		console.log(parseFloat(parseFloat(json[0].value)*100))
		for(let i=0;i<json.length;i++){
			console.log(i);
			option.xAxis.data[i]=json[i].name;
			option.series[0].data[i]=parseFloat(json[i].value)*parseFloat(100);
		}
		return option;
	}

	function setCustomerPieOption(disasterName, rate){
		var option = {
		    title : {
		        text: '',
		        subtext: '',
		        x:'center',
		        textStyle: {
            		fontSize: 18
        		}
		    },
		    // tooltip : {
		    //     trigger: 'item',
		    //     formatter: "{a} <br/>{b} : {c} ({d}%)"
		    // },
		    // legend: {
		    //     orient: 'vertical',
		    //     left: 'left',
		    //     data: ['data1','邮件营销','联盟广告','视频广告','搜索引擎']
		    // },
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius : '65%',
		            center: ['50%', '60%'],
		            data:[
		            	{
		            		value:20, 
		            		name:name,
		            		itemStyle: {
							    // 设置扇形的颜色
							    color: '#ffffff',
							    
							}
		            	},
		            	{
		            		value:20, 
		            		name:name,
		            		itemStyle: {
							    // 设置扇形的颜色
							    color: '#ffffff',
							    
							}
		            	},
		            	{
		            		value:20, 
		            		name:name,
		            		itemStyle: {
							    // 设置扇形的颜色
							    color: '#ffffff',
							    
							}
		            	},
		            	{
		            		value:20, 
		            		name:name,
		            		itemStyle: {
							    // 设置扇形的颜色
							    color: '#ffffff',
							    
							}
		            	},
		                {
		                	value:20, 
		                	name:'b',
		                	itemStyle: {
							    // 设置扇形的颜色
							    color: '#ffffff',
							    
							}
		                },
		            ],
		             label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
	            	},
		            itemStyle: {
					    // 阴影的大小
					    shadowBlur: 50,
					    // 阴影水平方向上的偏移
					    shadowOffsetX: 0,
					    // 阴影垂直方向上的偏移
					    shadowOffsetY: 0,
					    // 阴影颜色
					    shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
		        }
		    ]
		};

		var tmp = parseInt(rate/20);
		option.title.text=disasterName;
		for(let i=0;i<tmp;i++)
			option.series[0].data[i].itemStyle.color='#c23531';
		return option;
	}


	function next(){
		var href = window.location.href;
		var loc = href.lastIndexOf('/');
		var front = href.slice(0,loc);
		var fileNum = href.slice(loc+1);
		console.log(fileNum);	
		if(fileNum === 'show')
			href = href+'/'+'1';
		else 
			href = front+'/'+(parseInt(fileNum)+1);
		location.href=href;
	}

	function pre(){
		var href = window.location.href;
		var loc = href.lastIndexOf('/');
		var front = href.slice(0,loc);
		var fileNum = href.slice(loc+1);
		console.log(fileNum);	
		if(fileNum != 'show' && fileNum !='0'){
			href = front+'/'+(parseInt(fileNum)-1);
			location.href=href;
		}
	}
 	function swap_tab(n){ //鼠标触发事件
 		for(var i=1;i<4;i++){
  			var curC=document.getElementById("sd"+i);
  			var curB=document.getElementById("title"+i);
  			//var mores = document.getElementById("j"+i);   
 			 if(n==i){
   				curC.style.display="block";

   				curB.className="sn1 nav-li";
   				//mores.style.display = "block";
  			}
  			else{
   				curC.style.display="none";
   				curB.className="sn2 nav-li";
   				//mores.style.display = "none";   
  			}
 		}
	}

	function buildPieCharts(){
		var json = document.getElementById("diseases").innerHTML;
		json = JSON.parse(json);
		json = json.diseases;
		var pie1 =  echarts.init(document.getElementById('pie1'));
		pie1.setOption(setCustomerPieOption(json[0].name,100*parseFloat(json[0].value)));
		var pie2 =  echarts.init(document.getElementById('pie2'));
		pie2.setOption(setCustomerPieOption(json[1].name,100*parseFloat(json[1].value)));
		var pie3 =  echarts.init(document.getElementById('pie3'));
		pie3.setOption(setCustomerPieOption(json[2].name,100*parseFloat(json[2].value)));
		var pie4 =  echarts.init(document.getElementById('pie4'));
		pie4.setOption(setCustomerPieOption(json[3].name,100*parseFloat(json[3].value)));
		var pie5 =  echarts.init(document.getElementById('pie5'));
		pie5.setOption(setCustomerPieOption(json[4].name,100*parseFloat(json[4].value)));
		var pie6 =  echarts.init(document.getElementById('pie6'));
		pie6.setOption(setCustomerPieOption(json[5].name,100*parseFloat(json[5].value)));
		var pie7 =  echarts.init(document.getElementById('pie7'));
		pie7.setOption(setCustomerPieOption(json[6].name,100*parseFloat(json[6].value)));
		var pie8 =  echarts.init(document.getElementById('pie8'));
		pie8.setOption(setCustomerPieOption(json[7].name,100*parseFloat(json[7].value)));
	}
	function swap_tab_1(n){ //鼠标触发事件
 		for(var i=1;i<4;i++){
  			var curC=document.getElementById("cn"+i);
  			var curB=document.getElementById("cnt"+i);
  			//var mores = document.getElementById("j"+i);   
  			if(n==i){
   				curC.style.display="block";
   				curB.className="sn1 nav-li-2";
   				//mores.style.display = "block";
   				if(i==2){
   					buildPieCharts();
   				}
  			}
 		 	else{
   				curC.style.display="none";
   				curB.className="sn2 nav-li-2";
   				//mores.style.display = "none";   
  			}
 		}
	}
	function spread(element,divId){
		var div = document.getElementById(divId);
		var val = element.value;
		console.log(val);
		if(val==='1'){
			var tmph = div.parentNode.offsetHeight*0.2;
			console.log(tmph);
			div.style.height = 'auto';
			var realh = div.offsetHeight;
			if(realh>tmph){
				element.innerHTML = '现病史 &raquo;';
				element.value = '2';
			}
			else{
				div.style.height = '20%';
			}
		}
		else{
			div.style.height = '20%';
			element.innerHTML = '现病史 &laquo;';
			element.value = '1';
		}
	}
