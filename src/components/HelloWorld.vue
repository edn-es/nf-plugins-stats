<script setup lang="ts">
import {ref} from 'vue'
import Button from 'primevue/button';
import Card from 'primevue/card';
import OverlayBadge from 'primevue/overlaybadge';
import Dialog from 'primevue/dialog';
import Toolbar from 'primevue/toolbar';
import Chart from 'primevue/chart';
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';

defineProps<{ msg: string }>()
const stats = ref()
const selectedRelease = ref();
const visible = ref(false);


const formatNumber= (n)=>{
  return new Intl.NumberFormat('en-EN').format(n);
}

const totalDownload = (plugin)=>{
  return plugin.releases.reduce((n, a) => n + a.count, 0);
}

const sortByCounter = (asc)=>{
  stats.value = stats.value.sort( (a,b)=> asc ? (a.totalDownload > b.totalDownload ? 1 : -1) : (b.totalDownload > a.totalDownload ? 1 : -1))
  console.log(stats.value)
}

const sortByName = (asc)=>{
  stats.value = stats.value.sort( (a,b)=> asc ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id))
}

const chartData = ref();
const chartOptions = ref();

const setChartData = (plugin) => {
  const documentStyle = getComputedStyle(document.documentElement);
  const data = plugin.releases.map( r=> r.count)
  const labels = plugin.releases.map( r=> r.published_at)
  return {
    labels: labels,
    datasets: [
      {
        label: `Downloads`,
        data: data,
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
        tension: 0.4,
      }
    ]
  };
};
const setChartOptions = (plugin) => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      },
      tooltip: {
        callbacks: {
          title: (items)=>{
            const elem = plugin.releases[items[0].dataIndex];
            return elem ? `${elem.name} (${elem.author})` : '';
          },
        }
      }
    },
    scales: {
      x:{
        type: 'time',
        adapters: {
          date: {
            locale: enUS,
          },
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder
        }
      }
    }
  };
}

const updateJson = ()=>{
  fetch(`last.json`).then(res=>{
    res.json().then(json=>{
      json.forEach( item=>{
        item.totalDownload = totalDownload(item);
        item.releases = item.releases.sort( (a,b)=> a.published_at.localeCompare(b.published_at)).reverse()
      })
      stats.value = json
      console.log(stats.value)
    })
  })
}
updateJson()

const updateChart = (plugin)=>{
  chartData.value = setChartData(plugin);
  chartOptions.value = setChartOptions(plugin);
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
      <Toolbar>
        <template #start>
          <Button icon="pi pi-sort-alpha-down" class="mr-2" severity="secondary" text @click="sortByName(true)"/>
          <Button icon="pi pi-sort-alpha-up" class="mr-2" severity="secondary" text @click="sortByName(false)"/>
          <Button icon="pi pi-sort-numeric-down" severity="secondary" text @click="sortByCounter(true)"/>
          <Button icon="pi pi-sort-numeric-up" severity="secondary" text @click="sortByCounter(false)"/>
        </template>
      </Toolbar>
  </div>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="item in stats">
      <Card>
        <template #title>
          <OverlayBadge :value="formatNumber(item.totalDownload)">
            <a :href="item.url" target="_blank">{{item.id}}</a>
          </OverlayBadge>
        </template>
        <template #content>
          <Button label="Show History" @click="selectedRelease=item; updateChart(item); visible = true" />
        </template>
      </Card>
    </div>
  </div>

  <Dialog v-model:visible="visible" modal :header="selectedRelease?.id" :style="{ width: '50rem', height: '50rem' }">
    <!--ScrollPanel style="width: 100%; height: 30rem">
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
    </ScrollPanel-->
    <!--div class="flex justify-end gap-2">
      <Button type="button" label="Close" @click="visible = false"></Button>
    </div-->
    <div class="card">
      <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
    </div>
  </Dialog>
</template>

<style scoped>

</style>
