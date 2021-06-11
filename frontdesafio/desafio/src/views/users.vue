<template>
<div>
  <h5 class="mt-5">Pessoas para o amigo secreto</h5>
  <div v-for="user in info" :key="user">
    {{user.name}}
  </div>
  <button @click="sorteio()" class="btn btn-secondary ms-2 mt-3">Sortear </button>
  <h5 class="mt-5">Resultado sorteio</h5>
  <div v-for="user in resultado" :key="user">
    {{user.dar.name}} Tirou {{user.receber.name}}
    <button @click="sendemail(user)" class="btn btn-secondary ms-2 mt-3">Enviar email</button>
  </div>
  <h5 class="mt-5">Alterar usuários</h5>
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
    return{info:null, sorteado:null, resultado:null};
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
    },
    sorteio(){
      axios
      .get('http://localhost:3000/users')
      .then((response) => {this.sorteado = response.data,
      this.sorteado.sort(() => (Math.random() > .5) ? 1: -1);
      var result = []
      for(let i=0;i<this.sorteado.length-1;++i){
        result.push({
          dar:this.sorteado[i],
          receber:this.sorteado[i+1]
        })
      }
      result.push({
          dar:this.sorteado[this.sorteado.length-1],
          receber:this.sorteado[0]
      })
      console.log(result)
      this.resultado=result
      })

    },
    sendemail(user){
        axios.post('http://localhost:3000/users/email', {
        from: `${user.dar.name} <${user.dar.email}>`,
        to: `${user.receber.name} <${user.receber.email}>`,
        subject: 'Amigo Secreto',
        text: 'Eu tirei você, o que você quer?',
        html: '<p>Eu tirei você, o que você quer?</p>'
        }, {
        headers: {
            'contentType': 'application/json',
        }
        })
        .then((response) => { console.log(response);
        alert("Email enviado");}, (error) => {
        console.log(error);
        });
    },
  }
};


</script>
<style>
</style>
