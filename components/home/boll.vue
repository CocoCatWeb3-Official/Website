<script setup>
import * as echarts from 'echarts';
import 'echarts-gl';
var ROOT_PATH = 'https://echarts.apache.org/examples';
import mapJson from '@/assets/map/map.json';
import map2Json from '@/assets/map/map2.json';
import map3Json from '@/assets/map/map3.json';
import map4Json from '@/assets/map/map4.json';

// import { onMounted } from 'vue';

onMounted(() => {
  var myChart = echarts.init(document.getElementById('slotMachine'));
  window.addEventListener('resize', function () {
    myChart.resize();
  });
  let lineList = [];
  for (let i = 0; i < map4Json.length; i++) {
    for (let j = 0; j < map4Json.length; j++) {
      if (
        map4Json[i][0] != map4Json[j][0] ||
        map4Json[i][1] != map4Json[j][1]
      ) {
        lineList.push([
          [map4Json[i][0], map4Json[i][1]],
          [map4Json[j][0], map4Json[j][1]],
        ]);
      }
    }
  }
  var series2 = [
    {
      type: 'lines3D',
      name: 'line',
      effect: {
        show: true,
        trailWidth: 2,
        trailLength: 0.15,
        trailOpacity: 1,
        trailColor: 'rgb(30, 30, 60)',
      },
      lineStyle: {
        width: 1,
        color: 'rgb(50, 50, 150)',
        opacity: 0.1,
      },
      blendMode: 'lighter',
      data: lineList,
      visualMap: false,
      silent: true,
    },
  ];

  series2.push({
    type: 'scatter3D',
    coordinateSystem: 'globe',
    blendMode: 'lighter',
    symbolSize: 10,
    visualMap: 'continuous',
    itemStyle: {
      color: '#0077ff',
      opacity: 0.2,
    },
    emphasis: {
      itemStyle: {
        // color: 'red',
      },
      label: {
        show: false,
        textStyle: { color: 'red', fontSize: 50 },
        distance: 50,
        position: 'top',
      },
    },
    data: map4Json,
  });
  let data = mapJson
    .filter(function (dataItem) {
      return dataItem[2] > 0;
    })
    .map(function (dataItem) {
      return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])];
    });

  series2.push({
    type: 'scatter3D',
    coordinateSystem: 'globe',
    blendMode: 'lighter',
    symbolSize: 3,
    visualMap: 'continuous',
    itemStyle: {
      color: '#3995ff',
      opacity: 0.1,
    },

    emphasis: {
      itemStyle: {
        // color: 'red',
      },
      label: {
        show: false,
      },
    },
    label: {
      show: false,
    },
    data: data,
  });


  myChart.setOption({
    globe: {
      heightTexture:
        ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
      displacementScale: 0.4,
      displacementQuality: 'high',
      globeRadius: 50,
      globeOuterRadius: 50,
      baseColor: '#000',
      shading: 'realistic',
      realisticMaterial: {
        roughness: 0.2,
        metalness: 0,
      },
      postEffect: {
        enable: true,
        depthOfField: {
          enable: false,
          focalRange: 10,
          focalDistance: 110,
        },
      },
      temporalSuperSampling: {
        enable: true,
      },
      light: {
        ambientCubemap: {
          texture: ROOT_PATH + '/data-gl/asset/lake.hdr',
          exposure: 1,
          diffuseIntensity: 0.5,
          specularIntensity: 2,
        },
      },
      viewControl: {
        // autoRotate: false,
        autoRotate: true,
        autoRotateSpeed: -1,
        beta: 180,
        alpha: 20,
        distance: 100,
        zoomSensitivity: 0,
      },
    },
    series: series2,
  });
});
</script>

<template>
  <div id="slotMachine" class="slot-machine"></div>
</template>

<style scoped lang="less">
#slotMachine {
  width: 100%;
  aspect-ratio: 1 / 1;
}
</style>
