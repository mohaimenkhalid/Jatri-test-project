<template>
  <nav class="d-flex justify-content-between">
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
    <div>
      <label>Per Page</label>
      <select v-model.number="pageLimit" class="form-control">
        <option value="1">1</option>
        <option value="4" selected>4</option>
        <option value="8">8</option>
        <option value="50">50</option>
        <option value="80">80</option>
        <option value="100">100</option>
      </select>
    </div>

  </nav>
</template>

<script>
  export default {
    name: "Pagination",
    props: ["totalRecords"],
    emits: ['onPageChange'],

    data () {
      return {
          totalPages: 0,
          pageLimit: 4,
          activePage: 1
      }
    },
    created() {
      this.setTotalPage()
    },
    mounted() {
      this.onPageChangeAction()
    },
    methods: {
      gotoPage(page) {
        this.activePage = page;
        this.onPageChangeAction()
      },
      onPageChangeAction() {
        const pageData = {
          totalPages: this.totalPages,
          pageLimit: this.pageLimit,
          activePage: this.activePage
        };
        this.$emit('onPageChange', pageData)
      },
      setTotalPage() {
        this.totalPages = Math.ceil(this.totalRecords.length/this.pageLimit) ;
      }
    },
    watch: {
      totalRecords() {
        this.setTotalPage()
        this.activePage = 1
        this.onPageChangeAction()
      },
      pageLimit() {
        this.setTotalPage()
        this.activePage = 1
        this.onPageChangeAction()
      }
    }
  }
</script>
