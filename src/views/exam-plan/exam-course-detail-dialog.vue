<template>
  <div>
    <el-dialog title="开考课程详情" :visible.sync="value.show" @open="onOpen">
      <el-form
        v-loading.body="loading"
        :model="value.data"
        :rules="courseDetailRules"
        ref="courseForm"
        label-width="115px"
      >
        <el-form-item label="考次编码" prop="examId">
          <el-col :span="6">
            <el-input v-model="value.data.examId" />
          </el-col>
        </el-form-item>
        <el-form-item label="开考课程编码" prop="courseId">
          <el-col :span="6">
            <el-input v-model="value.data.courseId" />
          </el-col>
        </el-form-item>
        <el-form-item label="日期编码" prop="timeId">
          <el-col :span="6">
            <el-input v-model="value.data.timeId" />
          </el-col>
        </el-form-item>

        <el-form-item label="考试日期" prop="examDate">
          <el-col :span="12">
            <el-date-picker
              v-model="value.data.examDate"
              type="datetime"
              clearable="false"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="开始时间" prop="startTime">
          <el-col :span="12">
            <!-- <el-date-picker
            v-model="value.data.startTime"
            type="datetime"
            clearable="false"
            placeholder="选择日期">
            </el-date-picker>-->
            <el-time-picker
              v-model="value.data.startTime"
              :picker-options="{
              selectableRange: '18:30:00 - 20:30:00'
            }"
              placeholder="选择开始时间"
            ></el-time-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="结束时间" prop="endTime">
          <el-col :span="12">
            <!-- <el-date-picker
            v-model="value.data.endTime"
            type="datetime"
            clearable="false"
            placeholder="选择日期">
            </el-date-picker>-->
            <el-time-picker
              v-model="value.data.endTime"
              :picker-options="{
              selectableRange: '18:30:00 - 20:30:00'
            }"
              placeholder="选择结束时间"
            ></el-time-picker>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native.prevent="value.show = false">取消</el-button>
        <el-button
          v-if="value.type === 'add'"
          type="success"
          :loading="btnLoading"
          @click.native.prevent="addCourse"
        >添加</el-button>
        <el-button
          v-if="value.type === 'update'"
          type="primary"
          :loading="btnLoading"
          @click.native.prevent="updateCourse"
        >更新</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { unix2CurrentTime } from "@/utils";
import { addCourse, updateCourse } from "@/api/exam-plan";

export default {
  props: {
    value: {
      type: Object,
    },
  },
  created() {
    console.log("created value=" + JSON.stringify(this.value));
  },
  activated() {
    console.log("activated value=" + JSON.stringify(this.value));
  },
  data() {
    const validateCourseId = (rule, value, callback) => {
      if (value.match(/^[0-9]{5}$/)) {
        callback();
      } else {
        callback(new Error("课程编码必须由5位数字组成"));
      }
    };
    const validateEmpty = (rule, value, callback) => {
      if (value === null || value.length === 0) {
        callback(new Error("请输入内容"));
      } else {
        callback();
      }
    };
    return {
      textbookList: [],
      loading: false,
      btnLoading: false,
      toUpdate: false,
      courseDetailRules: {
        courseName: [
          { required: true, trigger: "blur", validator: validateEmpty },
        ],
        courseId: [
          { required: true, trigger: "blur", validator: validateCourseId },
        ],
      },
    };
  },
  methods: {
    unix2CurrentTime,
    addCourse() {
      this.$refs.courseForm.validate((valid) => {
        if (valid) {
          this.btnLoading = true;
          addCourse(this.value.data)
            .then(() => {
              this.$message.success("添加成功");
              this.value.callback.getList();
              this.value.show = false;
              this.btnLoading = false;
            })
            .catch((res) => {
              this.$message.error("添加课程失败");
              this.btnLoading = false;
            });
        } else {
          this.$message.error("输入内容有误");
          console.log("表单无效");
        }
      });
    },
    /**
     * 修改角色
     */
    updateCourse() {
      this.$refs.courseForm.validate((valid) => {
        if (valid) {
          this.btnLoading = true;
          updateCourse(this.value.data)
            .then(() => {
              this.$message.success("更新成功");
              this.value.callback.getList();
              this.value.show = false;
              this.btnLoading = false;
            })
            .catch((res) => {
              this.$message.error("更新课程失败");
              this.btnLoading = false;
            });
        } else {
          console.log("表单无效");
        }
      });
    },
  },
};
</script>
