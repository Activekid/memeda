<template>
	<view class="content">
		<view class="jump-over" @tap="launchFlag()" v-show="current !== 2">跳过</view>
		<swiper class="swiper" 
			:indicator-dots="indicatorDots" 
			:indicator-color="baise" 
			:indicator-active-color="lanse"
			:autoplay="autoplay" 
			:duration="duration"
			@change="change">
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../static/bg-01.png"></image></view>
					<view class="swiper-text">
						<view class="swiper-text-cn">每天锻炼一小时</view>
						<view class="swiper-text-us">Exercise one hour a day</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../static/bg-02.png"></image></view>
					<view class="swiper-text">
						<view class="swiper-text-cn">健康工作五十年</view>
						<view class="swiper-text-us">50 years of healthy work</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../static/bg-03.png"></image></view>
					<view class="swiper-text">
						<view class="swiper-text-cn">幸福生活一辈子</view>
						<view class="swiper-text-us">Happy life for a lifetime</view>
					</view>
					<view class="experience-now" @tap="launchFlag()" v-show="current === 2">立即体验</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: false,
				duration: 500,
				baise: 'rgba(255, 255, 255, .3)',
				lanse: '#918984',
				current: 0
			}
		},
		methods: {
			change: function(e) {
				this.current = e.detail.current
			},
			launchFlag: function() {
				/**
				 * 向本地存储中设置launchFlag的值，即启动标识；
				 */
				try {
					uni.setStorageSync('launchFlag', 'true')
					
					setTimeout(function(){
						uni.redirectTo({
							url: '/pages/login/login'
						})
					}, 100)
				} catch (e) {
					console.log(e)
				}
			}
		}
	}
</script>
<style>
	page,
	.content{
		width: 100%;
		height: 100%;
		background-size: 100% auto;
		padding: 0;
	}
	.swiper{
		width: 100%;
		height: 100%;
	}
	.swiper-item {
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
		position: relative;
	}
	.swiper-item-img {
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}
	.swiper-item-img image{
		width: 100%;
		height: 100%;
	}
	.swiper-item-text {
		padding-top: 40upx;
		width: 430upx;
		height: 130upx;
		margin: 0 auto;
	}
	.swiper-item-text image{
		width: 100%;
		height: 100%;
	}
	.swiper-text{
		width: 100%;
		position: absolute;
		bottom: 80upx;
	}
	.swiper-text view{
		width: 100%;
		text-align: center;
		color: #FFF;
	}
	.swiper-text-cn{
		font-size: 40upx;
	}
	.swiper-text-us{
		font-size: 28upx;
	}
	.jump-over{
		position: absolute;
		height: 60upx;
		line-height: 60upx;
		padding: 0 40upx;
		border-radius: 30upx;
		font-size: 32upx;
		right: 75upx;
		top: 75upx;
		color: #37393b;
		background: #918984;
		z-index: 999;
	}
	.experience-now{
		position: absolute;
		width: 200upx;
		height: 60upx;
		line-height: 60upx;
		padding:5upx 40upx;
		border-radius: 35upx;
		font-size: 32upx;
		left: 50%;
		margin-left: -140upx;
		bottom: 220upx;
		color: #37393b;
		background: #918984;
		z-index: 9999;
	}
</style>
