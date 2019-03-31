<template>
	<view>
		<!--<page-head :title="title"></page-head>-->
		<!-- #ifdef H5 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :vertical="vertical" :circular="circular" @change="change">
						<swiper-item item-id="A">
							<view class="swiper-item">
								<video class="myVideo" :src="srcA" autoplay="false" direction="-90" controls></video>
							</view>
						</swiper-item>
						<swiper-item item-id="B">
							<view class="swiper-item">
								<video class="myVideo" :src="srcB" autoplay="false" controls></video>
							</view>
						</swiper-item>
						<swiper-item item-id="C">
							<view class="swiper-item">
								<video class="myVideo" :src="srcC" autoplay="false" controls></video>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS || MP-WEIXIN -->
		<web-view :src="url"></web-view>
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
	export default {
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
				url: 'http://192.168.0.48:8080/h5/pages/component/swiper/swiper'
			}
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
			}
		}
	}
</script>

<style scoped="">
	.uni-padding-wrap {
		padding: 0;
		width: 100vw;
	}
	
	.swiper {
		width: 100vw;
		height: 100vh;
	}
	.swiper-item {
		display: block;
		height: 100vh;
		line-height: 100vh;
		text-align: center;
		color: #ffffff;
	}
	.myVideo {
		width: 100vw;
		height: 100vh;
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
