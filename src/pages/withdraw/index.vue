<template lang="pug">
.withdrawWrapper
  .operateWrapper.flex-b
    .leftWrapper
      el-button(v-for="item in leftList" :key="item" @click="handleQuickClick(item)") {{item}}
    .centerWrapper
      .top
        h2 请输入取款金额:
        .leftcash.flex-b
          p 当前余额: 23.39
            em BCH
          p.all 全部取现
      .center
        .inputWrapper
          el-input(placeholder="请输入金额" type="number" v-model="inputVal")
            template(slot="prepend") CNY
          i.iconfont &#xe63b;
        p.flex-e ≈ {{conversionVal}}
          em BCH
      .bottom
        Calcular(@calClick="calClick" @calBtnClick="calBtnClick")
    .rightWrapper
      el-button(v-for="item in rightList" :key="item" @click="handleQuickClick(item)") {{item}}
  .backWrapper.flex-e
    el-button(round @click="handleBtnBack") Back
</template>

<script>
import Header from 'components/Header'
import Calcular from 'components/Calculator'
export default {
  data () {
    return {
      inputVal: '',
      leftList: [100, 500, 1000],
      rightList: [3000, 5000, 10000],
      exRate: 2687.46 // 汇率
    }
  },
  computed: {
    // 换算bch
    conversionVal () {
      return String(this.inputVal / this.exRate).replace(/^(.*\..{4}).*$/, '$1')
    }
  },
  methods: {
    // 返回按钮点击
    handleBtnBack () {
      this.$router.push('/guide/nav')
    },
    // 处理左右按钮点击（100，500）
    handleQuickClick (el) {
      this.inputVal = String(el)
    },
    // 计算机里数字点击
    calClick (el) {
      this.inputVal += String(el)
    },
    // 计算机里三个button按钮点击
    calBtnClick (type) {
      if (type === 'cancel') {
        this.inputVal = ''
      } else if (type === 'reset') {
        let str = this.inputVal.substr(0, this.inputVal.length - 1)
        this.inputVal = str
      } else if (type === 'sure') {
        this.getCurrentVal()
      }
    },
    // 获取当前金额
    getCurrentVal () {
      console.log(this.inputVal);
      return Number(this.inputVal)
    }
  },
  components: {
    Header,
    Calcular
  }
}
</script>

<style lang="scss">
.withdrawWrapper {
	position: fixed;
	top: 150px;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #343232;
	.cid {
		font-size: 48px;
		color: #fff;
	}
	.leftWrapper,
	.rightWrapper {
		display: flex;
		display: -webkit-flex;
		margin-top: 200px;
		.el-button {
			margin: 30px 0;
			width: 280px;
			font-size: 36px;
			color: #e51c23;
			background-color: #fff;
			padding: 20px 0;
		}
	}
	.leftWrapper {
		flex-direction: column;
		.el-button {
			border-left: none;
			border-top-right-radius: 20px;
			border-bottom-right-radius: 20px;
		}
	}
	.rightWrapper {
		flex-direction: column;
		.el-button {
			border-right: none;
			border-top-left-radius: 20px;
			border-bottom-left-radius: 20px;
		}
	}
	.centerWrapper {
		.top {
			text-align: center;
			h2 {
				font-size: 48px;
				line-height: 80px;
				color: #fff;
			}
			.leftcash {
				p {
					font-size: 20px;
					color: #fff;
					line-height: 50px;
				}
				em {
					margin-left: 20px;
				}
				.all {
					color: #0078d7;
				}
			}
		}
		.center {
			.inputWrapper {
				position: relative;
				.el-input {
					font-size: 26px;
					.el-input__inner {
						width: 320px;
						padding: 30px 50px 30px 10px;
					}
				}
				i {
					position: absolute;
					top: 15px;
					right: 15px;
					font-size: 26px;
					color: #259b24;
				}
			}
			p {
				font-size: 20px;
				line-height: 50px;
				color: #259b24;
				em {
					margin-left: 20px;
				}
			}
		}
	}
	.backWrapper {
		padding: 0 80px;
		margin-top: 20px;
		.el-button {
			font-size: 38px;
			padding: 20px 80px;
		}
	}
}
</style>
