<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 标签切换 -->
      <div class="tabs">
        <div class="tab" :class="{ active: isLogin }" @click="isLogin = true">
          登录
        </div>
        <div class="tab" :class="{ active: !isLogin }" @click="isLogin = false">
          注册
        </div>
      </div>

      <div class="login-header">
        <h2 class="logo">LinkUp</h2>
        <p class="tagline">企业即时通讯平台</p>
      </div>

      <!-- 登录表单 -->
      <el-form class="login-form" v-if="isLogin" :rules="login_rules" ref="loginFormRef" :model="loginForm">
        <el-form-item class="form-group" prop="email">
          <label class="form-label">邮箱</label>
          <el-input :prefix-icon="User" placeholder="请输入邮箱" v-model="loginForm.email" />
        </el-form-item>

        <el-form-item class="form-group" prop="password">
          <label class="form-label">密码</label>
          <el-input type="password" :prefix-icon="Lock" placeholder="请输入密码" v-model="loginForm.password" />
        </el-form-item>

        <div class="form-actions">
          <a href="#" class="forgot-link">忘记密码？</a>
        </div>
        <button type="button" class="btn-login" @click="handleLogin">
          登录
        </button>
      </el-form>

      <!-- 注册表单 -->
      <el-form class="login-form" v-else ref="registerFormRef" :rules="register_rules" :model="registerForm">
        <el-form-item class="form-group" prop="nickname">
          <label class="form-label">用户名</label>
          <el-input :prefix-icon="UserFilled" placeholder="请输入您的用户名" v-model="registerForm.nickname" />
        </el-form-item>
        <el-form-item class="form-group" prop="name">
          <label class="form-label">姓名</label>
          <el-input :prefix-icon="UserFilled" placeholder="请输入您的真实姓名" v-model="registerForm.name" />
        </el-form-item>

        <el-form-item class="form-group" prop="email">
          <label class="form-label">邮箱</label>
          <el-input :prefix-icon="User" placeholder="请输入邮箱" v-model="registerForm.email" />
        </el-form-item>

        <el-form-item class="form-group" prop="password">
          <label class="form-label">密码</label>
          <el-input type="password" :prefix-icon="Lock" placeholder="请设置密码（至少6位）" v-model="registerForm.password" />
        </el-form-item>

        <el-form-item class="form-group" prop="confirmPassword">
          <label class="form-label">确认密码</label>
          <el-input type="password" :prefix-icon="Lock" placeholder="请再次输入密码" v-model="registerForm.confirmPassword" />
        </el-form-item>

        <button type="button" class="btn-login" @click="handleRegister">
          注册
        </button>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { User, Lock, UserFilled } from '@element-plus/icons-vue';
import { ElNotification } from 'element-plus';

import useLoginRegister from '../../store/modules/loginRegister'
let LoginRegister = useLoginRegister()
import { useRouter } from 'vue-router'
const $router = useRouter()

import { getLoginRules, getRegisterRules } from '../../utils/rules'
const register_rules = computed(() => getRegisterRules(registerForm.value))
const login_rules = computed(() => getLoginRules(loginForm.value))

const isLogin = ref(true);

// 登录表单数据
const loginForm = ref({
  email: '',
  password: ''
});

const loginFormRef = ref()

// 注册表单数据
const registerForm = ref({
  nickname: '',
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
});
const registerFormRef = ref()

// 空方法定义，避免点击事件报错
const handleLogin = async () => {
  await loginFormRef.value.validate()
  const payload = {
    email: loginForm.value.email,
    password: loginForm.value.password,
  }
  try {
    await LoginRegister.login(payload)
    ElNotification({ type: 'success', message: '登录成功' })
    $router.push('/')
  } catch (error: any) {
    console.log(error.message)
    ElNotification({ type: 'error', message: '登录失败' })
  }
};

const handleRegister = async () => {
  await registerFormRef.value.validate()
  const payload = {
    email: registerForm.value.email,
    password: registerForm.value.password,
    name: registerForm.value.name,
    nickname: registerForm.value.nickname,
  }
  try {
    await LoginRegister.register(payload)
    ElNotification({ type: 'success', message: '注册成功' })
    isLogin.value = true
  } catch (error: any) {
    console.log(error.message)
    ElNotification({ type: 'error', message: '注册失败' })
  }


};
</script>

<style scoped>
.login-container {
  width: 450px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", "Segoe UI", Roboto, sans-serif;
  /* background-color: #f5f7fa; */
}

.login-box {
  width: 100%;
  max-width: 420px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 32px;
}

/* 标签样式 */
.tabs {
  display: flex;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #f5f7fa;
  overflow: hidden;
}

.tab {
  flex: 1;
  padding: 12px 0;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab.active {
  background-color: #3f51b5;
  color: white;
}

.login-header {
  text-align: center;
  margin-bottom: 28px;
}

.logo {
  font-size: 28px;
  font-weight: 700;
  color: #3f51b5;
  margin-bottom: 8px;
}

.tagline {
  color: #5f6368;
  font-size: 14px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  color: #202124;
  font-weight: 500;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  font-size: 13px;
  flex-wrap: wrap;
}

/* 注册表单的协议样式 */
.form-actions .checkbox-label {
  line-height: 1.4;
}

.terms-link {
  color: #3f51b5;
  text-decoration: none;
  margin: 0 2px;
}

.terms-link:hover {
  text-decoration: underline;
}

.checkbox-label {
  display: flex;
  align-items: center;
  color: #5f6368;
  cursor: pointer;
}

.form-checkbox {
  margin-right: 8px;
}

.forgot-link {
  color: #3f51b5;
  text-decoration: none;
}

.forgot-link:hover {
  text-decoration: underline;
}

.btn-login {
  width: 100%;
  padding: 14px;
  background: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

.btn-login:hover {
  background: #303f9f;
}

.btn-login:active {
  transform: scale(0.98);
}

.form-footer {
  margin-top: 16px;
  text-align: center;
  color: #5f6368;
  font-size: 14px;
}

.register-link {
  color: #3f51b5;
  margin-left: 4px;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
