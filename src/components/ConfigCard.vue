<template>
  <div flex justify-between>
    <n-h3>Config Table</n-h3>

    <n-button-group>
      <n-button type="default" round @click="refreshForm">
        <template #icon>
          <div class="i-tabler-refresh"></div>
        </template>
        Refresh
      </n-button>
      <n-button type="default" round @click="updateForm">
        <template #icon>
          <div class="i-tabler-upload"></div>
        </template>
        Update
      </n-button>
    </n-button-group>
  </div>

  <n-form
    ref="formRef"
    :model="model"
    label-placement="left"
    label-width="auto"
    require-mark-placement="right-hanging"
  >
    <n-form-item label="pattern" path="pattern">
      <n-input v-model:value="model.pattern" placeholder="Input" />
    </n-form-item>
    <n-form-item label="username" path="inputValue">
      <n-input v-model:value="model.username" placeholder="Input" />
    </n-form-item>
    <n-form-item label="password" path="password">
      <n-input v-model:value="model.password" placeholder="Input" />
    </n-form-item>
    <n-form-item label="pop3_server" path="pop3_server">
      <n-input v-model:value="model.pop3_server" placeholder="Input" />
    </n-form-item>
    <n-form-item label="smtp_server" path="smtp_server">
      <n-input v-model:value="model.smtp_server" placeholder="Input" />
    </n-form-item>
    <n-form-item label="smtp_port" path="smtp_port">
      <n-input v-model:value="model.smtp_port" placeholder="Input" />
    </n-form-item>
    <n-form-item label="gpt_apikey" path="gpt_apikey">
      <n-input v-model:value="model.gpt_apikey" placeholder="Input" />
    </n-form-item>
    <n-form-item label="gpt_server" path="gpt_server">
      <n-input v-model:value="model.gpt_server" placeholder="Input" />
    </n-form-item>

  </n-form>

</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const model = ref({
  "gpt_apikey": "pk-vv7rP9NY7aRecHgX6mzVDGbstyIdWLi7o-mh1io24Ps",
  "gpt_server": "https://chat.lvris.com/chat2api/v1",
  "password": "PJIKJQNZJJWDOLTA",
  "pattern": "r'Python.+",
  "pop3_server": "pop.163.com",
  "smtp_port": "465",
  "smtp_server": "smtp.163.com",
  "username": "lvris233@163.com"
})

function updateForm() {
  console.log(model.value);
}

function refreshForm() {
  console.log("refresh");
}
</script>