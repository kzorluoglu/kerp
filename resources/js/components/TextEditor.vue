<template>
   <div>
        <input :name="inputName" v-model="inputValue" type="hidden">
        <ckeditor :editor="editor" v-model="inputValue" :config="editorConfig"></ckeditor>
      </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import CKEditor from '@ckeditor/ckeditor5-vue';

    export default {
        props: {
          inputname: String,
          inputvalue: String,
       },
        data() {
            return {
                inputName: this.inputname,
                inputValue: this.inputvalue,
                editor: ClassicEditor,
                editorConfig: {
                    // The configuration of the rich-text editor.
                }
            };
        }
    }
</script>
