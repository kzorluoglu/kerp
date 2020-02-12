<template>
 <div>  
    <input type="text" 
    :name="inputname" 
    :id="inputname + rowid"
    :placeholder="placeholder"
    v-model="search" v-on:keyup="autoComplete" class="form-control">

    <div class="panel-footer" v-if="results.length">
      <ul class="list-group">
        <li v-on:click="set(result)" class="list-group-item" v-for="result in results">
          {{ result.product_number }}  {{ result.title }} {{ result.description }}
        </li>
      </ul>
    </div>

 </div>
</template>
<script>
 export default{
   props: {
     defaultvalue: String,
     placeholder: String,
     rowid: Number,
     inputname: String
  },
  data(){
   return {
    search: '',
    id: '',
    results: []
   }
  },
  methods: {
    set(product){
      this.search = product.title;
      document.getElementById("title"+this.rowid).value = product.title;
      document.getElementById("price"+this.rowid).value = product.price;
      document.getElementById("count"+this.rowid).value = 1;
      document.getElementById("type"+this.rowid).value = product.type;
      document.getElementById("productform"+this.rowid).submit(); 
      this.results = []
    },
   autoComplete(){
    this.results = [];
    if(this.search.length > 2){
     axios.get('/invoice/autocomplete/invoiceproduct',{params: {search: this.search}}).then(response => {
      this.results = response.data;
     });
    }
   }
  },
  mounted: function(){
      if (typeof this.defaultvalue != 'undefined' && this.defaultvalue){
        document.getElementById("title"+this.rowid).value = this.defaultvalue;
      }
   }
 }
</script>
