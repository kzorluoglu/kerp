<template>
 <div>
   <input type="hidden" name="customer_id" v-model="id">
  <input autocomplete="off" type="text" :placeholder="placeholder" v-model="search" v-on:keyup="autoComplete" class="form-control">
  <div class="panel-footer" v-if="results.length">
   <ul class="list-group">
    <li v-on:click="set(result)" class="list-group-item" v-for="result in results">
     {{ result.company_name }}  {{ result.firstname }} {{ result.lastname }}
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
    set(customer){
      this.id = customer.id;
      this.search = customer.company_name +" "+ customer.firstname +" "+ customer.lastname;
      this.results = []
    },
   autoComplete(){
    this.results = [];
    if(this.search.length > 2){
     axios.get('autocomplete/invoicecustomer',{params: {search: this.search}}).then(response => {
      this.results = response.data;
     });
    }
   }
  }
 }
</script>
