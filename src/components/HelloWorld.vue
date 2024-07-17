<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card';
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';


defineProps<{ msg: string }>()
const stats = ref()
const updateJson = ()=>{
  fetch(`last.json`).then(res=>{
    res.json().then(json=>{
      stats.value = json
    })
  })
}

const totalDownload = (plugin)=>{
  const total = plugin.releases.reduce((n,a)=>n+a.count, 0);
  return new Intl.NumberFormat('en-IN').format(total);
}

updateJson()
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="item in stats">
      <Card>
        <template #title>
          <OverlayBadge :value="totalDownload(item)">
            {{item.id}}
          </OverlayBadge>
        </template>
        <template #content>

        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
