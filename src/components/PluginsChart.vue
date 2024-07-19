<script setup lang="ts">
import {ref} from 'vue'
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import AutoComplete from 'primevue/autocomplete';
import Card from 'primevue/card';
import Chart from 'primevue/chart';
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';

const stats = ref()
const pluginIds = ref([])
const selected = ref([])

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
        y:r.count,
        author: r.author,
        release: r.name
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
      },
      tooltip: {
        callbacks: {
          title: (items)=>{
            return 'Release : '+items[0].raw.release
          },
        }
      },
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

const updateJson = ()=>{
  fetch(`last.json`).then(res=>{
    res.json().then(json=>{
      json.forEach( item=>{
        item.releases = item.releases.sort( (a,b)=> a.published_at.localeCompare(b.published_at)).reverse()
      })
      stats.value = json
      pluginIds.value = json.map( item => item.id)
      selected.value = [pluginIds.value[Math.floor(Math.random() * pluginIds.value.length)]]
      updateChart()
    })
  })
}
updateJson()

</script>

<template>
  <Panel header="Pick plugins">
    <div class="card flex flex-wrap gap-4">
      <div class="grid grid-cols-8">
        <div v-for="item of stats" :key="item.id" class="justify-left">
          <Checkbox v-model="selected" :inputId="item.id" name="plugin" :value="item.id" @change="updateChart" />
          <label :for="item.id">{{ item.id }}</label>
        </div>
      </div>
    </div>
    <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
  </Panel>
</template>

<style scoped>

</style>
