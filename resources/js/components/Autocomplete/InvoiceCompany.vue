<template>
 <div>
   <input type="hidden" name="company_id" v-model="id">
  <input autocomplete="off" type="text" :placeholder="placeholder" v-model="search" v-on:keyup="autoComplete" class="form-control">
  <div class="panel-footer" v-if="results.length">
   <ul class="list-group">
    <li v-on:click="set(result)" class="list-group-item" v-for="result in results">
     {{ result.company_name }}
    </li>
   </ul>
  </div>
 </div>
</template>
<script>
 export default{
   props: {
     placeholder: String,
  },
  data(){
   return {
    search: '',
    id: '',
    results: []
   }
  },
  methods: {
    set(company){
      this.id = company.id;
      this.search = company.company_name;
      this.results = []
    },
   autoComplete(){
    this.results = [];
    if(this.search.length > 2){
     axios.get('autocomplete/invoicecompany',{params: {search: this.search}}).then(response => {
      this.results = response.data;
     });
    }
   }
  }
 }
</script>
