const labels = [
    'Red',
    'Blue',
    'Yellow'
];

const data = {
    labels: labels,
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
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
