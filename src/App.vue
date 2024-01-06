<script setup lang="ts">
</script>

<template>
<n-message-provider>
  <n-layout mx-80>
    <dash-board my-10/>

    <n-divider dashed="true"/>

    <n-layout has-sider my-10>
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="300"
        :width="480"
        show-trigger="arrow-circle"
        bordered
        px-5
      >
        <config-card />
      </n-layout-sider>

      <n-layout-content ml-5>
        <log-board />
      </n-layout-content>
    </n-layout>

    <!-- <n-footer>hello</n-footer> -->
  </n-layout>
</n-message-provider>
</template>

<style scoped>
</style>
