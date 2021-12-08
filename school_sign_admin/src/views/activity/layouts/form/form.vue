<template>
  <div v-if="lists.length" style="height: 644px;">
    <div class="edit-box">
      <div class="edit-carousel edit-images">
        <div class="edit-shop-header flex-middle flex-center"><h3 class="fs-17">标题栏设置</h3>
        </div>
        <div class="edit-shop-content">
          <div v-if="ruleForm.type == '标题'">
            <myTitle :rule-form="ruleForm" />
          </div>
          <div v-if="ruleForm.type == '文本'">
            <myText :rule-form="ruleForm" />
          </div>
          <div v-if="ruleForm.type == '多行文本'">
            <myTextarea :rule-form="ruleForm" />
          </div>
          <div v-if="ruleForm.type == '时间'">
            <myTime :rule-form="ruleForm" />
          </div>
          <div v-if="ruleForm.type == '日期'">
            <myDate :rule-form="ruleForm" />
          </div>
          <div v-if="ruleForm.type == '单项选择'">
            <myRatio :rule-form="ruleForm" />
          </div>
          <div v-if="ruleForm.type == '多项选择'">
            <myCheckbox :rule-form="ruleForm" />
          </div>
          <div v-if="ruleForm.type == '下拉框'">
            <mySelect :rule-form="ruleForm" />
          </div>
          <div v-if="ruleForm.type == '上传图片'">
            <myUpload :rule-form="ruleForm" />
          </div>
          <div v-if="ruleForm.type == '地址'">
            <myAddress :rule-form="ruleForm" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import myTitle from './title'
import myText from './text'
import myTextarea from './textarea'
import myTime from './time'
import myDate from './date'
import myRatio from './ratio'
import myCheckbox from './checkbox'
import mySelect from './select'
import myUpload from './upload'
import myAddress from './address'

export default {
	components: {
		myTitle,
		myText,
		myTextarea,
		myTime,
		myDate,
		myRatio,
		myCheckbox,
		mySelect,
		myUpload,
		myAddress
	},
	props: ['lists', 'ruleForm']
}

</script>
