//Metric Script Blocks
    document.addEventListener('DOMContentLoaded', function() {

            const commonChartConfig = {
            chart: {
            height: 100,
            type: 'area',
            sparkline: { enabled: true },
            background: 'transparent'
            },
            markers: {
            size: 2,
            colors: ['transparent'],        // Make fill transparent
            strokeColors: '#00E396',        // Use the line color for stroke
            strokeWidth: 1,
            hover: {
                size: 4,
                sizeOffset: 3
            }
            },
            stroke: {
            curve: 'straight',
            width: 2
            },
            fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.2
            }
            },
            colors: ['#00E396']
            };

// ARR Influence Chart
    const arrMetric = new ApexCharts(document.querySelector("#arr-metric"), {
            ...commonChartConfig,
            series: [{
                name: 'ARR',
                data: [
                    258919, 50200, 365908, 241075,    // 2020
                    302476, 455752, 286132, 85187,    // 2021
                    278348, 183575, 187348, 416701,   // 2022
                    690434, 1234688, 286132, 132192,  // 2023
                    403245, 940433, 771603, 339392    // 2024
                ]
            }],
            tooltip: {
                theme: 'dark',
                custom: function({ series, seriesIndex, dataPointIndex, w }) {
                    const value = series[seriesIndex][dataPointIndex];
                    const quarters = [
                        'Q1 2020', 'Q2 2020', 'Q3 2020', 'Q4 2020',
                        'Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021',
                        'Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022',
                        'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023',
                        'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'
                    ];
                    const formattedValue = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 0
                    }).format(value);
                    
                    return (
                        '<div class="custom-tooltip" style="background: rgba(0, 0, 0, 0.7); padding: 8px; border-radius: 4px;">' +
                            `<div>${quarters[dataPointIndex]}</div>` +
                            `<div style="color: #00E396">${formattedValue}</div>` +
                        '</div>'
                    );
                }
            },
                    title: {
                        text: '$14,576,638',
                        align: 'left',
                        style: { fontSize: '22px', color: '#fff', fontWeight: 600 }
                    },
                    subtitle: {
                        text: '+14.2% QoQ',
                        align: 'left',
                        style: { fontSize: '14px', color: '#00E396' }
            }
            });

// ACV Chart
    const acvMetric = new ApexCharts(document.querySelector("#acv-metric"), {
            ...commonChartConfig,
            series: [{
                name: 'ACV',
                data: [
                    10328, 82796, 8712, 24845,      // 2020 Q1-Q4
                    27013, 19443, 23158, 12587,     // 2021 Q1-Q4
                    22461, 15443, 19876, 35821,     // 2022 Q1-Q4
                    52447, 71245, 38719, 41876,     // 2023 Q1-Q4
                    47123, 58991, 45876, 35443      // 2024 Q1-Q4
                ]
            }],
            tooltip: {
                theme: 'dark',
                custom: function({ series, seriesIndex, dataPointIndex, w }) {
                    const value = series[seriesIndex][dataPointIndex];
                    const quarters = [
                        'Q1 2020', 'Q2 2020', 'Q3 2020', 'Q4 2020',
                        'Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021',
                        'Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022',
                        'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023',
                        'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'
                    ];
                    const formattedValue = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 0
                    }).format(value);
                    
                    return (
                        '<div class="custom-tooltip" style="background: rgba(0, 0, 0, 0.7); padding: 8px; border-radius: 4px;">' +
                            `<div>${quarters[dataPointIndex]}</div>` +
                            `<div style="color: #00E396">${formattedValue}</div>` +
                        '</div>'
                    );
                }
            },
            title: {
                text: '$25,983',
                align: 'left',
                style: { fontSize: '22px', color: '#fff', fontWeight: 600 }
            },
            subtitle: {
                text: '+15% QoQ',
                align: 'left',
                style: { fontSize: '14px', color: '#00E396' }
            }
            });

// Days to Close Chart
    const daysMetric = new ApexCharts(document.querySelector("#days-metric"), {
            ...commonChartConfig,
            series: [{
                name: 'Days to Close',
                data: [
                    26, 37, 42, 36,     // 2020 Q1-Q4
                    32, 45, 41, 39,     // 2021 Q1-Q4
                    35, 42, 38, 45,     // 2022 Q1-Q4
                    44, 38, 35, 43,     // 2023 Q1-Q4
                    48, 41, 37, 42      // 2024 Q1-Q4
                ]
            }],
            tooltip: {
                theme: 'dark',
                custom: function({ series, seriesIndex, dataPointIndex, w }) {
                    const value = series[seriesIndex][dataPointIndex];
                    const quarters = [
                        'Q1 2020', 'Q2 2020', 'Q3 2020', 'Q4 2020',
                        'Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021',
                        'Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022',
                        'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023',
                        'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'
                    ];
                    
                    return (
                        '<div class="custom-tooltip" style="background: rgba(0, 0, 0, 0.7); padding: 8px; border-radius: 4px;">' +
                            `<div>${quarters[dataPointIndex]}</div>` +
                            `<div style="color: #00E396">${Math.round(value)} days</div>` +
                        '</div>'
                    );
                }
            },
            title: {
                text: '40 Days',
                align: 'left',
                style: { fontSize: '22px', color: '#fff', fontWeight: 600 }
            },
            subtitle: {
                text: '-9.8 QoQ',
                align: 'left',
                style: { fontSize: '14px', color: '#00E396' }
            }
            });

// Opps Won Chart
    const oppMetric = new ApexCharts(document.querySelector("#opp-metric"), {
            ...commonChartConfig,
            series: [{
                name: 'Opps Won',
                data: [
                    11, 19, 28, 32,     // 2020 Q1-Q4
                    39, 45, 52, 48,     // 2021 Q1-Q4
                    44, 51, 47, 42,     // 2022 Q1-Q4
                    56, 63, 58, 54,     // 2023 Q1-Q4
                    42, 38, 35, 15      // 2024 Q1-Q4
                ]
            }],
            tooltip: {
                theme: 'dark',
                custom: function({ series, seriesIndex, dataPointIndex, w }) {
                    const value = series[seriesIndex][dataPointIndex];
                    const quarters = [
                        'Q1 2020', 'Q2 2020', 'Q3 2020', 'Q4 2020',
                        'Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021',
                        'Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022',
                        'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023',
                        'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'
                    ];
                    
                    return (
                        '<div class="custom-tooltip" style="background: rgba(0, 0, 0, 0.7); padding: 8px; border-radius: 4px;">' +
                            `<div>${quarters[dataPointIndex]}</div>` +
                            `<div style="color: #00E396">${Math.round(value)} opps</div>` +
                        '</div>'
                    );
                }
            },
            title: {
                text: '561 Opps',
                align: 'left',
                style: { fontSize: '22px', color: '#fff', fontWeight: 600 }
            },
            subtitle: {
                text: '-8.6% QoQ',
                align: 'left',
                style: { fontSize: '14px', color: '#FF4560' }
            }
            });


// Win Rate - Radial Chart
    const winMetric = new ApexCharts(document.querySelector("#win-metric"), {
            series: [46],
            chart: {
            height: 150,
            type: 'radialBar',
            sparkline: { enabled: true }
            },
            plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#2C3036",
                    strokeWidth: '2%',  // Made thinner
                    strokeDashArray: 2, // Smaller number = more dashes
                },
                dataLabels: {
                    name: { show: false },
                    value: {
                        fontSize: '22px',
                        color: '#fff',
                        fontWeight: 600,
                        offsetY: -2
                        }
                    }
                }
                },
                    fill: { colors: ['#00E396'] },
                    stroke: {
                    dashArray: 2,  // Smaller number = more dashes
                    width: 2      // Made thinner
                    }
                    });

// Lead Consultant - Radial Chart
    const leadMetric = new ApexCharts(document.querySelector("#lead-metric"), {
                series: [92],
                chart: {
                height: 150,
                type: 'radialBar',
                sparkline: { enabled: true }
                },
                plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#2C3036",
                        strokeWidth: '2%',  // Made thinner
                        strokeDashArray: 3, // Smaller number = more dashes
                    },
                    dataLabels: {
                        name: { show: false },
                        value: {
                            fontSize: '22px',
                            color: '#fff',
                            fontWeight: 600,
                            offsetY: -2
                        }
                    }
                }
                },
                        fill: { colors: ['#00E396'] },
                        stroke: {
                        dashArray: 2,  // Smaller number = more dashes
                        width: 2      // Made thinner
                        }
                        });

// Render all tile charts
    arrMetric.render();
    acvMetric.render();
    daysMetric.render();
    winMetric.render();
    leadMetric.render();
    oppMetric.render();
    });


        
// ARR by Pipeline
    function generateDayWiseTimeSeries(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = baseval;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push([x, y]);
            baseval += 86400000;
            i++;
            }
            return series;
        }
            
    var data = generateDayWiseTimeSeries(new Date("22 Apr 2024").getTime(), 115, { min: 30, max: 90 });
        var options1 = {
            chart: {
                id: "chart2",
                type: "area",
                height: 230,
                foreColor: "#ccc",
                toolbar: {
                    autoSelected: "pan",
                    show: false
                }
            },
                colors: ["#00BAEC"],
                stroke: {
                    width: 3
                },
                grid: {
                    borderColor: "#555",
                    clipMarkers: false,
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    gradient: {
                        enabled: true,
                        opacityFrom: 0.55,
                        opacityTo: 0
                    }
                },
                markers: {
                    size: 5,
                    colors: ["#000524"],
                    strokeColor: "#00BAEC",
                    strokeWidth: 3
                },
                series: [
                    {
                        data: data
                    }
                ],
                tooltip: {
                    theme: "dark"
                },
                xaxis: {
                    type: "datetime"
                },
                yaxis: {
                    min: 0,
                    tickAmount: 4
                }
            };
            
    var chart1 = new ApexCharts(document.querySelector("#category-chart-main"), options1);
    chart1.render();
            
            var options2 = {
                chart: {
                    id: "chart1",
                    height: 120,
                    type: "bar",
                    foreColor: "#ccc",
                    brush: {
                        target: "chart2",
                        enabled: true
                    },
                    selection: {
                        enabled: true,
                        fill: {
                            color: "#fff",
                            opacity: 0.4
                        },
                        xaxis: {
                            min: new Date("27 Jul 2024 10:00:00").getTime(),
                            max: new Date("14 Aug 2024 10:00:00").getTime()
                        }
                    }
                },
                colors: ["#FF0080"],
                series: [
                    {
                        data: data
                    }
                ],
                stroke: {
                    width: 2
                },
                grid: {
                    borderColor: "#444"
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    type: "datetime",
                    tooltip: {
                        enabled: false
                    }
                },
                yaxis: {
                    tickAmount: 2
                }
            };

        var chart2 = new ApexCharts(document.querySelector("#category-chart-brush"), options2);
        chart2.render();



//Top Module ARR               
    var options = {
        series: [
            {
                data: [
                    { x: 'CRM', y: 479612 },
                    { x: 'OneWorld', y: 421589 },
                    { x: 'Analytics Warehouse', y: 289756 },
                    { x: 'Ecommerce', y: 273433 },
                    { x: 'Planning & Budgeting', y: 173623 },
                    { x: 'Connector', y: 151567 },
                    { x: 'CPQ', y: 89403 },
                    { x: 'Work Orders', y: 34613 },
                    { x: 'Fixed Assets', y: 29483 },
                    { x: 'Payroll', y: 24838 }
                ]
            }
        ],
                    chart: {
                        type: 'bar',
                        height: 400,  // Set a fixed height initially
                        foreColor: '#fff',
                        toolbar: {
                            show: false
                        }
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        borderRadiusApplication: 'end',
                        horizontal: true
                    }
                },
                colors: ['#00BAEC'],
                tooltip: {
                    enabled: true,
                    custom: function({ series, seriesIndex, dataPointIndex, w }) {
                        const value = series[seriesIndex][dataPointIndex];
                        const category = w.config.xaxis.categories[dataPointIndex];
                        const formattedValue = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 0
                        }).format(value);
            
                        return (
                            '<div class="custom-tooltip" style="background: rgba(0, 0, 0, 0.7); padding: 8px; border-radius: 4px;">' +
                                `<div>${category}</div>` +
                                `<div style="color: #00BAEC">${formattedValue}</div>` +
                            '</div>'
                        );
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function(val) {
                        return new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 0
                        }).format(val);
                    }
                },
                xaxis: {
                    categories: ['CRM', 'OneWorld', 'Analytics Warehouse', 'Ecommerce', 'Planning & Budgeting',
                                'Connector', 'CPQ', 'Work Orders', 'Fixed Assets', 'Payroll'],
                    labels: {
                        style: {
                            colors: '#fff'
                        }
                    },
                    tickAmount: 10,
                    min: 0,
                    max: 500000,
                    labels: {
                        formatter: function(value) {
                            return Math.abs(value) >= 1000 ? Math.sign(value) * ((Math.abs(value) / 1000).toFixed(0)) + 'k' : value;
                        },
                        style: {
                            colors: '#fff'
                        }
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: '#fff'
                        }
                    }
                }
            };

         
        var chart = new ApexCharts(document.querySelector("#modules-chart"), options);
        chart.render();
    


//ARR by Category Pie
    var options = {
        series: [3979423, 2871597, 2463452, 1880386, 1574277, 860022, 757985, 189496],
        chart: {
            type: 'donut',
            height: 350,
            foreColor: "#ccc"
        },
                colors: ['#00E396', '#00BAEC', '#775DD0', '#FF4560', '#FEB019', '#2E93FA', '#66DA26', '#FF66B3'],
                labels: ['Platform', 'Subscription Upgrade', 'Infrastructure', 'Support', 'Renewal', 'Analytics', 'Commerce', 'Accounting'],
                tooltip: {
                    enabled: true,
                    custom: function({ series, seriesIndex, dataPointIndex, w }) {
                        const value = series[seriesIndex];
                        const label = w.config.labels[seriesIndex];
                        const formattedValue = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 0
                        }).format(value);
            
                        return (
                            '<div class="custom-tooltip" style="background: rgba(0, 0, 0, 0.7); padding: 8px; border-radius: 4px;">' +
                                `<div>${label}</div>` +
                                `<div style="color: ${w.config.colors[seriesIndex]}">${formattedValue}</div>` +
                            '</div>'
                        );
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function(val) {
                        return val.toFixed(1) + "%";
                    }
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '70%',
                            labels: {
                                show: true,
                                total: {
                                    show: true,
                                    label: 'Total ARR',
                                    formatter: function(w) {
                                        const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                        return new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        }).format(total);
                                    }
                                },
                                value: {
                                    formatter: function(value) {
                                        return new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        }).format(value);
                                    }
                                }
                            }
                        }
                    }
                },
                legend: {
                    position: 'right',
                    offsetX: 120,
                    offsetY: 60,
                    height: 290,
                    formatter: function(val, opts) {
                        return val;
                    }
                }
            };
            
        var chart = new ApexCharts(document.querySelector("#arr-category-chart"), options);
        chart.render();


// ARR by Customer Size 
    var options = {
            series: [
                {
                        data: [
                            { x: 'New Delhi', y: 218 },
                            { x: 'Kolkata', y: 149 },
                            { x: 'Mumbai', y: 184 },
                            { x: 'Ahmedabad', y: 55 },
                            { x: 'Bangaluru', y: 84 },
                            { x: 'Pune', y: 31 },
                            { x: 'Chennai', y: 70 },
                            { x: 'Jaipur', y: 30 },
                            { x: 'Surat', y: 44 },
                            { x: 'Hyderabad', y: 68 },
                            { x: 'Lucknow', y: 28 },
                            { x: 'Indore', y: 19 },
                            { x: 'Kanpur', y: 29 }
                        ]
                    }
                ],
                legend: {
                    show: false
                },
                chart: {
                    height: 350,
                    type: 'treemap'
                },
                title: {
                    text: ''
                }
            };
    
        var chart = new ApexCharts(document.querySelector("#size-chart"), options);
        chart.render();
