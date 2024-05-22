<!--
An SVG graph
-->

<script setup>
import PolyGraph from '../components//PolyGraph.vue'
import { ref, reactive } from 'vue'

const newLabel = ref('')
const stats = reactive([
  { label: 'A', value: 100 },
  { label: 'B', value: 100 },
  { label: 'C', value: 100 },
  { label: 'D', value: 100 },
  { label: 'E', value: 100 },
  { label: 'F', value: 100 }
])

function add(e) {
  e.preventDefault()
  if (!newLabel.value) return
  stats.push({
    label: newLabel.value,
    value: 100
  })
  newLabel.value = ''
}

function remove(stat) {
  if (stats.length > 3) {
    stats.splice(stats.indexOf(stat), 1)
  } else {
    alert("Can't delete more!")
  }
}
</script>

<template>
    <div class="contenair">
        <div class="divsvg">
            <svg width="200" height="200">
                <PolyGraph :stats="stats"></PolyGraph>
            </svg>
            <!-- controls -->
            <div class="divsvgdelete" v-for="stat in stats">
                <label>{{stat.label}}</label>
                <input type="range" v-model="stat.value" min="0" max="100">
                <span>{{stat.value}}</span>
                <button @click="remove(stat)" class="remove">X</button>
            </div>

            <form id="add">
                <input name="newlabel" v-model="newLabel">
                <button @click="add">Add a Stat</button>
            </form>
        </div>
        <pre id="raw">{{ stats }}</pre>
    </div>
</template>

<style>
polygon {
  fill: #42b983;
  opacity: 0.75;
}

circle {
  fill: transparent;
  stroke: #999;
}

text {
  font-size: 10px;
  fill: #666;
}

label {
  display: inline-block;
  margin-left: 10px;
  width: 20px;
}
.contenair{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}
.divsvgdelete{
  width:100%;
  height:35px;
  display:flex;
  flex-direction:row;
  justify-content:start;
  align-items:center;
}
.remove{
  margin:7px auto auto 10px;
}
</style>