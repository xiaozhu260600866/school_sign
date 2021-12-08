<template>
  <el-dialog title="充值余额" :visible.sync="dialogFormVisible" top="100px" :before-close="handleClose">
    <el-form ref="ruleForm" :model="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name">
        <el-col :span="8">
          <el-input v-model="ruleForm.name" :disabled="true" />
        </el-col>
      </el-form-item>

      <el-form-item label="门店" :rules="[{ required: true, message: '门店方式不能为空'},]" prop="shop_id">
        <el-select v-model="ruleForm.shop_id" placeholder="请选择" @change="selectShop">
          <el-option v-for="shop in shops" :label="shop.label" :value="shop.value" />
        </el-select>
      </el-form-item>
      <div v-if="ruleForm.shop_id" style="padding-left:12px;">该门店的余额:{{ shop_amount }}</div>
      <el-form-item v-if="ruleForm.shop_id" label="转帐金额" :rules="[{ required: true, message: '门店方式不能为空'},]" prop="amount" style="margin-top: 20px;">
        <el-col :span="8">
          <el-input v-model="ruleForm.amount" />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即转帐</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
    props: ['top'],
    data() {
        return {
            ruleForm: { shop_id: '', amount: '' },
            formAction: '',
            dialogFormVisible: false,
            end_at: '',
			shops: [],
			user: {},
			shop_amount: 0,
            coupon: []
        }
    },
    methods: {
		selectShop() {
			this.user.amountRecord.forEach(v => {
				if (v.shop_id == this.ruleForm.shop_id) {
					this.shop_amount = v.amount
				}
			})
			console.log(this.ruleForm.shop_id)
		},
        submitForm(formName) {
			if (this.ruleForm.amount > this.shop_amount) {
				return this.getError('转帐金额不能大于门店金额')
			}
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.postAjax(this.formAction, this.ruleForm, msg => {
                        if (msg.data.status == 2) {
                            this.dialogFormVisible = false
                            this.$parent.ajax()
                        }
                    })
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
        },

        ajax: function(params, shops, shop_id) {
        	this.dialogFormVisible = true
			shops.forEach((shop, shopKey) => {
				if (shop.value == shop_id) {
					shops.splice(shopKey, 1)
				}
			})
			this.shops = shops
			this.user = params

            if (params) {
                this.formAction = '/admin/user/transfer'
                this.ruleForm.nickname = params.nickname
                this.ruleForm.name = params.userInfo.name
                this.ruleForm.user_id = params.id
                this.ruleForm.amount = 0
				this.$set(this.ruleForm, 'shop_id', '')
            }
        },
        handleClose() {
            this.dialogFormVisible = false
        }
    }
}
</script>
