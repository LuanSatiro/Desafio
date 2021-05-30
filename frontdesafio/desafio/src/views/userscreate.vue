<template>
<div class="container-fluid text-center" style="width:30%; margin-top:5%;">
 
    <h1>Criar Novo usuário</h1>
    <Form @submit="enviar()" :validation-schema="schema ">
        <div class="input-group mb-3">
            <Field name='username'  v-model="username.username"  type="text"  class="form-control" placeholder="Nome" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <ErrorMessage name="username" />
        <div class="input-group mb-3">
            <Field name="email" v-model="email.email" type="text" class="form-control" id="Inputemail" placeholder="email"/>
        </div>
        <ErrorMessage name="email" />
        <div class=" mb-3 text-center">
            <button type="submit" class="btn btn-secondary">Cadastrar</button>
        </div>
    </Form>
  
</div>


</template>


<script>



import { Field, Form, ErrorMessage} from 'vee-validate';
import * as yup from 'yup'
import axios from 'axios'
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

let schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
});


export default {
  name: 'App',
  components: {
    Field,
    Form,
    ErrorMessage
 
  },
  data() {
    return {
      schema,
      username:{username:''},
      email:{email:''},
      errors:null
    };
  },
  methods:{
    enviar(){
      
        axios.post('http://localhost:3000/users/create', {
        name: this.username.username,
        email: this.email.email
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
    }
},
}

</script>