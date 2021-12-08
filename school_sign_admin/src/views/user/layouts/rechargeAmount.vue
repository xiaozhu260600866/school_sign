<template>
  <el-dialog title="充值余额" :visible.sync="dialogFormVisible" top="100px" :before-close="handleClose">
    <el-form ref="ruleForm" :model="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name">
        <el-col :span="8">
          <el-input v-model="ruleForm.name" :disabled="true" />
        </el-col>
      </el-form-item>
      <el-form-item label="充值金额" prop="amount" :rules="[{ required: true, message: '充值金额不能为空'},]">
        <el-col :span="8">
          <el-input v-model="ruleForm.amount" />
        </el-col>
      </el-form-item>
      <el-form-item label="赠送金额" prop="give_amount" :rules="[{ required: true, message: '赠送金额不能为空'},]">
        <el-col :span="8">
          <el-input v-model="ruleForm.give_amount" />
        </el-col>
      </el-form-item>
      <el-form-item label="付款方式" :rules="[{ required: true, message: '付款方式不能为空'},]" prop="pay_method">
        <el-select v-model="ruleForm.pay_method" placeholder="请选择">
          <el-option label="现金" :value="3" />
          <el-option label="Mpay" :value="4" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即充值</el-button>
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
            ruleForm: { end_at: '', coupon_id: '', amount: '', give_amount: 0 },
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
                this.formAction = '/admin/user/recharge-amount'
                this.ruleForm.nickname = params.nickname
                this.ruleForm.name = params.userInfo.name
                this.ruleForm.user_id = params.id
                this.ruleForm.amount = 0
				this.ruleForm.give_amount = 0
            }
        },
        handleClose() {
            this.dialogFormVisible = false
        }
    }
}
</script>
