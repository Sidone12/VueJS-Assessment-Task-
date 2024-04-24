<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useRouter } from "vue-router";
import { reactive } from 'vue';

const router = useRouter();


const formData = reactive({
    email: '',
    password: '',
})

const rules = {
    email: { required, email },
    password: { required },
}

const v$ = useVuelidate(rules, formData)

const submitForm = async () => {
    const result = await v$.value.$validate()

    if (!v$.value.$error) {
        router.push('/game')
    } else {
        alert('Form must be correct')
    }
}
</script>


<template>
<v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
        <v-row class="d-flex align-center justify-center">
            <v-card title="Form" width="400" class="py-4">
                <v-sheet class="mx-auto" width="300">
                    <v-form @submit.prevent="submitForm">
                        <v-text-field @blur="v$.email.$touch" @input="v$.email.$touch" v-model="formData.email" label="E-mail" :error-messages="v$.email.$errors.map(e => e.$message)"></v-text-field>
                        <v-text-field @blur="v$.password.$touch" @input="v$.password.$touch" v-model="formData.password" label="Password" type="password" :error-messages="v$.password.$errors.map(e => e.$message)"></v-text-field>
                        <v-row>
                            <v-col>
                                <v-btn type="submit" color="indigo">login</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-sheet>
            </v-card>
        </v-row>
    </v-responsive>
</v-container>
</template>
