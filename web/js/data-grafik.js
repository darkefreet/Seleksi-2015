$(function () {
    $('#grafik').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Grafik Kelayakan Sarana Puskesmas dan Tenaga Medis'
        },
        subtitle: {
            text: 'Tahun 2012'
        },
        xAxis: {
            categories: [
                "Aceh",
                "Sumatera Utara",
                "Sumatera Barat",
                "Riau",
                "Jambi",
                "Sumatera Selatan",
                "Bengkulu",
                "Lampung",
                "Bangka-Belitung",
                "Kepulauan Riau",
                "DKI Jakarta",
                "Jawa Barat",
                "Jawa Tengah",
                "Yogyakarta",
                "Jawa Timur",
                "Banten",
                "Bali",
                "Nusa Tenggara Barat",
                "Nusa Tenggara Timur",
                "Kalimantan Barat",
                "Kalimantan Tengah",
                "Kalimantan Selatan",
                "Kalimantan Timur",
                "Sulawesi Utara",
                "Sulawesi Tengah",
                "Sulawesi Selatan",
                "Sulawesi Tenggara",
                "Gorontalo",
                "Sulawesi Barat",
                "Maluku",
                "Maluku Utara",
                "Irian Jaya Barat",
                "Papua"
            ],
            crosshair: true
        },
            yAxis:[{ // Primary yAxis
            labels: {
                format: '{value} Buah',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: 'Puskesmas',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true

        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Angka Ideal Puskesmas',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            labels: {
                format: '{value} Buah',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            }

        }, { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Tenaga Medis',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value} Orang',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        },{  //Quaternary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Tenaga Medis Ideal',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels: {
                    format: '{value} Orang',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            }
            ],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Puskesmas',
            type: 'column',
            data: [309, 500, 242, 176, 163, 284, 167, 264, 55, 61, 339, 1008, 849, 119, 944, 196, 114, 145, 288, 229, 169, 213, 207, 159, 165, 394, 223, 75, 76, 135, 96, 105, 266],
            tooltip: {
                valueSuffix: ' Buah'
            }

        }, {
            name: 'Puskesmas Ideal',
            type: 'spline',
            data: [150,433,162,185, 103, 249, 57, 254, 41, 56, 320, 1435, 1079, 115, 1250, 354, 129, 150, 156, 147, 74, 121, 118, 76, 88, 268, 74, 35, 39, 51, 35, 25,95],
            marker: {
                enabled: false
            },
            tooltip: {
                valueSuffix: ' Buah'
            }
        }, {
            name: 'Tenaga Medis',
            type: 'column',
            data: [1657, 4404, 1740, 1601, 777, 369, 502, 1225, 300, 767, 3609, 5133, 6199, 2390, 8186, 843, 1986, 715, 712, 906, 595, 825, 1397, 738, 496, 1545, 319, 234, 272, 482, 283, 274, 300],
            tooltip: {
                valueSuffix: ' Orang'
            }
        }, {
            name: 'Tenaga Medis Ideal',
            type: 'spline',
            data: [899, 2596, 969, 1107, 618, 1490, 343, 1522, 245, 336, 1922, 8611, 6477, 691, 7495, 2126, 778, 900, 937, 880, 442, 725, 710, 454, 527, 1607, 446, 208, 231, 306, 207, 152, 567],
            tooltip: {
                valueSuffix: ' Orang'
            }
        }]
    });
});