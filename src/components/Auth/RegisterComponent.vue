<template>
    <div class="register">
        <h1>Crear cuenta</h1>

        <form class="ui form formulario" @submit.prevent="onRegister">
            <div class="field">
                <input type="email" placeholder="Correo electronico" v-model="formData.email">
            </div>
            <div class="field">
                <input type="password" placeholder="Contraseña" v-model="formData.password">
            </div>
            <div class="field">
                <input type="password" placeholder="Repetir Contraseña" v-model="formData.repeatPassword">
            </div>
            <button type="submit" class="ui button positive fluid">Registrar</button>
        </form>

        <p @click="changeForm">Iniciar sesion</p>
    </div>
</template>

<script>
export default {
    name: "RegisterComponent",
    props: {
        changeForm: Function,
    },
    setup(){
        let formData = {};

        const onRegister = () => {
            console.log(formData);
            
        };

        return{
            formData,
            onRegister
        }
    }
}
</script>

<style lang="scss" scoped>
.register{
    background-color: white;
    padding: 30px;
    box-shadow: 0 0 38px -5px rgba(0,0,0,0.45);
    width: 400px;
    border-radius: 10px;
}

h1{
    text-align: center;
    margin-bottom: 30px;
}

.formulario{

    input.error{
        border-color: #faa;
        background-color: #ffeded;
    }
}

p{
    text-align: center;
    margin-top: 30px;
    cursor: pointer;

    &.hover{
        cursor: pointer;
        opacity: 0.6;
    }
}
</style>