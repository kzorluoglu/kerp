<template>
   <div>
        <input :name="inputname" v-model="inputvalue" type="hidden">
        <ckeditor :editor="editor" v-model="inputvalue" :config="editorConfig"></ckeditor>
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
                editor: ClassicEditor,
                editorConfig: {
                    // The configuration of the rich-text editor.
                }
            };
        }
    }
</script>
