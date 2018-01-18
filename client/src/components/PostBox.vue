<template>
<v-flex wrap>
  {{post.poster.userName}}: {{post.content}}
</v-flex>
  
</template>

<script>
export default {
  props: ['post']
}
</script>

<style>

</style>
