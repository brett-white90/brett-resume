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
   
(function() {
    const quarterlyData = {
        arr: [
            // 2020 Quarters
            [new Date('2020-01-01').getTime(), 507328.55],    
            [new Date('2020-04-01').getTime(), 248988.83],    
            [new Date('2020-07-01').getTime(), 365912.70],    
            [new Date('2020-10-01').getTime(), 393424.05],    
            // 2021 Quarters
            [new Date('2021-01-01').getTime(), 207522.99],    
            [new Date('2021-04-01').getTime(), 243766.64],    
            [new Date('2021-07-01').getTime(), 289647.82],    
            [new Date('2021-10-01').getTime(), 134392.67],    
            // 2022 Quarters
            [new Date('2022-01-01').getTime(), 283189.32],    
            [new Date('2022-04-01').getTime(), 356729.51],    
            [new Date('2022-07-01').getTime(), 394276.80],    
            [new Date('2022-10-01').getTime(), 547744.68],    
            // 2023 Quarters
            [new Date('2023-01-01').getTime(), 643583.71],    
            [new Date('2023-04-01').getTime(), 1318647.45],   
            [new Date('2023-07-01').getTime(), 547094.93],    
            [new Date('2023-10-01').getTime(), 397594.93],    
            // 2024 Quarters
            [new Date('2024-01-01').getTime(), 555589.24],    
            [new Date('2024-04-01').getTime(), 992718.56],    
            [new Date('2024-07-01').getTime(), 823677.48],    
            [new Date('2024-10-01').getTime(), 339206.53]     
        ],
        pipeline: [
            // 2020 Quarters
            [new Date('2020-01-01').getTime(), 477500.00],    
            [new Date('2020-04-01').getTime(), 281952.00],    
            [new Date('2020-07-01').getTime(), 454386.20],    
            [new Date('2020-10-01').getTime(), 618800.00],    
            // 2021 Quarters
            [new Date('2021-01-01').getTime(), 446680.80],    
            [new Date('2021-04-01').getTime(), 476950.00],    
            [new Date('2021-07-01').getTime(), 545870.00],    
            [new Date('2021-10-01').getTime(), 329515.32],    
            // 2022 Quarters
            [new Date('2022-01-01').getTime(), 341400.00],    
            [new Date('2022-04-01').getTime(), 328698.40],    
            [new Date('2022-07-01').getTime(), 545276.80],    
            [new Date('2022-10-01').getTime(), 751098.40],    
            // 2023 Quarters
            [new Date('2023-01-01').getTime(), 884500.00],    
            [new Date('2023-04-01').getTime(), 1164000.00],   
            [new Date('2023-07-01').getTime(), 675000.00],    
            [new Date('2023-10-01').getTime(), 556000.00],    
            // 2024 Quarters
            [new Date('2024-01-01').getTime(), 727000.00],    
            [new Date('2024-04-01').getTime(), 954000.00],    
            [new Date('2024-07-01').getTime(), 1108000.00],   
            [new Date('2024-10-01').getTime(), 454000.00]     
        ]
    };

    // Main chart configuration
    const options1 = {
        chart: {
            id: "chart2",
            type: "area",
            height: 230,
            foreColor: "#ccc",
            toolbar: {
                autoSelected: "pan",
                show: false
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 1000,
                animateGradually: {
                    enabled: true,
                    delay: 100
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
        },
        colors: ["#00BAEC", "#A855F7"],
        stroke: {
            width: 3,
            curve: 'smooth',
        },
        grid: {
            borderColor: "#555",
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
            type: 'gradient',
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0
            }
        },
        markers: {
            size: 5,
            colors: ["#000524"],
            strokeWidth: 3
        },
        series: [
            {
                name: "ARR",
                data: quarterlyData.arr
            },
            {
                name: "Pipeline",
                data: quarterlyData.pipeline
            }
        ],
        tooltip: {
            theme: "dark",
            x: {
                format: 'yyyy Q'
            },
            y: {
                formatter: function(value) {
                    return `$${value.toLocaleString()}`;
                }
            },
            shared: true
        },
        xaxis: {
            type: "datetime",
            labels: {
                formatter: function(val) {
                    const date = new Date(val);
                    return `${date.getFullYear()} Q${Math.floor(date.getMonth() / 3) + 1}`;
                }
            }
        },
        yaxis: {
            min: function(min) { return Math.floor(min / 100000) * 100000; },
            max: function(max) { return Math.ceil(max / 100000) * 100000; },
            labels: {
                formatter: function(value) {
                    return `$${(value / 1000000).toFixed(1)}M`;
                }
            },
            tickAmount: 6
        }
    };

    // Brush chart configuration
    const options2 = {
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
                    opacity: 0.2
                },
                xaxis: {
                    min: new Date('2022-04-01').getTime(),
                    max: new Date('2024-12-31').getTime()
                }
            },
            toolbar: {
                show: false
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 500,
                animateGradually: {
                    enabled: true,
                    delay: 50
                }
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '80%',
                borderRadius: 2
            }
        },
        colors: ["#FF0080"],
        series: [
            {
                name: "Total",
                data: quarterlyData.arr.map((item, index) => [
                    item[0],
                    item[1] + quarterlyData.pipeline[index][1]
                ])
            }
        ],
        stroke: {
            show: false
        },
        grid: {
            borderColor: "#444",
            padding: {
                top: 0,
                bottom: 0
            }
        },
        xaxis: {
            type: "datetime",
            tooltip: {
                enabled: false
            }
        },
        yaxis: {
            min: 0,
            max: function(max) {
                return Math.ceil(max / 1000000) * 1000000 * 1.2;
            },
            tickAmount: 4,
            labels: {
                formatter: function(value) {
                    return `$${(value / 1000000).toFixed(1)}M`;
                },
                style: {
                    fontSize: '10px'
                }
            },
            forceNiceScale: true
        }
    };

    // Function to initialize both charts
    function initializeCharts() {
        const chart1 = new ApexCharts(document.querySelector("#category-chart-main"), options1);
        const chart2 = new ApexCharts(document.querySelector("#category-chart-brush"), options2);
        
        // Render both charts
        chart1.render();
        chart2.render();
    }

    // Initialize charts when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCharts);
    } else {
        initializeCharts();
    }
})();

    
// Top Module ARR Chart Implementation
(function() {
    // Create the chart configuration
    const moduleChartOptions = {
        series: [{
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
        }],
        chart: {
            type: 'bar',
            height: 400,
            foreColor: '#fff',
            toolbar: {
                show: false
            },
            // Add animations for smoother rendering
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                }
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
                const formattedValue = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0
                }).format(value);
                
                return (
                    '<div class="custom-tooltip" style="background: rgba(0, 0, 0, 0.7); padding: 8px; border-radius: 4px;">' +
                    `<div>${w.config.series[seriesIndex].data[dataPointIndex].x}</div>` +
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
            type: 'category',
            labels: {
                style: {
                    colors: '#fff'
                },
                formatter: function(value) {
                    return Math.abs(value) >= 1000 ? 
                        Math.sign(value) * ((Math.abs(value) / 1000).toFixed(0)) + 'k' : 
                        value;
                }
            },
            min: 0,
            max: 500000
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#fff'
                }
            }
        }
    };

    // Function to initialize the chart
    function initializeModuleChart() {
        const chart = new ApexCharts(
            document.querySelector("#modules-chart"), 
            moduleChartOptions
        );
        chart.render();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeModuleChart);
    } else {
        initializeModuleChart();
    }
})();

//ARR by Category Pie
    const pieChartOptions = {
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
            
            var pieChart = new ApexCharts(document.querySelector("#arr-category-chart"), pieChartOptions);
            pieChart.render();


// ARR by Customer Size 
    const treemapOptions = {
        series: [{
            data: [
                // Data is ordered from highest to lowest value to help with color gradients
                { x: '$4 Billion+', y: 825000 },
                { x: '$2B to $4B', y: 750000 },
                { x: '$1B to $2B', y: 680000 },
                { x: '$500M to $1B', y: 590000 },
                { x: '$400M to $500M', y: 520000 },
                { x: '$300M to $400M', y: 480000 },
                { x: '$250M to $300M', y: 450000 },
                { x: '$200M to $250M', y: 420000 },
                { x: '$150M to $200M', y: 380000 },
                { x: '$100M to $150M', y: 340000 },
                { x: '$50M to $100M', y: 290000 },
                { x: '$30M to $50M', y: 245000 },
                { x: '$20M to $30M', y: 210000 },
                { x: '$10M to $20M', y: 175000 },
                { x: '$5M to $10M', y: 142000 },
                { x: '$2M to $5M', y: 98000 },
                { x: '$1M to $2M', y: 65000 },
                { x: '$500k to $1M', y: 45000 },
                { x: 'Under $500K', y: 25000 }
            ]
        }],
        legend: {
            show: false
        },
        chart: {
            height: 350,
            type: 'treemap',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: true,
                shadeIntensity: 0.8,  // Increased for more color contrast
                colorScale: {
                    ranges: [{
                        from: 0,
                        to: 100000,
                        color: '#93C5FD'  // Lightest blue
                    }, {
                        from: 100001,
                        to: 300000,
                        color: '#60A5FA'  // Light blue
                    }, {
                        from: 300001,
                        to: 500000,
                        color: '#3B82F6'  // Medium blue
                    }, {
                        from: 500001,
                        to: 1000000,
                        color: '#2563EB'  // Dark blue
                    }]
                }
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '14px',  // Increased text size
                fontWeight: 600,
                colors: ['#fff']
            },
            formatter: function(text, op) {
                // Only show the segment name, not the value
                return [text]
            },
            offsetY: -4
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                const value = w.config.series[seriesIndex].data[dataPointIndex].y;
                const segment = w.config.series[seriesIndex].data[dataPointIndex].x;
                
                // Format the tooltip with larger text and clear value formatting
                return `<div class="custom-tooltip" style="padding: 8px; font-size: 14px;">
                    <div style="margin-bottom: 4px">${segment}</div>
                    <div style="color: #60A5FA; font-size: 16px; font-weight: bold">
                        $${Math.round(value/1000)}K
                    </div>
                </div>`;
            }
        }
    };

    var treemapChart = new ApexCharts(document.querySelector("#size-chart"), treemapOptions);
    treemapChart.render();
