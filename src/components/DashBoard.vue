<template>
  <n-page-header subtitle="大概能用的一个远程控制页">
    <n-grid :cols="3" mx-4>
      <n-gi>
        <n-statistic label="last run" :value="timestamp" />
      </n-gi>

      <n-gi flex justify-center>
        <n-button text size="large" @click="runOnce">
          <template #icon>
            <n-icon>
              <div class="i-tabler-mail-check"></div>
            </n-icon>
          </template>
          Run Once
        </n-button>
      </n-gi>

      <n-gi flex justify-between>
        <n-button text size="large" @click="runInterval">
          <template #icon>
            <n-icon>
              <div class="i-tabler-mail-bolt"></div>
            </n-icon>
          </template>
          Run Interval
        </n-button>
        <n-input-number 
          my-auto w-30 mx-4
          v-model:value="intervel" 
          clearable
        />
      </n-gi>
    </n-grid>

    <template #title>
      AutoEmailGPT
    </template>
    <template #avatar>
      <n-icon size="25">
        <div class="i-tabler-mail-ai"></div>
      </n-icon>
    </template>
  </n-page-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { postRun, getLastTime } from '~/apis/callAPI';
import { useMessage } from 'naive-ui'

const message = useMessage();
const intervel = ref(0);
const timestamp = ref(1704465548.523698);

function runOnce() {
  postRun(true).then(value => {
    message.success(value.message);
    getLastTime().then(value => {
      console.log(value.timestamp);
      timestamp.value = value.timestamp;
    })
  })
}

function runInterval() {
  postRun(false, intervel.value).then(value => {
    message.success(value.message);
  })
}

</script>