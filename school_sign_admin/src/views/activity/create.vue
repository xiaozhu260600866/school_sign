<template>
	<section class="p20" style="background: white;">
		<div>
			<span class="tip tip-link mr20" style="color: #f59642;"><i class="el-icon-info el-icon" />活动内容</span>
		</div>
		<el-form ref="ruleForm2" :model="ruleForm2" label-width="100px" class="demo-ruleForm pb50 mt20">
			<el-form-item label="活动名称" prop="title" :rules="[{ required: true, message: '活动名称不能为空'},]">
				<el-input v-model="ruleForm2.title" />
			</el-form-item>
			<div class="flex">
				<el-form-item label="活动价" prop="price" :rules="[{ required: true, message: '活动价不能为空'},]">
					<el-input v-model="ruleForm2.price" />
				</el-form-item>
				<el-form-item label="标价" prop="new_price" :rules="[{ required: true, message: '标价不能为空'},]">
					<el-input v-model="ruleForm2.new_price" />
				</el-form-item>

				<el-form-item label="活动人数" prop="maxNum" :rules="[{ required: true, message: '活动人数不能为空'},]">
					<el-input v-model="ruleForm2.maxNum" />
				</el-form-item>
			</div>

			<el-form-item label="起止时间" prop="start_at" :rules="[{ required: true, message: '活动名称不能为空'},]">
				<el-date-picker v-model="ruleForm2.start_at" type="datetime" placeholder="选择开始时间"
					format="yyyy-MM-dd/HH-mm-ss" />
				<el-date-picker v-model="ruleForm2.end_at" type="datetime" placeholder="选择结束时间"
					format="yyyy-MM-dd/HH-mm-ss" />
			</el-form-item>
			<el-form-item label="封面图" prop="thump_pic">
				<my-upload upurl="activity" upload-length="1" :file-list="ruleForm2.thump_pic" :sizearr="300" />
			</el-form-item>
			<el-form-item label="轮翻图" prop="cover">
				<my-upload upurl="activity" upload-length="5" :file-list="ruleForm2.cover" :sizearr="300" />

			</el-form-item>
			<el-form-item label="活动日期：">
				<el-date-picker v-model="ruleForm2.dates" type="dates" placeholder="选择一个或多个日期" value-format="yyyy-MM-dd"
					style="width:100%;" />
				<div>
					<el-tag v-for="(date,key) in ruleForm2.dates" closable @close="handleDeleteTag(date,key)">{{ date }}
					</el-tag>
				</div>
			</el-form-item>
		</el-form>

		<div class="mt20 mb20">
			<span class="tip tip-link mr20" style="color: #f59642;"><i class="el-icon-info el-icon" />活动介绍</span>
		</div>
		<div class="el-form-item">
			<div :class="['el-form-item__content' ]">
				<Tinymce ref="editor" v-model="ruleForm2.content" :height="300" />
			</div>
		</div>
		<div class="flex-center">
			<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>

		</div>
	</section>
</template>
<style type="text/css" scoped="">
	@import url('form.css');
</style>
<script type="text/javascript">
	import authLists from './layouts/lists/lists'
	import authForm from './layouts/form/form'
	import Tinymce from 'xiaozhu/elementAdmin/components/Tinymce/index'
	export default {
		components: {
			authLists,
			authForm,
			Tinymce
		},
		data() {
			return {
				ruleForm: {
					/* title: '管理团队', icon: 1, type: '管理团队', authDiag: false, checked: true,children:[]*/
				},
				ruleForm2: {
					start_at: '',
					cover: [],
					thump_pic: [],
					dates: []
				},
				siteName: this.getSiteName(),
				showType: 0,
				appointment_name: '',
				appointment_title: '',
				status: 0,
				title: '',
				formAction: '/admin/activity/create',
				data: this.formatData(this),
				lists: []
			}
		},
		mounted() {
			this.ajax()
		},
		methods: {
			handleDeleteTag(value, key) {
				console.log(key)
				this.ruleForm2.dates.splice(key, 1)
			},
			submitForm(formName) {
				if (this.ruleForm2.id) {
					this.formAction = '/admin/activity/edit'
				} else {
					this.formAction = '/admin/activity/create'
				}
				this.$refs[formName].validate((valid) => {
					if (valid) {
						if (!this.ruleForm2.end_at) {
							this.getError('结束时间不能为空')
							return false
						}
						if (this.ruleForm2.dates.length == 0) {
							this.getError('选择日期不能为空')
							return false
						}
						if (typeof this.ruleForm2.start_at === 'object') {
							this.ruleForm2.start_at = this.dateToString(this.ruleForm2.start_at, 1)
						}
						if (typeof this.ruleForm2.end_at === 'object') {
							this.ruleForm2.end_at = this.dateToString(this.ruleForm2.end_at, 1)
						}
						this.postAjax(this.formAction, this.ruleForm2, msg => {
							if (msg.data.status == 2) {
								this.goto('/activity/lists')
							}
						})
					}
				})
			},
			ajax() {
				this.getAjax(this, {}, msg => {
					if (msg.detail) {
						this.ruleForm2 = msg.detail
						this.ruleForm2.cover = this.splitCover(this.ruleForm2.cover, 'activity')
						this.ruleForm2.thump_pic = this.splitCover(this.ruleForm2.thump_pic, 'activity')
						this.$set(this.ruleForm2, 'dates', this.ruleForm2.dates1 ? this.ruleForm2.dates1.split(
							',') : [])
					}
				})
			}
		}
	}
</script>
<style type="text/css" scoped="">
</style>
