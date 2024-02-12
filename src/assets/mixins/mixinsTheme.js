export default {
  computed: {
    isDarkTheme () {
      return this.$store.state.darkTheme
    }
  },
  methods: {
    toggleTheme () {
      this.$store.dispatch('toggleTheme')
    }
  }
}
