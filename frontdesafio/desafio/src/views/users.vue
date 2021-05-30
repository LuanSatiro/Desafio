<template>
<div>
  <h3>Todos os usuários</h3>
  <div
      v-for="users in info" :key="users"
      class="users mt-5">
    <div class="container-fluid">
      <div class="row">
          <div class="col ">
              <p class="">
                  Id: {{ users.id}}
              </p>
          </div>
          <div class="col ">
              <p class=""> 
                  Nome: {{ users.name}}
              </p>
          </div>
          <div class="col-sm-6">
              <p class="">
                  Email: {{ users.email}}
              </p>
          </div>
          <div class="col text-end">   
            <router-link class="btn btn-secondary text-light ms-5" :to="{ name: 'usersput', params: {id: users.id } }">Atualizar</router-link>
          </div>
          <div class="col text-start">
            <button @click="delet(users.id)" class="btn btn-secondary ms-2">Deletar</button>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return{info:null};
  },
  mounted () {
    axios
      .get('http://localhost:3000/users')
      .then(response => (this.info = response.data))
  },
  methods:{
    delet(id){
        axios.delete(`http://localhost:3000/users/delete/${id}`)
        .then((response) => {
        console.log(response);
        window.location.reload(true);
        }, (error) => {
        console.log(error);
        });
    }
  }
};


</script>
<style>
</style>
