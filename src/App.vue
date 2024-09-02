<template>
	<template v-if="user">
		<router-view/>
	</template>
	<AuthView v-if="!user && user !== undefined"/>
</template>

<script>

import {auth} from "./utils/firebase";
import { useStore } from "vuex"
import { onMounted, computed } from 'vue';
import AuthView from "./views/AuthView.vue";

export default {
	name: "App",
	components: {
		AuthView
	},
	setup() {

		const store = useStore();
		const user = computed(() => store.state.user)

		onMounted(()=>{
			auth.onAuthStateChanged((user) => {
				store.commit("setUser", user)
			
			})
		});

		return{
			user
		}

	}
}
</script>


<style lang="scss">

</style>
