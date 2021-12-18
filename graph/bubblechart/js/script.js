const data = {
    datasets: [{
        label: 'First Dataset',
        data: [{
            x: 36,
            y: 29,
            r: 15
        }, {
            x: 21,
            y: 6,
            r: 10
        }, {
            x: 11,
            y: 32,
            r: 10
        }, {
            x: 40,
            y: 4,
            r: 20
        }, {
            x: 20,
            y: 22,
            r: 30
        }, {
            x: 13,
            y: 6,
            r: 15
        }, {
            x: 30,
            y: 16,
            r: 40
        }, {
            x: 19,
            y: 19,
            r: 24
        }, {
            x: 26,
            y: 33,
            r: 6
        }, {
            x: 9,
            y: 3,
            r: 14
        }, {
            x: 12,
            y: 40,
            r: 9
        }],
        backgroundColor: 'rgb(255, 99, 132)'
    }]
};

const config = {
    type: 'bubble',
    data: data,
    options: {}
};

$(document).ready(function () {
    showGraph();
});

function showGraph() {
    const myChart = new Chart(
        document.getElementById('canvas'),
        config
    );
}
