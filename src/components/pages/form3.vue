<template>
    <b-container>
      <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <b-link :to="{ name: 'form1' }">Formulario1 </b-link>/
          <b-link :to="{ name: 'form2' }"> Formulario2</b-link>

        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Formulario 3
        </li>
      </ol>
    </nav>

      <h1>Fecha de nacimiento - No es presente ni futura, poner un límte de 18 años</h1>
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
  
          <b-form-group id="birthdate-group" label="Fecha de Nacimiento" label-for="birthdate" :state="validateField('birthdate')">
            <b-form-input id="birthdate" v-model="formData.birthdate" type="date" name="birthdate" required></b-form-input>
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
          birthdate: "",
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
          text: "Formulario3",
          active: true,
        },
      ],
    methods: {
      checkForm: function (e) {
        this.errors = [];
  
        if (!this.formData.birthdate) {
          this.errors.push("Fecha de Nacimiento es obligatoria.");
        } else {
          const birthdate = new Date(this.formData.birthdate);
          const currentDate = new Date();
  
          if (birthdate >= currentDate) {
            this.errors.push("La fecha de nacimiento no puede ser presente ni futura.");
          } else {
            const ageDifference = currentDate.getFullYear() - birthdate.getFullYear();
            if (ageDifference < 18) {
              this.errors.push("Debes tener al menos 18 años.");
            }
          }
        }
  
  
        if (this.errors.length === 0) {
          console.log("Formulario válido, se puede enviar.");
          router.push('/form4'); 
        } else {
          console.log("Hay errores en el formulario.");
          e.preventDefault();
        }
      },
  
      validateField: function (fieldName) {
        return this.formData[fieldName] ? null : false;
      },
    },
  });
  </script>
  
  <style></style>
  