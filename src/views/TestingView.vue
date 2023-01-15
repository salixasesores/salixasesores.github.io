<template>
    <div class="sign-up">
        <h1>SignUp</h1>
        <form @submit.prevent="submitForm">
            <input type="name" name="name" v-model="name">
            <input type="lastname" name="lastname" v-model="lastname">
            <input type="email" name="username" v-model="username">
            <input type="password" name="password" v-model="password">
            <button type="submit">Sign Up</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Test2View',
    data() {
        return {
            username: '',
            password: '',
            email: '',
        }
    },
    methods: {
        submitForm() {
            const formData = {
                name: this.name,
                last_name: this.lastname,
                username: this.username,
                password: this.password,
                email: this.username
            }

            axios
                .post('/api/v1/users/', formData)
                .then(response => {
                    this.$router.push('/dashboard/')
                    console.log(response)
                })
        }
    }
}

</script>