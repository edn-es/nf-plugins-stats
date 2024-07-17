<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button';
import Card from 'primevue/card';
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
import Dialog from 'primevue/dialog';
import ScrollPanel from 'primevue/scrollpanel';
import Avatar from 'primevue/avatar';
defineProps<{ msg: string }>()
const stats = ref()
const selectedRelease = ref();
const visible = ref(false);

const updateJson = ()=>{
  fetch(`last.json`).then(res=>{
    res.json().then(json=>{
      stats.value = json
    })
  })
}

const formatNumber= (n)=>{
  return new Intl.NumberFormat('en-IN').format(n);
}

const totalDownload = (plugin)=>{
  const total = plugin.releases.reduce((n,a)=>n+a.count, 0);
  return formatNumber(total);
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
          <Button label="Show Releases" @click="selectedRelease=item; visible = true" />
        </template>
      </Card>
    </div>
  </div>

  <Dialog v-model:visible="visible" modal :header="selectedRelease?.id" :style="{ width: '50rem', height: '50rem' }">
    <ScrollPanel style="width: 100%; height: 30rem">
      <table class="w-full table-auto">
        <thead>
          <tr>
            <th>Version</th>
            <th>Author</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in selectedRelease.releases">
            <td><Badge :value="formatNumber(r.count)"></Badge>{{r.name}} </td>
            <td>{{r.author}}<Avatar :image="r.avatar" class="mr-2" size="normal" shape="circle" /></td>
            <td>{{r.published_at}}</td>
          </tr>
        </tbody>
      </table>
    </ScrollPanel>
    <div class="flex justify-end gap-2">
      <Button type="button" label="Close" @click="visible = false"></Button>
    </div>
  </Dialog>
</template>

<style scoped>

</style>
