<!-- 企业简介 -->
<template>
  <section>
    <el-form ref="ruleForm" :model="ruleForm" class="demo-ruleForm">
      <el-form-item label="标题 ：" prop="title">
        <el-input v-model="ruleForm.title" style="width:60%" maxlength="32" />
      </el-form-item>
      <el-form-item label="选项 ：" />
      <div v-for="(v,key) in ruleForm.children" class="mb10">
        <el-input v-model="v.label" style="width:60%" maxlength="32" />
        <a href="javascript:;" @click="ruleForm.children.push({label:'选项',value:'选项'})"><i class="el-icon-circle-plus-outline" style="color:#94b8ff;font-weight: 400;font-size:18px" /></a>
        <a href="javascript:;" @click="ruleForm.children.splice(key,1)"><i class="el-icon-remove-outline" style="color:#f1ca87;font-weight: 400;font-size:18px" /></a>
      </div>

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
