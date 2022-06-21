<template>
  <v-main>
    <v-row class="mt-12">
      <v-spacer></v-spacer>

      <v-col cols="12" md="4" align="center"
        ><h1>Аналитика по визитам</h1></v-col
      >
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" md="8" align="center">
        <div
          id="chart"
          style="height: 500px; width: 100%; margin: 0; padding: 0"
        ></div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
export default Vue.extend({
  name: "GraphComp",
  data() {
    return {
      info: [
        { date: "2020-07-01", visits: 213 },
        { date: "2020-07-02", visits: 249 },
        { date: "2020-07-03", visits: 179 },
        { date: "2020-07-04", visits: 170 },
        { date: "2020-07-05", visits: 184 },
        { date: "2020-07-06", visits: 202 },
        { date: "2020-07-07", visits: 198 },
        { date: "2020-07-08", visits: 168 },
        { date: "2020-07-09", visits: 176 },
        { date: "2020-07-10", visits: 171 },
        { date: "2020-07-11", visits: 190 },
        { date: "2020-07-12", visits: 154 },
        { date: "2020-07-13", visits: 246 },
        { date: "2020-07-14", visits: 250 },
        { date: "2020-07-15", visits: 227 },
        { date: "2020-07-16", visits: 140 },
        { date: "2020-07-17", visits: 170 },
        { date: "2020-07-18", visits: 125 },
        { date: "2020-07-19", visits: 106 },
        { date: "2020-07-20", visits: 207 },
        { date: "2020-07-21", visits: 222 },
        { date: "2020-07-22", visits: 198 },
        { date: "2020-07-23", visits: 204 },
        { date: "2020-07-24", visits: 213 },
        { date: "2020-07-25", visits: 145 },
        { date: "2020-07-26", visits: 166 },
        { date: "2020-07-27", visits: 163 },
        { date: "2020-07-28", visits: 135 },
        { date: "2020-07-29", visits: 45 },
      ],
    };
  },
  methods: {
    createChart() {
      const root = am5.Root.new("chart");
      root.setThemes([am5themes_Animated.new(root)]);
      root.dateFormatter.setAll({
        dateFormat: "yyyy-MM-dd",
        dateFields: ["valueX"],
      });
      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: "panX",
          wheelY: "zoomX",
          pinchZoomX: true,
        })
      );
      const cursor = chart.set(
        "cursor",
        am5xy.XYCursor.new(root, {
          behavior: "none",
        })
      );
      cursor.lineY.set("visible", false);

      let xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          maxDeviation: 0.5,
          baseInterval: {
            timeUnit: "day",
            count: 1,
          },

          renderer: am5xy.AxisRendererX.new(root, {
            pan: "zoom",
          }),
          tooltip: am5.Tooltip.new(root, {}),
        })
      );

      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          maxDeviation: 1,
          renderer: am5xy.AxisRendererY.new(root, {
            pan: "zoom",
          }),
        })
      );

      let series = chart.series.push(
        am5xy.SmoothedXLineSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "visits",
          valueXField: "date",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}",
          }),
        })
      );

      series.fills.template.setAll({
        visible: true,
        fillOpacity: 0.2,
      });
      series.set("fill", am5.color("#4CAF50"));

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Circle.new(root, {
            radius: 4,
            stroke: root.interfaceColors.get("background"),
            strokeWidth: 2,
            fill: series.get("fill"),
          }),
        });
      });

      chart.set(
        "scrollbarX",
        am5.Scrollbar.new(root, {
          orientation: "horizontal",
        })
      );
      let data = [];

      for (let i = 0; i < this.info.length; i++) {
        data.push({
          date: new Date(this.info[i].date).getTime(),
          visits: this.info[i].visits,
        });
      }

      series.data.setAll(data);

      series.appear(1000);
      chart.appear(1000, 100);
    },
  },
  mounted() {
    this.createChart();
  },
});
</script>
