<template>
  <v-container fluid pa-0>
    <v-layout row>
      <v-flex>
        <v-form>
          <v-text-field multi-line label="Post a Mpritt!" v-model="content">
          </v-text-field>
        </v-form>
        <v-btn @click="postMpritt">
          Post Mpritt
        </v-btn>
      </v-flex>
      
    </v-layout>
    <h1>Mpritts...</h1>
    <v-container fluid>  
        <v-layout fluid>
          <v-flex>
            <v-text-field label="Search Mpritt by hashtag!" v-model="searchTag" @keyup="findByTag">

          </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout>
        </v-layout>
    </v-container>
    <v-layout v-for="(post, i) in allPosts" :key="i">
      <post-box :post="post"></post-box>
    </v-layout>
  </v-container>
</template>

<script>
import PostBox from './PostBox'
export default {
  data () {
    return {
      content: null
    }
  },
  components: {
    PostBox
  },
  computed: {
    allPosts () {
      return this.$store.state.allPosts
    },
    searchTag: {
      set (value) {
        this.$store.state.searchTag = value
      }
    }
  },
  methods: {
    postMpritt () {
      this.$axios({
        method: 'POST',
        url: `/posts`,
        headers: {token: localStorage.token},
        data: {
          content: this.content
        }
      })
        .then(response => {
          this.$store.commit('getAllPosts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    findByTag () {
      this.$store.commit('getAllPosts')
    }
  }
}
</script>

<style>

</style>
