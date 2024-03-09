<template>
    <v-container class="fill-height ga-3 d-flex align-center flex-column">
      <div class="w-100 d-flex align-center ga-3">
        <v-text-field v-model.number="sizeX" @input="generateGrid" label="sizeX"></v-text-field>
        <v-text-field v-model.number="sizeY" @input="generateGrid" label="sizeY"></v-text-field>
      </div>
  
      <div class="d-flex align-center flex-column">
        <v-row class="d-flex align-center justify-center">
          <div class="grid-container">
            <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">
              <div v-for="(col, colIndex) in row" :key="colIndex" class="square"
                :style="{ backgroundColor: col.color }" @mouseover="toggleColor(rowIndex, colIndex)"
                @mouseleave="toggleColor(rowIndex, colIndex)"></div>
            </div>
          </div>
        </v-row>
      </div>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const sizeX = ref(0);
  const sizeY = ref(0);
  const grid = ref([]);
  
  const generateGrid = () => {
    grid.value = [];
    for (let i = 0; i < sizeY.value; i++) {
      let row = [];
      for (let j = 0; j < sizeX.value; j++) {
        row.push({ color: 'white' });
      }
      grid.value.push(row);
    }
  };
  
  const toggleColor = (rowIndex, colIndex) => {
    const square = grid.value[rowIndex][colIndex];
    square.color = square.color === 'white' ? 'blue' : 'white';
  };
  
  onMounted(generateGrid);
  </script>
  
  <style scoped>
  .grid-container {
    background-color: #333;
    display: inline-block;
  }
  
  .row {
    display: flex;
  }
  
  .square {
    width: 36px;
    height: 36px;
    margin: 1px;
  }
  </style>