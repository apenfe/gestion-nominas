<template>
    <div class="login">
        <h2>login</h2>
        <button @click="changeForm">Crear nueva cuenta</button>
    </div>
</template>

<script>
export default {
    name: "LoginComponent",
    props: {
        changeForm: Function
    },
    setup(props){

    }
}
</script>

<style>

</style>