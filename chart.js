var ctx = document.getElementById('main__chart1').getContext('2d');
var labels = new Array();
// day from 1-12-2019 to 31-1-2020
for (i = 1; i <= 62; i++) {
    labels[i - 1] = i;
}

var amountWeek = [514859750,491186750,354968750,356653000,120554250,151840750,330685000,392736500,336996250,214403250];
var amountDay = [62683000,69686750,49972500,41067250,92507750,102043500,96899000,120189000,102200500,52670500,25214000,102230500,
40107000,48575250,61588500,55400500,32789250,34944000,50166750,50226750,69853000,95560500,58687250,48506750,27799000,38419250,38162250,
49518000,39496750,57358250,23699250,16822500,45430500,41302500,48285250,44871000,73361000,32875750,26673500,55683000,48006000,49214750,
48278500,104808750,46692750,56608750,55170000,35433250,45744500,44045500,52680750,24284500,25199000,65872000,49918500,74996000,
33765000,65412250,30361750,30774500,35272750,18817000,3264884250];
var amountType= [54468250,676274000,1413360000,1017120000,103662000];
var amountTypeWeek=[[5111000,5791250,2692000,7860000,8864750,10412750,4187500,3416750,3067000,3065250],[106178000,104712000,81672000,
82254000,35638000,30842000,68692000,65296000,61354000,39636000],[245770000,228460000,157270000,150660000,40350000,48050000,132470000,
169530000,153810000,86990000],[150110000,141470000,105320000,105630000,32740000,50940000,107100000,137220000,109360000,77230000],
[7690750,10753500,8014750,10249000,2961500,11596000,18235500,17273750,9405250,7482000]];
var labelsWeek = ['1','2','3','4','5','6','7','8','9','10'];
/* amount of day */
var myChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels,
        datasets: [{
            label: 'Amount of day from 01-12-2019 to 31-01-2020',
            data: amountDay,
            fill: false,
            backgroundColor: 'rgba(116, 102, 239, 1)',
            borderColor: 'rgba(116, 102, 239, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    labelString: 'Day',
                    stepValue: 1
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 200000000,
                    fill: true
                }   
            }]
        }
    }
});

ctx = document.getElementById('main__chart2').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels,
        datasets: [{
            label: 'Amount of day from 01-12-2019 to 31-01-2020',
            data: amountDay,
            fill: false,
            backgroundColor: 'rgba(116, 102, 239, 1)',
            borderColor: 'rgba(116, 102, 239, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    labelString: 'Day',
                    stepValue: 1
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 200000000,
                    fill: true
                }   
            }]
        }
    }
});

/* amount of week */
ctx = document.getElementById('main__chart3').getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10'],
        datasets: [{
            label: 'Amount of week from 01-12-2019 to 31-01-2020',
            data: amountWeek,
            fill: false,
            backgroundColor: 'rgba(116, 102, 239, 1)',
            borderColor: 'rgba(116, 102, 239, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    labelString: 'Week',
                    stepValue: 1
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 600000000,
                    fill: true
                }   
            }]
        }
    }
});

ctx = document.getElementById('main__chart4').getContext('2d');
var myChart4 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10'],
        datasets: [{
            label: 'Amount of week from 01-12-2019 to 31-01-2020',
            data: amountWeek,
            fill: false,
            backgroundColor: 'rgba(116, 102, 239, 1)',
            borderColor: 'rgba(116, 102, 239, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    labelString: 'Week',
                    stepValue: 1
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 600000000,
                    fill: true
                }   
            }]
        }
    }
});

/* amount of type per week RADAR */
ctx = document.getElementById('main__chart5').getContext('2d');
var myChart5 = new Chart(ctx, {
    type: 'radar',
        data: {
                        labels: labelsWeek,
                        datasets: [{
                                backgroundColor: 'rgba(116, 102, 239, 1)',
                                borderColor: 'rgba(116, 102, 239, 1)',
                                data: amountTypeWeek[0],
                                label: 'apple',
                                fill:false
                        }, {
                                backgroundColor: 'rgba(40, 198, 111, 1)',
                                borderColor: 'rgba(40, 198, 111, 1)',
                                data: amountTypeWeek[1],
                                //hidden: true,
                                label: 'bank',
                                //fill: '-1',
                                fill:false
                        }, {
                                backgroundColor: 'rgba(232, 85, 86, 1)',
                                borderColor: 'rgba(232, 85, 86, 1)',
                                data: amountTypeWeek[2],
                                label: 'card',
                                //fill: 1
                                fill:false
                        }, {
                                backgroundColor: 'rgba(251, 155, 67, 1)',
                                borderColor: 'rgba(251, 155, 67, 1)',
                                data: amountTypeWeek[3],
                                label: 'ewallet',
                                //fill: false
                                fill:false
                        }, {
                                backgroundColor: 'rgba(31, 31, 31, 1)',
                                borderColor: 'rgba(31, 31, 31, 1)',
                                data: amountTypeWeek[4],
                                label: 'google',
                                //fill: '-1'
                                fill:false
                        }]
                },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    labelString: 'Type',
                    stepValue: 1
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 600000000,
                    fill: true
                }   
            }]
        }
    }
});

ctx = document.getElementById('main__chart6').getContext('2d');
var myChart6 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['apple','bank','card','ewallet','google'],
        datasets: [{
            label: 'Amount of type per week from 01-12-2019 to 31-01-2020',
            data: amountType,
            fill: false,
            backgroundColor: [
                            'rgba(116, 102, 239, 1)',
                            'rgba(40, 198, 111, 1)',
                            'rgba(232, 85, 86, 1)',
                            'rgba(251, 155, 67, 1)',
                            'rgba(31, 31, 31, 1)'
                            ],
                            borderColor: [
                            'rgba(116, 102, 239, 1)',
                            'rgba(40, 198, 111, 1)',
                            'rgba(232, 85, 86, 1)',
                            'rgba(251, 155, 67, 1)',
                            'rgba(31, 31, 31, 1)'
                            ],
            borderWidth: 1
        }]
    },
    options: {
    }
});

ctx = document.getElementById('main__chart7').getContext('2d');
var myChart7 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['apple','bank','card','ewallet','google'],
        datasets: [{
            label: 'Amount of type from 01-12-2019 to 31-01-2020',
            data: amountType,
            fill: false,
            backgroundColor: [
                            'rgba(116, 102, 239, 1)',
                            'rgba(40, 198, 111, 1)',
                            'rgba(232, 85, 86, 1)',
                            'rgba(251, 155, 67, 1)',
                            'rgba(31, 31, 31, 1)'
                            ],
                            borderColor: [
                            'rgba(116, 102, 239, 1)',
                            'rgba(40, 198, 111, 1)',
                            'rgba(232, 85, 86, 1)',
                            'rgba(251, 155, 67, 1)',
                            'rgba(31, 31, 31, 1)'
                            ],
            borderWidth: 1
        }]
    },
    options: {
    }
});

ctx = document.getElementById('main__chart8').getContext('2d');
var myChart8 = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['apple','bank','card','ewallet','google'],
        datasets: [{
            label: 'Amount of type from 01-12-2019 to 31-01-2020',
            data: amountType,
            fill: false,
            backgroundColor: [
                            'rgba(116, 102, 239, 1)',
                            'rgba(40, 198, 111, 1)',
                            'rgba(232, 85, 86, 1)',
                            'rgba(251, 155, 67, 1)',
                            'rgba(31, 31, 31, 1)'
                            ],
                            borderColor: [
                            'rgba(116, 102, 239, 1)',
                            'rgba(40, 198, 111, 1)',
                            'rgba(232, 85, 86, 1)',
                            'rgba(251, 155, 67, 1)',
                            'rgba(31, 31, 31, 1)'
                            ],
            borderWidth: 1
        }]
    },
    options: {
    }
});