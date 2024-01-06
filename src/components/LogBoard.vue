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

    <n-list-item v-for="item in list">
      <template #suffix>
        <n-button text @click="lookInto(item)">
          <template #icon>
            <div class="i-tabler-book"></div>
          </template>
          Detail
        </n-button>
      </template>
      <n-thing :title="item">
        some information
      </n-thing>
    </n-list-item>
  </n-list>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const list = ref([
  "Python - S1",
  "Python - S2 (最小生成树)",
  "Python - S3 (最短路)",
  "Python - S4 (快排)"
])

function lookInto(item: string) {
  console.log(item); 
}

function refreshLog() {
  console.log("refresh");
  
}

</script>