<template>
  <b-container>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <b-link :to="{ name: 'form1' }">formulario1</b-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Formulario 2
        </li>
      </ol>
    </nav>
    <h1>Nombre completo (separando nombre y apellidos) - Validar nombre y apellido paterno, el materno no es obligatorio</h1>
    <b-col>
      <router-view/>
    </b-col>
    <div>
      <b-form @submit.prevent="checkForm" novalidate>
        <b-alert variant="danger" dismissible :show="errors.length > 0">
          <b>{{
            errors.length > 1
              ? "Corrige los siguientes errores:"
              : "Corrige el siguiente error:"
          }}</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </b-alert>

        <b-form-group id="name-group" label="Nombre" label-for="name" :state="validateField('name')">
          <b-form-input id="name" v-model="formData.name" type="text" name="name" required></b-form-input>
        </b-form-group>

        <b-form-group id="lastname-group" label="Apellido Paterno" label-for="lastname"
          :state="validateField('lastname')">
          <b-form-input id="lastname" v-model="formData.lastname" type="text" name="lastname" required></b-form-input>
        </b-form-group>

        <b-form-group id="maternal-group" label="Apellido Materno" label-for="maternal" :state="true">
          <b-form-input id="maternal" v-model="formData.maternal" type="text" name="maternal"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Enviar</b-button>

      </b-form>
    </div>
  </b-container>
</template>

<script>
import router from "@/router";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      errors: [],
      formData: {
        name: "",
        lastname: "",
        maternal: "",
      },
      items: [
        {
          text: "form1",
          href: "form1",
        },
        {
          text: "Formulario2",
          active: true,
        },
      ],
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.formData.name) {
        this.errors.push("Nombre es obligatorio.");
      }

      if (!this.formData.lastname) {
        this.errors.push("Apellido Paterno es obligatorio.");
      }

      if (!this.errors.length) {
        console.log("Formulario válido, se puede enviar.");
        router.push('/form2');
      } else {
        console.log("Hay errores en el formulario.");
        e.preventDefault();
      }
    },

    validateField: function (fieldName) {
      return this.formData[fieldName] ? null : false;
    },

    navegarSiguiente() {
      this.$router.push({ name: "form2" });
    },
  },
});
</script>

<style></style>