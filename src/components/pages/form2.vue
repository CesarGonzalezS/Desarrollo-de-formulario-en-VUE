<template>
  <b-container>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <b-link :to="{ name: 'form1' }">Formulario1</b-link>

        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Formulario 2
        </li>
      </ol>
    </nav>
    <h1>Dirección (CP, Calle, número, Ciudad).</h1>
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

        <b-form-group id="cp-group" label="Codigo Postal" label-for="cp" :state="validateField('cp')">
          <b-form-input name="cp" v-model="formData.cp" type="text" placeholder="Codigo postal" pattern="[0-9]{5}" required></b-form-input>
        </b-form-group>

        <b-form-group id="calle-group" label="Calle" label-for="calle" :state="validateField('calle')">
          <b-form-input id="calle" v-model="formData.calle" type="text" name="calle" required></b-form-input>
        </b-form-group>
        
        <b-form-group id="numero-group" label="Numero" label-for="numero" :state="validateField('numero')">
          <b-form-input id="numero" v-model="formData.numero" type="text" name="numero" required pattern="[0-9]+"></b-form-input>
        </b-form-group>

        <b-form-group id="ciudad-group" label="Ciudad" label-for="ciudad" :state="validateField('ciudad')">
          <b-form-input id="ciudad" v-model="formData.ciudad" type="text" name="ciudad" required></b-form-input>
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
        cp: "",
        calle: "",
        numero: "",
        ciudad: "",
      },
      items: [
        {
          text: "formulario1",
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

      if (!this.formData.cp || !/^[0-9]{5}$/.test(this.formData.cp)) {
        this.errors.push("Codigo Postal es obligatorio y debe tener 5 dígitos.");
      }

      if (!this.formData.calle) {
        this.errors.push("Calle es obligatorio.");
      }

      if (!this.formData.numero || !/^[0-9]+$/.test(this.formData.numero)) {
        this.errors.push("Numero es obligatorio y debe contener solo dígitos.");
      }

      if (!this.formData.ciudad) {
        this.errors.push("Ciudad es obligatorio.");
      }

      if (this.errors.length === 0) {
        console.log("Formulario válido, se puede enviar.");
        router.push('/form3'); 
      } else {
        console.log("Hay errores en el formulario.");
        const firstErrorField = this.errors[0].split(' ')[0].toLowerCase();
        this.$refs[firstErrorField].focus();
        e.preventDefault();
      }
    },

    validateField: function (fieldName) {
      return this.formData[fieldName] ? null : false;
    },
    navegarSiguiente() {
      this.$router.push({ name: "form3" });
    },
  },
});
</script>
