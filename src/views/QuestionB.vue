<template>
  <div class="question-b-container">
    <input
    class="search-field"
      type="text"
      v-model="$store.state.searchParam"
      @input="handleSearch"
      placeholder="Search users..."
    />
    <div class="table-container">
      <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th class="th-sm">Name</th>
          <th class="th-sm">Email</th>
          <th class="th-sm">User Name</th>
          <th class="th-sm">Website</th>
          <th class="th-sm">Company</th>
          <th class="th-sm">Address</th>
          <th class="th-sm">Phone Number</th>   
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in paginatedAndFilteredUsers" :key=user.id>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.username}}</td>
          <td>{{user.website}}</td>
          <td>{{user.company}}</td>
          <td>{{user.address}}</td>
          <td>{{user.phone}}</td>
        </tr>
      </tbody>
      </table>
    </div>
    <div v-if="paginatedAndFilteredUsers.length === 0">No users Found</div>
    <div class="pagination d-flex justify-content-end align-items-center">
      <button class= "prev-next-btn" @click="prevPage" :disabled="currentPage === 1">Prev</button>
      <span class="pages-display">{{ currentPage }} <span>of</span> {{ totalPages }}</span>
      <button class= "prev-next-btn" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['currentPage', 'searchParam']),
    ...mapGetters(['getUsers', 'totalPages', 'paginatedUsers', 'filteredUsers']),
    paginatedAndFilteredUsers() {
      const start = (this.currentPage - 1) * 2;
      const end = start + 2;
      return this.filteredUsers.slice(start, end);
    },
  },
  methods: {
    ...mapActions(['fetchUsersData', 'setPage', 'setSearchQuery']),
    prevPage() {
      if (this.currentPage > 1) {
        this.setPage(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.setPage(this.currentPage + 1);
      }
    },
    handleSearch() {
      this.setPage(1);
      this.setSearchQuery(this.$store.state.searchParam);
    },
  },
  created() {
    this.fetchUsersData();
  }
}
</script>

<style scoped>
.question-b-container{
  padding: 40px;
}
.search-field {
  width: 80%;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid black;
}

.table-container{
  padding-top: 40px;
}
.prev-next-btn{
  font-size: 18px;
  border-radius: 3px;
  background-color: #01518A;
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 6px 30px;
}
.prev-next-btn[disabled]{
  cursor: not-allowed;
  opacity: 0.5;
}
.pages-display {
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
}
table {
  border: 1px solid transparent;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
}
.th-sm{
  background-color: #01518A;
  color: #fff;
}

</style>
