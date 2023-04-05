<template>
    <div class="autocomplete-wrapper">
        <input type="hidden" name="customer_id" v-model="id">
        <input autoComplete="off" type="text" :placeholder="placeholder" v-model="search" v-on:keyup="autoComplete"
               class="form-control">
        <div v-if="results.length" class="autocomplete-dropdown">
            <ul class="list-group">
                <li v-on:click="set(result)" :class="{active: index === activeIndex}" v-for="(result, index) in results" :key="result.id">
                    {{ result.company_name }}
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
.autocomplete-wrapper {
    position: relative;
}

.autocomplete-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.autocomplete-dropdown li {
    padding: 5px 10px;
    cursor: pointer;
}

.autocomplete-dropdown li:hover,
.autocomplete-dropdown li.active {
    background-color: #f5f5f5;
}

.autocomplete-dropdown li:not(:last-child) {
    border-bottom: 1px solid #ccc;
}
</style>
<script>
export default {
    props: {
        placeholder: String,
    },
    data() {
        return {
            search: '',
            id: '',
            results: [],
            activeIndex: -1
        }
    },
    methods: {
        set(company) {
            this.id = company.id;
            this.search = company.company_name;
            this.results = []
        },
        autoComplete() {
            this.results = [];
            if (this.search.length > 2) {
                axios.post('/autocomplete/customer',  {search: this.search}).then(response => {
                    this.results = response.data;
                });
            }
        },
        selectResult(index) {
            if (index >= 0 && index < this.results.length) {
                this.set(this.results[index]);
            }
        }
    },
    watch: {
        activeIndex(index) {
            if (index >= 0 && index < this.results.length) {
                this.search = this.results[index].company_name;
            }
        }
    }
}
</script>
