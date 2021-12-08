<template>
  <div class="financeBody">
    <div v-if="data.show">
      <div class="financeSearch">
        <el-date-picker
          v-model="data.query.create_at_start"
          type="date"
          placeholder="选择开始范围"
          value-format="yyyy-MM-dd"
        />~
        <el-date-picker
          v-model="data.query.create_at_end"
          type="date"
          placeholder="选择结束范围"
          value-format="yyyy-MM-dd"
        />

        <el-radio-group v-model="data.query.searchType">
          <el-radio-button label="today">今天</el-radio-button>
          <el-radio-button label="yesterday">昨天</el-radio-button>
          <el-radio-button label="prevmonth">上月</el-radio-button>
          <el-radio-button label="thismonth">本月</el-radio-button>
          <el-radio-button label="thisyear">本年</el-radio-button>
        </el-radio-group>
        <el-button type="primary" class="ml20" @click="search">搜索</el-button>
        <el-button type="primary" class="ml20" @click="excel()">导出</el-button>
      </div>
      <div class="financeCount">
        <div class="item">
          <div class="box">
            <div class="tit">
              <img class="icon" src="https://dolphin.doxinsoft.com/images/admin/finance01.png">
              <p class="txt">营业金额</p>
            </div>
            <p class="num"><span>￥</span>{{ data.data.order_sum }}</p>
          </div>
        </div>

        <div class="item">
          <div class="box">
            <div class="tit">
              <img class="icon" src="https://dolphin.doxinsoft.com/images/admin/finance03.png">
              <p class="txt">会员充值金额</p>
            </div>
            <p class="num"><span>￥</span>{{ data.data.recharge_amount }}</p>
          </div>
        </div>

      </div>
      <template>
        <el-table :data="data.arr" border style="width: 100%">
          <el-table-column label="结算项目" align="center">
            <el-table-column prop="data0" label="支付方式" min-width="100" />
            <el-table-column prop="data1" label="营业额" min-width="180">
              <template scope="scope">
                ¥{{ scope.row.data1 }}
              </template>
            </el-table-column>
            <el-table-column prop="data2" label="会员充值" min-width="180">
              <template scope="scope">
                {{ scope.row.data2 !="---" ? '¥' :'' }}{{ scope.row.data2 }}
              </template>
            </el-table-column>
            <el-table-column prop="data3" label="小计(¥)" min-width="180">
              <template scope="scope">
                {{ scope.row.data3 !="---" ? '¥' :'' }}{{ scope.row.data3 }}
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				formAction: '/admin/user/boss-count',
				data: this.formatData(this),
				siteName: this.getSiteName(),
				tabPosition: 'today',
				tableData: [{
					paytype: '现金',
					item: 0,
					packages: 0,
					recharge: 0
				}, {
					paytype: '会员卡',
					item: 0,
					packages: 0,
					recharge: 0
				}, {
					paytype: '微信',
					item: 0,
					packages: 0,
					recharge: 0
				}, {
					paytype: '支付宝',
					item: 0,
					packages: 0,
					recharge: 0
				}, {
					paytype: '银行卡',
					item: 0,
					packages: 0,
					recharge: 0
				}, {
					paytype: '合计',
					item: 0,
					packages: 0,
					recharge: 0
				}]
			}
		},
		watch: {
			'$route': 'ajax'
		},
		mounted() {
			this.$set(this.data.query, 'searchType', 'today')
			// this.data.query.searchType = 'today'
			this.ajax()
		},
		methods: {
			search() {
				if (this.data.query.create_at_start && !this.data.query.create_at_end) {
					return this.getError('请选择结束日期')
				}
				return this.ajax()
			},
			excel() {
				const url = this.urlApendOpenid('/admin/user/boss-count?type=excel', this)
				window.open(this.siteName + url)
			},
			ajax() {
				this.getAjax(this, {

				}, msg => {

				})
			}
		}
	}
</script>

<style>
	.financeBody {
		padding: 30px;
		background: #fff;
	}

	.financeSearch {
		margin-bottom: 30px;
		display: flex;
		justify-content: flex-end;
	}

	.financeSearch .el-radio-group {
		margin-left: 15px;
	}

	.financeCount {
		display: flex;
		justify-content: space-between;
		margin: 0 -15px 30px;
	}

	.financeCount .item {
		width: 100%
	}

	.financeCount .item .box {
		width: calc(100% - 30px);
		height: 160px;
		border: 1px dashed #e0e0e0;
		margin: 0 auto;
	}

	.financeCount .tit {
		display: flex;
		justify-content: center;
		align-content: center;
		margin: 30px 0;
		line-height: 34px;
	}

	.financeCount .txt {
		font-size: 16px;
		color: #4d4d4d;
	}

	.financeCount .icon {
		width: 34px;
		height: 34px;
		margin-right: 10px;
	}

	.financeCount .num {
		font-size: 24px;
		text-align: center;
		color: #ff0000;
	}

	.financeCount .num span {
		font-size: 16px;
	}
</style>
