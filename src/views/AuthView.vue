<template>
    <div class="auth">
        <h1>Estamos en auth</h1>
        <LoginComponent v-if="showLogin" :changeForm="changeForm"/>
        <RegisterComponent v-if="!showLogin" :changeForm="changeForm"/>
    </div>
</template>

<script>

import {ref} from "vue";
import LoginComponent from '@/components/Auth/LoginComponent.vue';
import RegisterComponent from '@/components/Auth/RegisterComponent.vue';

export default {
    name: "AuthView",
    components: {
        LoginComponent,
        RegisterComponent
    },
    setup(){

        let showLogin = ref(false);
        const changeForm = () => {
            showLogin.value = !showLogin.value;
        }

        return{
            showLogin,
            changeForm
        }
    }
}
</script>

<style>
.auth{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(4, 78, 157);
    background: linear-gradient(0deg, rgba(4, 78, 157, 1) 0%, rgba(0, 174, 255, 1) 100%);
}
</style>