var switchSatu = false;
var switchDua = false;
var switchTiga = false;


function _chartGaugeOne() {
    var chart = JSC.chart('chartDiv', {
        debug: true,
        type: 'gauge',
        animation_duration: 1000,
        legend_visible: false,
        xAxis: { spacingPercentage: 0.25 },
        yAxis: {
            defaultTick: {
                padding: -5,
                label_style_fontSize: '14px'
            },
            line: {
                width: 5,
                color: 'smartPalette',
                breaks_gap: 0.1
            },
            scale_range: [0, 100]
        },
        palette: {
            pointValue: '{%value/100}',
            colors: ['#da5b4a', '#da5b4a', '#da5b4a']
        },
        defaultAnnotation: {
            position: 'inside bottom'
        },
        annotations: [
            {
                id: 'anVal',
                label: {
                    text: '0',
                    style: { fontSize: 46 }
                }
            },
            // {
            //     label: {
            //         text: 'kW',
            //         style: { fontSize: 25, color: '#696969' }
            //     }
            // }
        ],
        defaultTooltip_enabled: false,
        defaultSeries: {
            angle: { sweep: 180 },
            shape: { innerSize: '70%' }
        },
        series: [
            {
                type: 'column roundcaps',
                points: [{ id: '1', x: 'speed', y: 0 }]
            }
        ],
    });
    var INTERVAL_ID;

    function setGauge(max, y) {
        chart
            .series(0)
            .options({
                points: [{ id: '1', x: 'speed', y: y }]
            });
        chart
            .annotations('anVal')
            .options(
                { label_text: JSC.formatNumber(y, 'n1') },
                { animation: false }
            );
    }

    function update() {
        INTERVAL_ID = setInterval(function () {
            setGauge(120, Math.random() * 100);
        }, 1000);
    }
    update();
}

function _chartGaugeTwo() {
    var chart = JSC.chart('chartDiv2', {
        debug: true,
        type: 'gauge',
        animation_duration: 1000,
        legend_visible: false,
        xAxis: { spacingPercentage: 0.25 },
        yAxis: {
            defaultTick: {
                padding: -5,
                label_style_fontSize: '14px'
            },
            line: {
                width: 5,
                color: 'smartPalette',
                breaks_gap: 0.1
            },
            scale_range: [0, 100]
        },
        palette: {
            pointValue: '{%value/100}',
            colors: ['#00979d', '#00979d', '#00979d']
        },
        defaultAnnotation: {
            position: 'inside bottom'
        },
        annotations: [
            {
                id: 'anVal',
                label: {
                    text: '0',
                    style: { fontSize: 46 }
                }
            },
            // {
            //     label: {
            //         text: 'kW',
            //         style: { fontSize: 25, color: '#696969' }
            //     }
            // }
        ],
        defaultTooltip_enabled: false,
        defaultSeries: {
            angle: { sweep: 180 },
            shape: { innerSize: '70%' }
        },
        series: [
            {
                type: 'column roundcaps',
                points: [{ id: '1', x: 'speed', y: 0 }]
            }
        ],
    });
    var INTERVAL_ID;

    function setGauge(max, y) {
        chart
            .series(0)
            .options({
                points: [{ id: '1', x: 'speed', y: y }]
            });
        chart
            .annotations('anVal')
            .options(
                { label_text: JSC.formatNumber(y, 'n1') },
                { animation: false }
            );
    }

    function update() {
        INTERVAL_ID = setInterval(function () {
            setGauge(120, Math.random() * 100);
        }, 1000);
    }
    update();
}

function _chartLinierGaueOne() {
    var chart = JSC.chart('chartDiv3', {
        debug: true,
        title: {
            label_text: 'DHT Sensor',
            position: 'center'
        },
        legend_visible: false,
        yAxis: [
            {
                id: 'y1',
                line_width: 0,
                scale_range: [0, 100],
            },
            {
                id: 'y2',
                line_width: 0,
                scale_range: [0, 100]
            }
        ],
        xAxis: [
            {
                id: 'x1',
                defaultTick_gridLine_width: 'column',
                spacingPercentage: 0.15
            },
            {
                id: 'x2',
                defaultTick_gridLine_width: 'column',
                spacingPercentage: 0.15
            }
        ],
        defaultSeries: {
            type: 'gauge linear column roundCaps',
            shape: { label: [{ text: '%name' }] }
        },
        series: [
            {
                name: 'Humidity',
                yAxis: 'y1',
                xAxis: 'x1',
                points: [['value', 0]]
            },
            {
                name: 'Temperature',
                yAxis: 'y2',
                xAxis: 'x2',
                points: [['value', 0]]
            }
        ]
    });

    function setGaugeOne(max, y) {
        chart
            .series(0)
            .options({
                points: [{ id: '1', x: 'speed', y: y }]
            });
    }
    function setGaugeTwo(max, y) {
        chart
            .series(1)
            .options({
                points: [{ id: '1', x: 'speed', y: y }]
            });
    }

    function update() {
        INTERVAL_ID = setInterval(function () {
            setGaugeOne(100, Math.random() * 100);
            setGaugeTwo(100, Math.random() * 100);
        }, 1000);
    }
    update();
}

function tombolSatu() {
    if (switchSatu) {
        switchSatu = false;
        //document.getElementById('textSatu').innerHTML = "OFF";
    } else {
        switchSatu = true;
        //document.getElementById('textSatu').innerHTML = "ON";
    }
}
function tombolDua() {
    if (switchDua) {
        switchDua = false;
    } else {
        switchDua = true;
    }
}
function tombolTiga() {
    if (switchTiga) {
        switchTiga = false;
    } else {
        switchTiga = true;
    }
}

_chartGaugeOne();
_chartGaugeTwo();
_chartLinierGaueOne();
_chartJS();
tombolSatu();
tombolDua();
tombolTiga;