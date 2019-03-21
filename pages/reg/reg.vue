<template>
	<view class="page_reg">
		<!-- 头部logo -->
		<view class="head">
			<view class="head_bg">
				<view class="head_inner_bg">
					<image :src="imgInfo.head" class="head_logo" />
				</view>
			</view>
		</view>
		<view class="code" style="margin-top: 0;">
			<input type="text" value="" placeholder="手机号" class="input" />
		</view>
		<view class="code">
			<input type="text" value="" placeholder="验证码" class="input" />
			<button class="getverifycode" type="primary">获取验证码</button>
		</view>
		<view class="pwd">
			<input type="password" value="" placeholder="登录密码" class="input" />
		</view>
		<view style="width: 100%;font-size: 28upx;margin-top: 40upx;text-align: right;">
			<label class="checkbox">
				<checkbox value="" />
			</label>
			<text class="protocol_tip">同意</text><text class="protocol_tip link">《注册服务协议》</text>
		</view>
		<button class="submit" type="primary" @tap="reg">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgInfo: {
					head: '/static/head.png',
					icon_del: '/static/icon_del.png',
					icon_pwd_switch: '/static/icon_pwd_switch.png'
				}
			};
		},
		methods: {
			reg() {
				console.log('username:' + this.username + ',pwd:' + this.userpwd)
				uni.switchTab({
					url: '/pages/tabBar/component/component'
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #f5f6f8;
	}
</style>
<style lang="scss" scoped>
	$text-color: #B6B6B6;
	$logo-padding: 40upx;
	$form-border-color: rgba(214, 214, 214, 1);
	
	.page_reg {
		height: 100%;
		padding: 15px;
	}
	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: $logo-padding;
		padding-bottom: $logo-padding;
	
		.head_bg {
			border: 0 solid #fbecf1;
			border-radius: 100upx;
			width: 200upx;
			height: 200upx;
			display: flex;
			align-items: center;
			justify-content: center;
	
			.head_inner_bg {
				border-radius: 100upx;
				width: 200upx;
				height: 200upx;
				display: flex;
				background-color: #2196f3;
				align-items: flex-end;
				justify-content: center;
				overflow: hidden;
				
				.head_logo {
					width: 110upx;
					height: 130upx;
				}
			}
		}
	}
	.code {
		width: 100%;
		min-height: 90upx;
		margin-top: 40upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid $form-border-color;
		
		.getverifycode {
			color: white;
			background-color: rgba(33, 150, 243, 1.0);
			-webkit-tap-highlight-color: rgba(33, 150, 243, 1.0);
			border-radius: 0;
			border: 0;
			margin-right: 0;
			margin-bottom: -1px;
			width: 280upx;
		
			&:active {
				color: #B6B6B6;
				background-color: rgba(33, 150, 243, 0.8);
			}
			
			&:after {
				border: 0;
			}
		}
	}
	.pwd {
		width: 100%;
		margin-top: 40upx;
		min-height: 90upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-bottom: 1px solid $form-border-color;
	}
	
	.protocol_tip {
		display: inline-block;
		vertical-align: middle;
		font-size: 28upx;
		color: $text-color;
	}
	
	.link {
		color: #3a8de8;
		vertical-align: middle;
	}
	
	.submit {
		width: 100%;
		margin-top: 40upx;
		color: white;
		background-color: rgba(33, 150, 243, 1.0);
		-webkit-tap-highlight-color: rgba(33, 150, 243, 1.0);
		border-radius: 0;
		border: 0;
	
		&:active {
			color: #B6B6B6;
			background-color: rgba(33, 150, 243, 0.8);
		}
		
		&:after {
			border: 0;
		}
	}
</style>
