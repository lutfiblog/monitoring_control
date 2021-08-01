var mon1 = [],
    time = [],
    randMon = [],
    timeNow = [];
var dataSatu = [20, 25, 35, 20, 40, 35, 15];
var labelSatu = ['21/7/23', '21/7/24', '21/7/25', '21/7/26', '21/7/27', '21/7/28', '21/7/29']


var ctx = document.getElementById('barChart').getContext('2d');
var ctx2 = document.getElementById('lineChart').getContext('2d');
var ctx3 = document.getElementById('line7D').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:  ['01', '02', '03', '04', '05'],
        datasets: [{
            label: 'Data One',
            data: [0, 0, 0, 0, 0],
            backgroundColor: '#008184',
            borderColor: '#008184',
            borderWidth: 1
        }]
    },
});

var lineChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['01', '02', '03', '04', '05'],
        datasets: [{
            label: 'Data Two',
            data: [0, 0, 0, 0, 0],
            backgroundColor: '#00979d',
            borderColor: '#00979d',
            borderWidth: 3
        }]
    },
});

var line7D = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: labelSatu,
        datasets: [{
            label: 'Data Two',
            data: dataSatu,
            backgroundColor: '#00979d',
            borderColor: '#00979d',
            borderWidth: 3
        }]
    },
});

function getData() {
    randMon = Math.random();
    var now = new Date();
    timeNow = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    lineChart.data.datasets[0].data.shift();
    lineChart.data.labels.shift();
    lineChart.data.datasets[0].data.push(randMon);
    lineChart.data.labels.push(timeNow);
    lineChart.update();

    barChart.data.datasets[0].data.shift();
    barChart.data.labels.shift();
    barChart.data.datasets[0].data.push(randMon);
    barChart.data.labels.push(timeNow);
    barChart.update();

}

setInterval(getData, 1000);
