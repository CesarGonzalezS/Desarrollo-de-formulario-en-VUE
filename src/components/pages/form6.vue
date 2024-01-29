<template>
  <b-container>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <b-link :to="{ name: 'form1' }">Formulario1 </b-link> /
          <b-link :to="{ name: 'form2' }"> Formulario2</b-link> /
          <b-link :to="{ name: 'form3' }"> Formulario3</b-link> /
          <b-link :to="{ name: 'form4' }"> Formulario4</b-link> /
          <b-link :to="{ name: 'form5' }"> Formulario5</b-link>

        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Formulario 6
        </li>
      </ol>
    </nav>
    <h1>Fotografía (PNG) - Validar el tamaño del archivo a menos de 3 mb</h1>
    <div>
        <b-form @sumbit.prevent="checkForm" novalidate>
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

            <b-form-group id="foto-group" label="Foto" label-for="foto" :state="validateField('foto')">
                <b-form-file id="foto" v-model="formData.foto" type="file" name="foto" accept=".png, image/png" required></b-form-file>
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
                foto: "",
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
          text: "fomrulario5",
          href: "form5",
        },
        {
          text: "Formulario6",
          active: true,
        },
      ],
    methods: {
        checkForm: function (e) {
            this.errors = [];

            if (!this.formData.foto) {
                this.errors.push("Foto es obligatorio.");
            } else {
                const foto = this.formData.foto;
                const fotoRegex = /^[0-9]{10}$/;
                if (!fotoRegex.test(foto)) {
                    this.errors.push("Foto debe ser valido.");
                }
            }

            if (this.errors.length === 0) {
                router.push({ name: "" });
            }
        },
        validateField: function (field) {
            return {
                invalid: this.errors.indexOf(field) !== -1,
            };
        },
    },
});
</script>

<style>

</style>