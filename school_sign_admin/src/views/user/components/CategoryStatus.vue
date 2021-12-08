<template>
  <div style="text-align: center;">
    <el-tag v-if="data.category===0">-</el-tag>
    <el-tag v-else-if="data.category&&data.category_status" type="success">已认证</el-tag>
    <el-tag v-else type="danger">未认证</el-tag>
  </div>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: {}
		}
	}
}
</script>
