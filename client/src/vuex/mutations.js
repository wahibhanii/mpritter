// import jwt from 'jsonwebtoken'
import axios from 'axios'
const baseURL = 'http://localhost:3000'
const mutations = {

  getAllPosts () {
    if (this.state.searchTag !== '' || null) {
      console.log('search by tag')
      axios({
        method: 'GET',
        url: `${baseURL}/posts/search?tag=${this.state.searchTag}`,
        headers: {token: localStorage.token}
      })
        .then(response => {
          this.state.allPosts = response.data.data
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      axios({
        method: 'GET',
        url: `${baseURL}/posts`,
        headers: {token: localStorage.token}
      })
        .then(response => {
          this.state.allPosts = response.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

}

export default mutations
