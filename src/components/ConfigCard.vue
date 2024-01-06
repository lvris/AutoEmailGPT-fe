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
import { getConfig, postConfig } from '~/apis/callAPI';
import { IConfig } from '~/interfaces/config.interface';

const model = ref<IConfig>({
  "gpt_apikey": "placeholder",
  "gpt_server": "placeholder",
  "password": "placeholder",
  "pattern": "placeholder",
  "pop3_server": "placeholder",
  "smtp_port": 0,
  "smtp_server": "placeholder",
  "username": "placeholder",
})

function updateForm() {
  postConfig(model.value)
}

function refreshForm() {
  getConfig().then(value => {
    model.value = value;
  })
}
</script>