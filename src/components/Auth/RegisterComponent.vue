<template>
    <div class="register">
        <h1>Crear cuenta</h1>

        <form class="ui form">
            <div class="field">
                <input type="email" placeholder="Correo electronico">
            </div>
            <div class="field">
                <input type="password" placeholder="Contraseña">
            </div>
            <div class="field">
                <input type="password" placeholder="Repetir Contraseña">
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

form{

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
        opacity: 0.1;
    }
}
</style>