<script setup lang="ts">
import {ref} from 'vue'
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import AutoComplete from 'primevue/autocomplete';
import Card from 'primevue/card';
import Chart from 'primevue/chart';
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';

defineProps<{ msg: string }>()
const stats = ref()
const pluginIds = ref([])
const selected = ref("")

const totalDownload = (plugin)=>{
  return plugin.releases.reduce((n, a) => n + a.count, 0);
}

const chartData = ref({})
const chartOptions = ref({})

const setChartData = () => {
  const labels =  stats.value.filter( item => selected.value.includes(item.id)).map( item=>{
      return item.releases.map(r=>r.published_at)
  }).flat().sort( (a,b)=> a.localeCompare(b)).reverse()

  const datasets = stats.value.filter( item => selected.value.includes(item.id)).map( item=>{
    const data = item.releases.map( r=>{
      return {
        x:r.published_at,
        y:r.count
      }
    })
    return {
      label: item.id,
      data: data,
      fill: false
    }
  })
  return {
    labels: labels,
    datasets: datasets
  };
};

const setChartOptions = () => {
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

const updateChart = ()=>{
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
}

const searchPluginAvailables=(event)=>{
  pluginIds.value = stats.value.filter(item=>item.id.indexOf(event.query)!=-1).map(item=>item.id)
}

const updateJson = ()=>{
  fetch(`last.json`).then(res=>{
    res.json().then(json=>{
      json.forEach( item=>{
        item.totalDownload = totalDownload(item);
        item.releases = item.releases.sort( (a,b)=> a.published_at.localeCompare(b.published_at)).reverse()
      })
      stats.value = json
      pluginIds.value = json.map( item => item.id)
    })
  })
}
updateJson()
</script>

<template>
  <h1>{{msg}}</h1>
  <Card>
    <template #title>
      <form class="w-full">
          <label for="plugins" class="col-2 text-sm font-medium text-gray-900 dark:text-white">Plugins:</label>
          <AutoComplete v-model="selected"
                        :suggestions="pluginIds"
                        @change="updateChart"
                        @complete="searchPluginAvailables"
                        multiple fluid
                        class="col-8"
                        id="plugins"
          ></AutoComplete>
      </form>
    </template>
    <template #content>
      <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
    </template>
  </Card>
</template>

<style scoped>

</style>
