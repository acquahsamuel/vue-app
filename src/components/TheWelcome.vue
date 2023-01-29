<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import Filter from './icons/filter.vue'
import CustomerIcon from './icons/customer.vue'
import SpinnerIcon from "./icons/spinner.svg";

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <!-- <Filter /> -->
      <CustomerIcon />
    </template>
    <template #heading> Testing </template>

  
  </WelcomeItem>

 

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.

  </WelcomeItem>



  
</template>
