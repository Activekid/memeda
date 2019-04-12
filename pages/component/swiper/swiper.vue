<template>
	<view>
		<!--<page-head :title="title"></page-head>-->
		<!-- #ifdef H5 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<view class="search">
						<uni-icon size="30" type="search" color="#fff" @click="goToSearch"></uni-icon>
					</view>
					<!--<cover-view class="search">
						<navigator url="/pages/component/scroll-view/scroll-view" animation-type="pop-in" animation-duration="300">
							<button type="default" @click="goToSearch">跳转到新页面</button>
						</navigator>
					</cover-view>-->
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :vertical="vertical" :circular="circular" @change="change">
						<swiper-item item-id="A">
							<view class="swiper-item">
								<video class="myVideo" ref="myVideoA" :src="srcA" :autoplay="autoplayA" show-center-play-btn="true" direction="-90" @fullscreenchange="fullscreenchange" controls>
								</video>
								<cover-view class="recomender">
									<text class="name">#姚老师</text>
									<text>推荐</text>
								</cover-view>
							</view>
						</swiper-item>
						<swiper-item item-id="B">
							<view class="swiper-item">
								<video class="myVideo" ref="myVideoB" :src="srcB" :autoplay="autoplayB" show-center-play-btn="true" direction="-90" @fullscreenchange="fullscreenchange" controls>
								</video>
								<cover-view class="recomender">
									<text class="name">{{tname}}</text>
									<text>推荐</text>
								</cover-view>
							</view>
						</swiper-item>
						<swiper-item item-id="C">
							<view class="swiper-item">
								<video class="myVideo" ref="myVideoC" :src="srcC" :autoplay="autoplayC" show-center-play-btn="true" direction="-90" @fullscreenchange="fullscreenchange" controls>
								</video>
								<cover-view class="recomender">
									<text class="name">#王老师</text>
									<text>推荐</text>
								</cover-view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS || MP-WEIXIN -->
		<web-view class="webview" :src="url" @message="onMessage">
		</web-view>
		<!-- #endif -->
		
		<!--<view class="swiper-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">指示点</view>
				<switch :checked="indicatorDots" @change="changeIndicatorDots" />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">自动播放</view>
				<switch :checked="autoplay" @change="changeAutoplay" />
			</view>
		</view>

		<view class="uni-padding-wrap">
			<view class="uni-common-mt">
				<text>幻灯片切换时长(ms)</text>
				<text class="info">{{duration}}</text>
			</view>
			<slider @change="durationChange" :value="duration" min="500" max="2000" />
			<view class="uni-common-mt">
				<text>自动播放间隔时长(ms)</text>
				<text class="info">{{interval}}</text>
			</view>
			<slider @change="intervalChange" :value="interval" min="2000" max="10000" />
		</view>-->
	</view>
</template>
<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue'

	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				title: 'swiper',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				vertical: true,
				circular: true,
				srcs: [
					'http://v1.go2yd.com/user_upload/1534471481374be14e0591691ba7cd1deea4a1740f4af.mp4_bd.mp4',
					'http://v1.go2yd.com/user_upload/15351208647967cf3ff7ae0382a3cce5748d9dc1d9328.mp4_bd.mp4',
					'http://v1.go2yd.com/user_upload/15339690114484edbd66a079a1cb927e105fdea1dd68c.mp4_bd.mp4',
					'http://v1.go2yd.com/user_upload/15339689462003eef99efcb990ce8a3816d0e3935c730.mp4_bd.mp4',
					'http://v1.go2yd.com/user_upload/1533969077639caf675fad80287b6e3db5f37771b64e2.mp4_bd.mp4',
				],
				srcA: 'http://v1.go2yd.com/user_upload/1534471481374be14e0591691ba7cd1deea4a1740f4af.mp4_bd.mp4',
				srcB: 'http://v1.go2yd.com/user_upload/15351208647967cf3ff7ae0382a3cce5748d9dc1d9328.mp4_bd.mp4',
				srcC: 'http://v1.go2yd.com/user_upload/1533969077639caf675fad80287b6e3db5f37771b64e2.mp4_bd.mp4',
				index: 0,
				position: 'A',
				positions: ['A', 'B', 'C'],
				url: 'https://api.47ks.com/webcloud/?v=https://www.iqiyi.com/v_19rshl6jyk.html?src=focustext_1_20130410_1',
				autoplayA: false,
				autoplayB: false,
				autoplayC: false,
				tname: '#李老师',
				startX: 0,
				startY: 0,
				endX: 0,
				endY: 0,
				distanceX: 0,
				distanceY: 0
			}
		},
		mounted() {
			// #ifdef H5
			this.$refs['myVideoA'].play()
			// #endif
		},
		onShareAppMessage() {
			return {
				title: '美女图册',
				path: '/pages/list/list',
				imageUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=218975447,1440067537&fm=58&bpow=385&bpoh=249'
			};
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			change(e) {
				var itemId = e.detail.currentItemId, oldIndex = this.positions.indexOf(this.position), newIndex = this.positions.indexOf(itemId)
				// 往下
				if(newIndex === oldIndex + 1 || newIndex + 2 === oldIndex){
					this.index++
					this.index = (this.index + this.srcs.length) % (this.srcs.length)
				// 往上
				}else{
					this.index--
					this.index = (this.index + this.srcs.length) % (this.srcs.length)
				}
				this['src' + this.positions[(newIndex + 3 - 1) % 3]] = this.srcs[(this.index + this.srcs.length - 1) % (this.srcs.length)]
				this['src' + this.positions[(newIndex + 3 + 1) % 3]] = this.srcs[(this.index + this.srcs.length + 1) % (this.srcs.length)]
				this.position = itemId
				
				var that = this
				setTimeout(function(){
					/*that['autoplay' + that.positions[(newIndex + 3 - 1) % 3]] = false
					that['autoplay' + itemId] = true
					that['autoplay' + that.positions[(newIndex + 3 + 1) % 3]] = false*/
					
					that.tname = (new Date()).getTime()
					
					that.$refs['myVideo' + that.positions[(newIndex + 3 - 1) % 3]].pause()
					that.$refs['myVideo' + itemId].play()
					that.$refs['myVideo' + that.positions[(newIndex + 3 - 1) % 3]].pause()
				}, 500);
			},
			fullscreenchange(e) {
				// #ifdef APP-PLUS
				plus.navigator.setFullscreen(e.detail.fullScreen);
				// #endif
			},
			goToSearch() {
				/*uni.navigateTo({
					url: '/pages/component/scroll-view/scroll-view'
				});*/
				/*uni.postMessage({
					data: {
						action: 'message'
					}
				});*/
			},
			onMoveStart(e) {
				console.log(e);
				this.startX = e.touches[0].pageX;
				this.startY = e.touches[0].pageY;
			},
			onMove(e) {
				console.log(e);
				//获取滑动屏幕时的X, Y
				var endX = e.touches[0].pageX, endY = e.touches[0].pageY;
				//获取滑动距离
				this.distanceX = endX - this.startX;
				this.distanceY = endY - this.startY;
				//判断滑动方向
				if(Math.abs(this.distanceX) > Math.abs(this.distanceY) && this.distanceX > 0){
					console.log('往右滑动');
				}else if(Math.abs(this.distanceX) > Math.abs(this.distanceY) && this.distanceX < 0){
					console.log('往左滑动');
				}else if(Math.abs(this.distanceX) < Math.abs(this.distanceY) && this.distanceY < 0){
					console.log('往上滑动');
				}else if(Math.abs(this.distanceX) < Math.abs(this.distanceY) && this.distanceY > 0){
					console.log('往下滑动');
				}else{
					console.log('点击未滑动');
				}
			},
			onMessage(e) {
				uni.showModal({
					title: '提示',
					content: JSON.stringify(e),
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				//console.log(JSON.stringify(e));
			}
		}
	}
</script>

<style lang="scss">
	.uni-padding-wrap {
		position: relative;
		padding: 0;
		width: 100vw;
	}
	
	.swiper {
		width: 100vw;
		height: 100vh;
		border: none;
	}
	.swiper-item {
		display: block;
		height: 100vh;
		line-height: 100vh;
		text-align: center;
		color: #ffffff;
		border: none;
	}
	.myVideo {
		width: 100vw;
		height: 100vh;
	}
	.recomender {
		position: absolute;
		top: 60upx;
		right: 30upx;
		left: 30upx;
		z-index: 10000;
		text-align: left;
		font-size: 36upx;
		color: #fff;
		.name {
			font-weight: bold;
			margin-right: 10upx;
		}
	}
	.search {
		position: fixed;
		top: 156upx;
		right: 30upx;
		z-index: 10000;
		width: 60upx;
		height: 60upx;
	}
	.webview {
		position: fixed;
		z-index: -1;
	}

	.swiper-list {
		margin-top: 40upx;
		margin-bottom: 0;
	}
	
	.uni-common-mt{
		margin-top:60upx;
		position:relative;
	}
	
	.info {
		position: absolute;
		right:20upx;
	}
</style>
