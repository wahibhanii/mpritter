<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="gotoHome">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile @click="gotoUserProfile">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>User Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-layout >
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
            <v-text-field label="email" v-model="email"></v-text-field>
            <v-text-field label="password" v-model="password"></v-text-field>

          </v-list-tile-content>
          <v-btn @click="login"> login</v-btn>
        </v-layout>
        <v-layout @click="signup">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Signup</v-list-tile-title>
            <v-text-field label="username" v-model="sUserName"></v-text-field>
            <v-text-field label="email" v-model="sEmail"></v-text-field>
            <v-text-field label="password" v-model="sPassword"></v-text-field>
          </v-list-tile-content>
          <v-btn @click="signup"> Signup</v-btn>
        </v-layout>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Mpritter</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy;wahibhanii-2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      email: null,
      password: null,
      sEmail: null,
      sUserName: null,
      sPassword: null
    }),
    props: {
      source: String
    },
    methods: {
      login () {
        this.$axios({
          method: 'POST',
          url: `/users/login`,
          headers: {token: localStorage.token},
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then(response => {
            this.email = null
            this.password = null
            this.$store.commit('getAllPosts')
            localStorage.setItem('token', response.data.token)
          })
          .catch(err => {
            console.log(err)
          })
      },
      signup () {
        this.$axios({
          method: 'POST',
          url: `/users`,
          headers: {token: localStorage.token},
          data: {
            email: this.sEmail,
            password: this.sPassword,
            userName: this.sUserName
          }
        })
          .then(response => {
            this.sEmail = null
            this.sPassword = null
            this.sUserName = null
            this.$store.commit('getAllPosts')
          })
          .catch(err => {
            console.log(err)
          })
      },
      gotoHome () {
        console.log('home')
        this.$router.push({name: 'HomePage'})
      },
      gotoUserProfile () {
        console.log('userProfile')
        this.$router.push({name: 'UserProfile'})
      }
    }
  }
</script>