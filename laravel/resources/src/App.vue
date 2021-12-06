<template>
<<<<<<< HEAD
    <div id="app">
        <Todos />
        <router-link :to="{ name: 'login' }">login</router-link>
        <hr />
        <router-link :to="{ name: 'signup' }">Signup</router-link>
    </div>
</template>

<script>
import Todos from "./components/Todos";

export default {
    name: "App",
    components: { Todos },
    data() {
        return {
            show: true,
        };
    },
};
=======
  <div class="d-flex">
    <router-link to="/blogs" class="btn">Blog</router-link>
    <router-link to="/blogs/create" class="btn">Create</router-link>
  </div>

  <div class="container">
    <div class="row">
      <div class="col">

          <router-view :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
	return {
	}
  },

  methods: {
	clickTask(task) {
	  this.activeTask = task;
	}
  }
}
>>>>>>> 8dfdccdc99595e7358dc801582f0eb797abc57f3
</script>

<style></style>
