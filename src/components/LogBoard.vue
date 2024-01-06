<template>
  <n-list bordered>
    <template #header>
      <div flex justify-between >
        <n-h3 my-auto>Feedback List</n-h3>
        <n-button type="default" round @click="refreshLog">
        <template #icon>
          <div class="i-tabler-refresh"></div>
        </template>
        </n-button>    
      </div>
    </template>

    <n-list-item v-for="item, index in list">
      <template #suffix>
        <n-button text @click="lookInto(index)">
          <template #icon>
            <div class="i-tabler-book"></div>
          </template>
          Detail
        </n-button>
      </template>
      <n-thing :title="item">
        {{ listContent[index].name }}
      </n-thing>
    </n-list-item>
  </n-list>

  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      :title="currentTitle"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <MdPreview editorId='preview-only' :modelValue=currentText />
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { getLogList, postLog } from '~/apis/callAPI';
import { ILog } from '~/interfaces/config.interface';
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';

const list = ref([
  "Python - S1",
  "Python - S1",
  "Python - S1",
  "Python - S1",
  "Python - S1",
])

const listContent = ref<ILog[]>([
  {name: "Nothing", content: ""},
  {name: "Nothing", content: ""},
  {name: "Nothing", content: ""},
  {name: "Nothing", content: ""},
  {name: "Nothing", content: ""},
])
// computed<ILog[]>(async () => {
//   const results = await Promise.all(list.value.map(item => getContent(item)));
//   return results;
// });

function getContent(item: string): Promise<ILog> {
  console.log("now get content from "+item);
  
  return postLog(item).then(value => {
    console.log(value);
    return value
  }).catch(err => {
    return {name: "Nothing", content: ""}
  })
}

function refreshLog() {
  console.log("refresh");
  getLogList().then(value => {
    list.value = value;
  }).then(async () => {
    const results = await Promise.all(list.value.map(item => getContent(item)));
    listContent.value = results
  })
}

const showModal = ref(false)
const currentTitle = ref('')
const currentText = ref('')

function lookInto(index: number) {
  showModal.value = true

  currentText.value = listContent.value[index].content
  currentTitle.value = listContent.value[index].name
}

</script>