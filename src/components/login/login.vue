<template>
	<div class="login-box">
		<div class="col-sm-12 b-r">
			<h3 class="m-t-none m-b">登录</h3>
			<form role="form">
			    <div class="form-group text-left">
			        <label>用户名：</label>
			        <input type="text" v-model="name" name="username" placeholder="请输入用户名" class="form-control required">
			    </div>
			    <div class="form-group  text-left">
			        <label>密码：</label>
			        <input type="password" v-model="password" name="password" placeholder="请输入密码" class="form-control required">
			    </div>
                <span v-if="show">请输入正确的用户名或者密码！</span>
			    <div>
			    	<input type="button" class="btn btn-primary pull-right m-t-n-xs" value="登录" @click="login">
			    </div>
			</form>
		</div>
	</div>
</template>

<script type="text/javascript">
    import './login.scss'
    import http from '../../utils/reqAjax'

 	export default {
		data(){
			return {
                show: false,
				name: '',
				password: ''
			}
		},
		methods: {
			login: function(event){
				if($('form').valid()){
                    //获取名称和密码
                    var dataset = {
                        url : 'login.php',
                        params : {
                            name : this.name,
                            password : this.password
                        }
                    }
					http.post(dataset).then( (res) => {
                        // console.log(res.data)
                        if(res.data){
                            this.$router.push('root');
                        }else{
                            this.show = true;
                        }
                    })
				}
			}
		}
	}
</script>
