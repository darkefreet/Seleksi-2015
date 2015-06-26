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
        yAxis: {
            min: 0,
            title: {
                text: 'Rasio'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Rasio Jumlah Puskesmas per 30.000 Penduduk',
            data: [
                2.062562161,
                1.155427846,
                1.497861833,
                0.953349606,
                1.581365116,
                1.143563683,
                2.920400719,
                1.04095405,
                1.348815005,
                1.089828683,
                1.058516389,
                0.702378135,
                0.786532124,
                1.032540649,
                0.755668373,
                0.553038769,
                0.879006322,
                0.966621128,
                1.844645415,
                1.562790393,
                2.291951183,
                1.761973145,
                1.747748402,
                2.100770018,
                1.878551458,
                1.474838875,
                2.996525106,
                2.163120431,
                1.993697843,
                2.641006947,
                2.774333943,
                4.1424367,
                2.816423206
            ]

        }, {
            name: 'Rasio Jumlah Tenaga Medis per 5000 penduduk',
            data: [
                1.843401025,
                1.696168077,
                1.794958395,
                1.445371894,
                1.256360629,
                0.24763791,
                1.463114931,
                0.805030752,
                1.226195459,
                2.283875955,
                1.878164035,
                0.596231704,
                0.957302546,
                3.456263516,
                1.092143592,
                0.396438506,
                2.552202566,
                0.794407019,
                0.761129734,
                1.030486242,
                1.347142904,
                1.137423979,
                1.965865151,
                1.627326041,
                0.941173256,
                0.961445596,
                0.716657723,
                1.129629558,
                1.173778817,
                1.571562159,
                1.363084212,
                1.8016312,
                0.529402858
            ]

        }]
    });
});