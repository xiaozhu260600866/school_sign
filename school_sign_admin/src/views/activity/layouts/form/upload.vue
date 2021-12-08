<!-- 企业简介 -->
<template>
  <section>
    <el-form ref="ruleForm" :model="ruleForm" class="demo-ruleForm">
      <el-form-item label="标题：" prop="title">
        <el-input v-model="ruleForm.title" style="width:60%" maxlength="32" />
      </el-form-item>
      <el-form-item label="图片数量限制：" prop="allowUploadNum">
        <el-input-number v-model="ruleForm.allowUploadNum" :min="1" :max="10" style="width:60%" />
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
