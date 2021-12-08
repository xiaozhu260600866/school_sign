<template>
  <el-dialog title="订单完成" :visible.sync="dialogFormVisible" :top="top" :before-close="handleClose">
    <el-form ref="ruleForm" :model="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name">
        <el-col :span="8">
          <el-input v-model="ruleForm.name" :disabled="true" />
        </el-col>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-col :span="8">
          <el-input v-model="ruleForm.phone" :disabled="true" />
        </el-col>
      </el-form-item>
      <el-form-item label="金额" prop="price">
        <el-col :span="8">
          <el-input v-model="ruleForm.price" :disabled="true" />
        </el-col>
      </el-form-item>
      <el-form-item label="订单号" prop="order_no">
        <el-col :span="8">
          <el-input v-model="ruleForm.order_no" :disabled="true" />
        </el-col>
      </el-form-item>
      <el-form-item label="会员余额">
        <el-col :span="8">
          <div v-for="shopAmountRecord in ruleForm.getUser.amountRecord">
            <div>{{ shopAmountRecord.name }} 余额：{{ shopAmountRecord.amount }}</div>
          </div>
          <div>总余额：{{ ruleForm.getUser.amount }}</div>
        </el-col>
      </el-form-item>
      <el-form-item label="付款方式" :rules="[{ required: true, message: '付款方式不能为空'},]" prop="pay_method">
        <el-select v-model="ruleForm.pay_method" placeholder="请选择">
          <el-option label="余额支付" :value="2" />
          <el-option label="现金" :value="3" />
          <el-option label="Mpay" :value="4" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
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
            ruleForm: { end_at: '', coupon_id: '', amount: '' },
            formAction: '',
            dialogFormVisible: false,
            end_at: '',
            coupon: []
        }
    },
    methods: {
        submitForm(formName) {
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

        ajax: function(params, coupon) {
        	this.dialogFormVisible = true
            if (params) {
                this.formAction = '/admin/order/pay'
				this.ruleForm = params
            }
        },
        handleClose() {
            this.dialogFormVisible = false
        }
    }
}
</script>
