<template>
  <nav>
    <ul class="pagination">
      <li class="page-item"
          :class="this.activePage === 1 ? 'disabled': ''"
          @click="
            this.activePage !== 1 &&
            this.gotoPage(this.activePage - 1)
          "
      >
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <li class="page-item"
          :class="index === activePage ? 'active': ''"
          v-for="index in totalPages"
          :key="index"
          @click="this.gotoPage(index)"
      >
        <a class="page-link" href="#">{{ index }}</a>
      </li>
      <li class="page-item"
          :class="this.activePage === this.totalPages ? 'disabled': ''"
          @click="
            this.activePage !== this.totalPages &&
            this.gotoPage(this.activePage + 1)
          "
      >
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "Pagination",
    props: ["totalRecords"],
    data () {
      return {
          totalPages: 0,
          pageLimit: 3,
          activePage: 1
      }
    },
    created() {
      this.totalPages = Math.ceil(this.totalRecords.length/this.pageLimit) ;
    },
    mounted() {
      const pageData = {
        totalPages: this.totalPages,
        pageLimit: this.pageLimit,
        activePage: this.activePage
      };
      this.$emit('onPageChange', pageData)
    },
    methods: {
      gotoPage(page) {
        this.activePage = page;
        const pageData = {
          totalPages: this.totalPages,
          pageLimit: this.pageLimit,
          activePage: this.activePage
        };
        this.$emit('onPageChange', pageData)
      }
    }
  }
</script>
