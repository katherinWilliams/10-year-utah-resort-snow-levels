document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('container', {
    title: {
      text: 'Utah Resort Total Winter Snowlevels 2010-2023',
      align: 'left',
    },

    subtitle: {
      text: 'Source: <a href="https://www.skiutah.com/snowreport?_ct=Menu+Bar#do-it-again" target="_blank">Ski Utah</a>',
      align: 'left',
    },

    yAxis: {
      title: {
        text: 'Total Snow level (Base + Snowfall)',
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2023',
      },
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        name: 'Alta',
        data: [651, 545, 583, 590, 417, 528, 687, 494, 804, 682, 622, 572, 893],
      },
      {
        name: 'Cherry Peak',
        data: [
          null,
          null,
          null,
          null,
          null,
          204,
          339,
          212,
          null,
          218,
          243,
          195,
          441,
        ],
      },
      {
        name: 'Snowbasin',
        data: [488, 225, 275, 336, 203, 357, 567, 300, 566, 430, 377, 346, 602],
      },
      {
        name: 'Brian Head',
        data: [354, 184, 275, 207, 296, 350, 383, 226, 472, 278, 258, 283, 480],
      },
      {
        name: 'Brighton',
        data: [508, 371, 409, 381, 363, 520, 782, 432, 783, 573, 534, 504, 882],
      },
      {
        name: 'Nordic Valley',
        data: [227, 118, null, 108, 61, 151, 276, 99, 228, 131, 192, 172, 396],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  })
})
