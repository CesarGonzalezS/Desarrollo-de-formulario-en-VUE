<template>
   <b-conainer>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <b-link :to="{ name: 'form1' }">Formulario1 </b-link>/
          <b-link :to="{ name: 'form2' }"> Formulario2</b-link> /
          <b-link :to="{ name: 'form3' }"> Formulario3</b-link>


        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Formulario 4
        </li>
      </ol>
    </nav>
    <h1>Correo electrónico - validar por medio de una expresión regular.</h1>
    <div>
        <b-form @submit.prevent="checkForm" novalidate>
        <b-alert variant="danger" dismissible :show="errors.length > 0">
            <b>{{
                errors.length >1
                 ? "Corrige los siguientes errores:" 
                 : "Corrige el siguiente error:"
                 }}</b>
            <ul>
                <li v-for="error in errors" :key="error">{{error}}</li>
            </ul>
        </b-alert>

        <b-form-group id="email-group" label="Correo electronico" label-for="email" :state="validateField('email')">
            <b-form-input id="email" v-model="formData.email" type="email" name="email" required></b-form-input>
        </b-form-group>

        <b-button type="sumbit" variant="primary">Enviar</b-button>

        </b-form>
    </div>
   </b-conainer>
</template>

<script>
import router from "@/router";
import Vue from "vue";

export default Vue.extend({
    data(){
        return{
            errors: [],
            formData: {
                email: "",
            },
        };
    },items: [
        {
          text: "inicio",
          href: "form1",
        },
        {
          text: "fomrulario2",
          href: "form2",
        },
        {
          text: "fomrulario3",
          href: "form3",
        },
        {
          text: "Formulario4",
          active: true,
        },
      ],
    methods: {
        checkForm: function (e) {
            this.errors = [];

            if (!this.formData.email) {
                this.errors.push("Correo electronico es obligatorio.");
            } else {
                const email = this.formData.email;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    this.errors.push("Correo electronico debe ser valido.");
                }
            }

            if (this.errors.length === 0) {
                router.push({ name: "form5" });
            }
        },
        validateField: function (field) {
            return this.errors.find((error) => error.includes(field))
              ? false
              : null;
          },
    },
});

</script>

<style>

</style>