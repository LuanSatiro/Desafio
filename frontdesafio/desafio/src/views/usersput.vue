<template>
<div class="container-fluid mt-5">
    <div class="row">
        <div class="col ">
            <p class="">
                Id: {{id}}
            </p>
        </div>
        <div class="col ">
            <p class=""> 
                Nome: {{name}}
            </p>
        </div>
        <div class="col-sm-6">
            <p class="">
                Email: {{email}}
            </p>
        </div>
    </div>
  </div>
<div class="container-fluid text-center" style="width:30%; margin-top:5%;">
  <h3>Atualizar usuário</h3>
  <Form @submit="atualizar()" :validation-schema="schema ">
    <div class="input-group mb-3">
        <Field name='username'  v-model="username.username"  type="text"  class="form-control" placeholder="Nome" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
    <ErrorMessage name="username" />
    <div class="input-group mb-3">
        <Field name="emailput" v-model="emailput.emailput" type="text" class="form-control" id="Inputemailput" placeholder="email"/>
    </div>
    <ErrorMessage name="emailput" />
    <div class=" mb-3 text-center">
        <button  type="submit" class="btn btn-secondary">Atualizar</button>
    </div>
  </Form>

</div>

</template>

<script>
import axios from 'axios'

import { Field, Form, ErrorMessage} from 'vee-validate';
import * as yup from 'yup'
import { setLocale } from 'yup';
setLocale({
    mixed: {
      default: 'Não é válido',
      required: 'Uma entrada é exigida',
    },
    string: {
      required: 'Uma entrada é exigida',
      email:'insira um email válido'
    },


});
// now use Yup schemas AFTER you defined your custom dictionary
let schema = yup.object().shape({
  username: yup.string().required(),
  emailput: yup.string().email().required(),
});

export default {
  name: 'App',
  components:{
    Field,
    Form,
    ErrorMessage
  },
  data () {
    return{
      schema,
      username:{username:''},
      emailput:{emailput:''},
      id:null,
      name:null,
      email:null
    };
  },
  mounted () {
      axios
      .get(`http://localhost:3000/users/${this.$route.params.id}`)
      .then(response => (this.id = response.data.id, this.name = response.data.name, this.email = response.data.email))
  },
  methods:{
    atualizar(){
        axios.put(`http://localhost:3000/users/put/${this.$route.params.id}`, {
        name: this.username.username,
        email: this.emailput.emailput
        }, {
        headers: {
            'contentType': 'application/json',
        }
        })
        .then((response) => {
        console.log(response);
        this.$router.push({
        name: 'users'
        });
        }, (error) => {
        console.log(error);
        alert("Já existe um email com esse valor, tente um diferente");
        });
    },
  }
};


</script>
<style>


</style>