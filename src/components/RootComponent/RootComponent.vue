<template>
  <div>
      <div class="header clearfix">
          <h1>秘境客服系统</h1>
          <div class="search">
            <el-input
            placeholder="请输入内容"
            v-model="num"
            clearable>
            </el-input>
            <el-button type="primary" @click="search">搜索</el-button>
            <el-button type="primary" @click="add">新增</el-button>
          </div>
          <div class="header_right">
              <ul>
                  <el-button type="primary" @click="quit">退出</el-button>
              </ul>
          </div>
      </div>
      
      <!-- <div class="lists">
          <ul>
            <li>企业管理</li>
            <li>管理员管理</li>
          </ul>
      </div> -->
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
           
    <div class="main">
        <div class="content">
            <router-view ></router-view>
        </div>
    </div>

  </div>
</template>

<script>
import baseUrl from '../../utils/baseUrl'

export default {
  data () {
    return {
      num: ''
    }
  },
  methods: {
      handleOpen(key) {
          if(key == 2){
              this.$router.push("admin");
          }
          else if(key == 1){
              this.$router.push("company");
          }
      },
      
      search(){

      },
      add(){

      },
      quit(){

      }
  },
  mounted(){
    // if(!this.uid){

    //     setTimeout(() => {
    //       this.$alert('请先登录/注册！！！', '提示', {
    //       confirmButtonText: '确定'
    //     });
    //     //  this.$router.push({path: '/'});
    //     }, 800);

    // }
  }


}
</script>
<style>
    @import './RootComponent.scss'

</style>
