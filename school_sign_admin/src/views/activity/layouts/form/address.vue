<!-- 企业简介 -->
<template>
  <section>
    <el-form ref="ruleForm" :model="ruleForm" class="demo-ruleForm">
      <el-form-item label="标题：" prop="title">
        <el-input v-model="ruleForm.title" style="width:60%" maxlength="32" :disabled="in_array(ruleForm.title,['姓名','联系电话','邮箱'] )" />
      </el-form-item>
      <el-checkbox v-model="ruleForm.isRequire" :checked="ruleForm.isRequire ? true :false">设为必填项</el-checkbox>
    </el-form>
  </section>
</template>
<script type="text/javascript">
export default {
	props: ['ruleForm'],
	data() {
		return {
			siteName: this.getSiteName()
		}
	}
}

</script>
