<template>
  <bn-search-form
    :model="form"
    :rules="rules"
    :submit="submit"
    ref="form"
  >
      <bn-input
        prop="name"
        label="名称"
        v-model="form.name"
        max="10"
        @change="onChange">
        <!--      <i slot="suffix" class="el-input__icon el-icon-date"></i>-->
        <!--      <i slot="prefix" class="el-input__icon el-icon-search"></i>-->
        <!--      <el-button slot="append" icon="el-icon-search"></el-button>-->
      </bn-input>
      <bn-checkboxes
        prop="hobbies"
        label="爱好"
        v-model="form.hobbies"
        @change="onChange"
        :options="options"
      />
      <bn-upload
        prop="files"
        label="文件上傳"
        v-model="form.fileName"
        @change="onChange"
      />
      <bn-time-picker
        label="时间"
        prop="timePicker"
        v-model="form.timePicker"
        @change="onChange"
      />
      <bn-date-picker
        label="日期"
        prop="datePicker"
        v-model="form.datePicker"
        @change="onChange"
      />
      <bn-date-time-picker
        prop="dateTimePicker"
        label="日期時間"
        v-model="form.dateTimePicker"
        @change="onChange"
      />
      <bn-slider
        label="滑块"
        prop="slider"
        v-model="form.slider"
        @change="onChange"
      />
      <bn-rate
        label="评分"
        prop="rate"
        v-model="form.rate"
        @change="onChange"
      />
      <bn-color-picker
        label="颜色"
        v-model="form.color"
        @change="onChange"
      />
      <bn-checkbox
        label="控制器"
        v-model="form.switchFlag"
        name="开关"
        @change="onChange"
      />
      <bn-switch
        prop="switchFlag"
        v-model="form.switchFlag"
        @change="onChange"
      />
      <bn-select
        label="选择"
        v-model="form.selects"
        :options="options"
        @change="onChange"
      >
        <!--        remote-->
        <!--        :remote-method="remoteMethod"-->
        <!--        以上兩個属性是做远程加载使用的 需要使用async方法 -->
        <!--                <template slot-scope="{row}">-->
        <!--                  <span style="float: left">{{ row.label }}</span>-->
        <!--                  <span style="float: right; color: #8492a6; font-size: 13px">{{ row.value }}</span>-->
        <!--                </template>-->
      </bn-select>
      <bn-radio
        prop="type"
        label="类型"
        v-model="form.type"
        :options="options"
        @change="onChange"
      />
      <bn-transfer
        prop="transfer"
        label="穿梭框"
        v-model="form.transfer"
        :options="data"
        @change="onChange"
      />
      <bn-input-number
        prop="num"
        label="数量"
        v-model="form.num"
        @change="onChange"
      />
      <bn-input-limit-number
        prop="num"
        label="数量2"
        v-model="form.num2"
        @change="onChange"
      />
      <bn-cascader
        prop="cascader"
        label="层级"
        v-model="form.cascader"
        @change="onChange"
        :options="cascaderOpts"
        total
      />
      <bn-input
        prop="desc"
        label="描述"
        type="textarea"
        v-model="form.desc"
        @change="onChange"
      />
  </bn-search-form>
</template>

<script>
  import {cascaderOpts} from "./data";

  export default {
    name: "Form",
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${i}`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        form: {
          name: '',
          hobbies: [],
          radio: 1,
          fileName: '',
          dinner: '',
          transfer: [],
          timePicker: '',
          datePicker: '',
          dateTimePicker: '',
          num: 0,
          color: '#409EFF',
          rate: 0,
          slider: 0,
          num2: 0,
          selects: ['第一'],
          cascader: '',
          type: '',
          switchFlag: false,
        },
        data: generateData(),
        options: [
          {label: '第一', value: 1},
          {label: '第二', value: 2},
          {label: '第三', value: 3, disabled: true}
        ],
        cascaderOpts,
        cities: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
          ],
          hobbies: [
            {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],
          type: [
            {required: true, message: '请选择类型', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        },
        states: ["Alabama", "Alaska", "Arizona",
          "Arkansas", "California", "Colorado",
          "Connecticut", "Delaware", "Florida",
          "Georgia", "Hawaii", "Idaho", "Illinois",
          "Indiana", "Iowa", "Kansas", "Kentucky",
          "Louisiana", "Maine", "Maryland",
          "Massachusetts", "Michigan", "Minnesota",
          "Mississippi", "Missouri", "Montana",
          "Nebraska", "Nevada", "New Hampshire",
          "New Jersey", "New Mexico", "New York",
          "North Carolina", "North Dakota", "Ohio",
          "Oklahoma", "Oregon", "Pennsylvania",
          "Rhode Island", "South Carolina",
          "South Dakota", "Tennessee", "Texas",
          "Utah", "Vermont", "Virginia",
          "Washington", "West Virginia", "Wisconsin",
          "Wyoming"],
        list: []
      }
    },
    methods: {
      async submit() {
        await new Promise(resolve => {
          setTimeout(() => {
            console.log('提交请求')
            resolve()
          }, 1000)
        })
      },
      async remoteMethod(query) {
        if (query !== '') {
          return new Promise(resolve => {
            setTimeout(() => {
              this.options = this.list.filter(item => {
                return item.label.toLowerCase()
                  .indexOf(query.toLowerCase()) > -1;
              });
              resolve()
            }, 1000);
          })
        } else {
          this.options = [];
        }
      },
      onChange(value) {
        console.log(value)
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return {value: `value:${item}`, label: `label:${item}`};
      });
    }
  }
</script>

