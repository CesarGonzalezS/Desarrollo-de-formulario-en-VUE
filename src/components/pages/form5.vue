<template>
    <b-container>
        <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <b-link :to="{ name: 'form1' }">Formulario1 </b-link> /
          <b-link :to="{ name: 'form2' }"> Formulario2</b-link> /
          <b-link :to="{ name: 'form3' }"> Formulario3</b-link> /
          <b-link :to="{ name: 'form4' }"> Formulario4</b-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Formulario 5
        </li>
      </ol>
    </nav>
        <h1>Número telefónico - validar el tamaño de caracteres.</h1>
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

                <b-form-group id="telefono-group" label="Telefono" label-for="telefeno" :state="validateField('telefono')">
                    <b-form-input id="telefono" v-model="formData.telefono" type="text" name="telefono" required></b-form-input>
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
                telefono: "",
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
          text: "fomrulario4",
          href: "form4",
        },
        {
          text: "Formulario5",
          active: true,
        },
      ],
    methods: {
        checkForm: function (e) {
            this.errors = [];

            if (!this.formData.telefono) {
                this.errors.push("Telefono es obligatorio.");
            } else {
                const telefono = this.formData.telefono;
                const telefonoRegex = /^[0-9]{10}$/;
                if (!telefonoRegex.test(telefono)) {
                    this.errors.push("Telefono debe ser valido.");
                }
            }

            if (this.errors.length === 0) {
                router.push({ name: "form6" });
            }
        },
        validateField: function (field) {
            return this.errors.find((error) => error.includes(field));
        },
    },
});

</script>

<style>

</style>