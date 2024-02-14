<script>
import Chart from 'chart.js/auto'

export default {
  mounted () {
    this.renderChart()
  },
  computed: {
    getDataShedule () {
      return this.$store.state.dataShedule
    }
  },
  methods: {
    renderChart () {
      const ctx = this.$refs.chart.getContext('2d')
      Chart.defaults.plugins.legend.display = false
      // eslint-disable-next-line no-new
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['01 Apr', '02 Apr', '03 Apr', '04 Apr', '05 Apr', '06 Apr', '07 Apr'],
          datasets: [{
            label: '',
            data: this.getDataShedule,
            borderColor: '#4BB893',
            borderWidth: 3,
            tension: 0.8,
            pointRadius: 0.5,
            fill: false
          }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              grid: {
                color: 'rgba(0, 0, 0, 0.04)',
                borderColor: 'transparent'
              },
              ticks: {
                stepSize: 40000,
                display: window.innerWidth >= 768
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                font: {
                  size: 14,
                  weight: 'bold'
                },
                padding: 12
              },
              offset: true

            }
          },
          interaction: {
            mode: 'nearest',
            intersect: false
          },
          plugins: {
            tooltip: {
              mode: 'index',
              intersect: false
            }
          }
        }
      })
    }
  }
}
</script>

<template>
  <div class="shedule">
    <canvas ref="chart"></canvas>
  </div>
</template>

<style scoped>
.shedule{
  height: 440px;

  @media (max-width: 768px) {
    height: 430px;
  }
}
</style>
