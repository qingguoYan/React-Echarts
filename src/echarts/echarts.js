import React from 'react';
import { Card } from 'antd';
import ReactEcharts from 'echarts-for-react';

export default class Echarts extends React.Component{
	getOption=()=>{
		let option={
			  title:{
			        text:'牛逼',
			        x:'center'
			  },
		      tooltip:{
		        trigger:'axis',
		      },
		      xAxis:{
		        data:['周一','周二','周三','周四','周五','周六','周日']
		      },
		      yAxis:{
		        type:'value'
		      },
		      series:[
		        {
		          name:'OFO订单量',
		          type:'line',   //这块要定义type类型，柱形图是bar,饼图是pie
		          data:[1000,2000,1500,3000,2000,1200,800]
		        }
		      ]
		}
		return option;
	}
	render(){
		return(
			<Card>
			  <ReactEcharts option={this.getOption()} theme="Imooc" />
			</Card>    
			)
	}
}