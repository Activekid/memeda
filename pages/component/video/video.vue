<template>
	<view>
		<!--<page-head :title="title"></page-head>-->
		<view class="uni-padding-wrap uni-common-mt">
			<view>
				<video id="myVideo" src="http://static1.wkzj.net/web/videos/91b13e48-eb98-45e1-ab0d-5d7bd7b9d765.mp4"
				 @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
			</view>
			<!-- #ifndef MP-ALIPAY -->
			<!--<view class="uni-list uni-common-mt">
				<view class="uni-list-cell">
					<view>
						<view class="uni-label">弹幕内容</view>
					</view>
					<view class="uni-list-cell-db">
						<input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
					</view>
				</view>
			</view>
			<view class="uni-btn-v">
				<button @click="sendDanmu" class="page-body-button">发送弹幕</button>
			</view>-->
			<!-- #endif -->
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'video',
				src: '',
				danmuList: [{
						text: '第 1s 出现的弹幕',
						color: '#ff0000',
						time: 1
					},
					{
						text: '第 3s 出现的弹幕',
						color: '#ff00ff',
						time: 3
					}
				],
				danmuValue: ''
			}
		},
		onReady: function(res) {
			// #ifndef MP-ALIPAY
			this.videoContext = uni.createVideoContext('myVideo')
			// #endif
		},
		methods: {
			sendDanmu: function() {
				this.videoContext.sendDanmu({
					text: this.danmuValue,
					color: this.getRandomColor()
				});
				this.danmuValue = '';
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			getRandomColor: function() {
				const rgb = []
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			}
		}
	}
</script>

<style>
	.uni-padding-wrap {
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	video {
		width: 100vw;
		height: 100vh;
	}
</style>
