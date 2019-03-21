<template>
	<view class="page_login">
		<!-- 头部logo -->
		<view class="head">
			<view class="head_bg">
				<view class="head_inner_bg">
					<image :src="imgInfo.head" class="head_logo" />
				</view>
			</view>
		</view>
		<!-- form -->
		<view class="form">
			<view class="input">
				<input type="text" v-model="phoneNo" placeholder="请输入手机号" />
				<view class="img">
					<uni-view class="uni-icon uni-icon-clear ico" @tap="delUser"></uni-view>
				</view>
			</view>
			<view class="code">
				<input type="text" :value="code" placeholder="请输入验证码" />
				<button style="height: 104upx;" type="primary" plain="">获取验证码</button>
			</view>
			<view class="input">
				<input :type="pwdType" :value="userpwd" @input="inputPwd" placeholder="请输入新密码">
				<view class="img" @tap="switchPwd">
					<uni-view class="uni-icon uni-icon-eye ico" ></uni-view>
				</view>
			</view>
		</view>
		<!-- 登录提交 -->
		<button class="submit" type="primary" @tap="modifyPwd">修改密码</button>
	</view>
</template>

<script>
	export default {
		data() {
			const isUni = typeof(uni) !== 'undefined'
			return {
				phoneNo: '',
				userpwd: '',
				code: '',
				pwdType: 'password',
				imgInfo: {
					head: '/static/head.png',
					icon_del: '/static/icon_del.png',
					icon_pwd_switch: '/static/icon_pwd_switch.png'
				}
			};
		},
		methods: {
			delUser() {
				this.phoneNo = ''
			},
			switchPwd() {
				this.pwdType = this.pwdType === 'text' ? 'password' : 'text'
			},
			inputPwd(e) {
				this.userpwd = e.target.value
			},
			modifyPwd() {
				console.log('username:' + this.username + ',pwd:' + this.userpwd)
				uni.switchTab({
					url: '/pages/tabBar/component/component'
				})
			}
		},
	}
</script>

<style>
	page {
		height: auto;
		min-height: 100%;
		background-color: #f5f6f8;
	}
</style>

<style lang="scss" scoped>
	$logo-padding: 40upx;
	$form-border-color: rgba(214, 214, 214, 1);

	.page_login {
		padding: 30upx;
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

	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.code {
			position: relative;
			width: 100%;
			min-height: 100upx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			input {
				outline: none;
				height: 100upx;
				border: 1px solid $form-border-color;
				border-radius: 0;
				padding-left: 20upx;
				margin-right: 20upx;

				&:focus {
					outline: none;
				}
			}
		}

		.input {
			width: 100%;
			min-height: 100upx;
			margin: 20upx 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			border: 1px solid $form-border-color;
			border-radius: 0;
			box-sizing: border-box;

			input {
				outline: none;
				margin-left: 20upx;
				height: 80upx;
				width: 100%;

				&:focus {
					outline: none;
				}
			}

			.img {
				min-width: 80upx;
				min-height: 80upx;
				margin: 10upx;
				display: flex;
				align-items: center;
				justify-content: center;
				
				.ico {
					font-size: 48upx;
					color: rgb(143, 143, 148);
				}
			}

			.img_del {
				width: 42upx;
				height: 42upx;
			}

			.img_pwd_switch {
				width: 56upx;
				height: 24upx;
			}

		}
	}

	.submit {
		margin-top: 60upx;
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
