<template>
  <div class="dx-main">
    <div class="list-box">
      <el-dialog title="修改密码" :visible.sync="visible" width="700px" append-to-body @close="close">
        <el-form ref="pwdform" :model="formData" :inline="true" label-width="100px">
          <el-row>
            <el-col :span="24">
              <el-form-item label="现用密码" prop="oldPassword" :rules="[{ required: true, message: '请输入现用密码'}]">
                <el-input v-model="formData.oldPassword" type="password" :show-password="true" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="新密码" prop="newPassword" :rules="[{ required: true, message: '请输入新密码'}]">
                <el-input v-model="formData.newPassword" type="password" :show-password="true" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="确认新密码" prop="password_confirm" :rules="[{ required: true, message: '请输入确认新密码'}]">
                <el-input v-model="formData.password_confirm" type="password" :show-password="true" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="visible = false">取 消</el-button>
          <el-button type="primary" @click="submitPwdForm('pwdform')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { modifyPwd } from '@/api/user'
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            formData: {}
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },
        submitPwdForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.formData.password != this.formData.password_confirm) {
                        return this.msgError('新密码和确认新密码不相同，请重新输入', this)
                    }
                    this.formData.user_id = this.$store.getters.user_id
                    this.postAjax("/admin/system/password",this.formData).then(msg=>{
						
					})
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        }
    }
}
</script>
