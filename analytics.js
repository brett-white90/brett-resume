// Metric Script Blocks
document.addEventListener('DOMContentLoaded', function() {
    // Common configuration for charts
    const commonChartConfig = {
        chart: {
            height: 100,
            type: 'area',
            sparkline: { enabled: true },
            background: 'transparent'
        },
        markers: {
            size: 2,
            colors: ['transparent'],
            strokeColors: '#00E396',
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

    // Common data for all charts
    const quarters = [
        'Q1 2020', 'Q2 2020', 'Q3 2020', 'Q4 2020',
        'Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021',
        'Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022',
        'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023',
        'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'
    ];

    // Helper function for tooltip formatting
    const createTooltip = (value, dataPointIndex, format = 'currency') => {
        const tooltipValue = format === 'currency' 
            ? new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0
            }).format(value)
            : `${Math.round(value)} ${format}`;

        return (
            '<div class="custom-tooltip" style="background: rgba(0, 0, 0, 0.7); padding: 8px; border-radius: 4px;">' +
                `<div>${quarters[dataPointIndex]}</div>` +
                `<div style="color: #00E396">${tooltipValue}</div>` +
            '</div>'
        );
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
            custom: function({ series, seriesIndex, dataPointIndex }) {
                return createTooltip(series[seriesIndex][dataPointIndex], dataPointIndex);
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
                10328, 82796, 8712, 24845,      // 2020
                27013, 19443, 23158, 12587,     // 2021
                22461, 15443, 19876, 35821,     // 2022
                52447, 71245, 38719, 41876,     // 2023
                47123, 58991, 45876, 35443      // 2024
            ]
        }],
        tooltip: {
            theme: 'dark',
            custom: function({ series, seriesIndex, dataPointIndex }) {
                return createTooltip(series[seriesIndex][dataPointIndex], dataPointIndex);
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
                26, 37, 42, 36,     // 2020
                32, 45, 41, 39,     // 2021
                35, 42, 38, 45,     // 2022
                44, 38, 35, 43,     // 2023
                48, 41, 37, 42      // 2024
            ]
        }],
        tooltip: {
            theme: 'dark',
            custom: function({ series, seriesIndex, dataPointIndex }) {
                return createTooltip(series[seriesIndex][dataPointIndex], dataPointIndex, 'days');
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
                11, 19, 28, 32,     // 2020
                39, 45, 52, 48,     // 2021
                44, 51, 47, 42,     // 2022
                56, 63, 58, 54,     // 2023
                42, 38, 35, 15      // 2024
            ]
        }],
        tooltip: {
            theme: 'dark',
            custom: function({ series, seriesIndex, dataPointIndex }) {
                return createTooltip(series[seriesIndex][dataPointIndex], dataPointIndex, 'opps');
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

    // Common radial chart config
    const commonRadialConfig = {
        chart: {
            type: 'radialBar',
            sparkline: { enabled: true }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#2C3036",
                    strokeWidth: '2%',
                    strokeDashArray: 2,
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
            dashArray: 2,
            width: 2
        }
    };

    // Win Rate - Radial Chart
    const winMetric = new ApexCharts(document.querySelector("#win-metric"), {
        ...commonRadialConfig,
        series: [46],
        chart: {
            ...commonRadialConfig.chart,
            height: 175
        }
    });

    // Lead Consultant - Radial Chart
    const leadMetric = new ApexCharts(document.querySelector("#lead-metric"), {
        ...commonRadialConfig,
        series: [92],
        chart: {
            ...commonRadialConfig.chart,
            height: 150
        },
        plotOptions: {
            radialBar: {
                ...commonRadialConfig.plotOptions.radialBar,
                track: {
                    ...commonRadialConfig.plotOptions.radialBar.track,
                    strokeDashArray: 3
                }
            }
        }
    });

    // Render all charts
    arrMetric.render();
    acvMetric.render();
    daysMetric.render();
    winMetric.render();
    leadMetric.render();
    oppMetric.render();
});

// ARR by Pipeline Charts
   // ARR by Pipeline Charts Implementation
(function() {
    // Helper functions
    function formatQuarterDate(dateString) {
        const date = new Date(dateString);
        return [date.getTime(), date];
    }

    function generateQuarterlyData(year) {
        return [1, 2, 3, 4].map(quarter => {
            const month = (quarter - 1) * 3;
            return `${year}-${String(month + 1).padStart(2, '0')}-01`;
        });
    }

    function formatCurrency(value) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    }

    // Data initialization
    const years = [2020, 2021, 2022, 2023, 2024];
    const quarterlyData = {
        arr: [
            // 2020 Quarters
            [formatQuarterDate('2020-01-01')[0], 507328.55],    
            [formatQuarterDate('2020-04-01')[0], 248988.83],    
            [formatQuarterDate('2020-07-01')[0], 365912.70],    
            [formatQuarterDate('2020-10-01')[0], 393424.05],    
            // 2021 Quarters
            [formatQuarterDate('2021-01-01')[0], 207522.99],    
            [formatQuarterDate('2021-04-01')[0], 243766.64],    
            [formatQuarterDate('2021-07-01')[0], 289647.82],    
            [formatQuarterDate('2021-10-01')[0], 134392.67],    
            // 2022 Quarters
            [formatQuarterDate('2022-01-01')[0], 283189.32],    
            [formatQuarterDate('2022-04-01')[0], 356729.51],    
            [formatQuarterDate('2022-07-01')[0], 394276.80],    
            [formatQuarterDate('2022-10-01')[0], 547744.68],    
            // 2023 Quarters
            [formatQuarterDate('2023-01-01')[0], 643583.71],    
            [formatQuarterDate('2023-04-01')[0], 1318647.45],   
            [formatQuarterDate('2023-07-01')[0], 547094.93],    
            [formatQuarterDate('2023-10-01')[0], 397594.93],    
            // 2024 Quarters
            [formatQuarterDate('2024-01-01')[0], 555589.24],    
            [formatQuarterDate('2024-04-01')[0], 992718.56],    
            [formatQuarterDate('2024-07-01')[0], 823677.48],    
            [formatQuarterDate('2024-10-01')[0], 339206.53]     
        ],
        pipeline: [
            // 2020 Quarters
            [formatQuarterDate('2020-01-01')[0], 477500.00],    
            [formatQuarterDate('2020-04-01')[0], 281952.00],    
            [formatQuarterDate('2020-07-01')[0], 454386.20],    
            [formatQuarterDate('2020-10-01')[0], 618800.00],    
            // 2021 Quarters
            [formatQuarterDate('2021-01-01')[0], 446680.80],    
            [formatQuarterDate('2021-04-01')[0], 476950.00],    
            [formatQuarterDate('2021-07-01')[0], 545870.00],    
            [formatQuarterDate('2021-10-01')[0], 329515.32],    
            // 2022 Quarters
            [formatQuarterDate('2022-01-01')[0], 341400.00],    
            [formatQuarterDate('2022-04-01')[0], 328698.40],    
            [formatQuarterDate('2022-07-01')[0], 545276.80],    
            [formatQuarterDate('2022-10-01')[0], 751098.40],    
            // 2023 Quarters
            [formatQuarterDate('2023-01-01')[0], 884500.00],    
            [formatQuarterDate('2023-04-01')[0], 1164000.00],   
            [formatQuarterDate('2023-07-01')[0], 675000.00],    
            [formatQuarterDate('2023-10-01')[0], 556000.00],    
            // 2024 Quarters
            [formatQuarterDate('2024-01-01')[0], 727000.00],    
            [formatQuarterDate('2024-04-01')[0], 954000.00],    
            [formatQuarterDate('2024-07-01')[0], 1108000.00],   
            [formatQuarterDate('2024-10-01')[0], 454000.00]     
        ]
    };

    // Main chart configuration
    const options1 = {
        chart: {
            id: "chart2",
            type: "area",
            height: 260,
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
            curve: 'smooth'
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
                opacityFrom: 0.65,
                opacityTo: 0
            }
        },
        markers: {
            size: 3,
            colors: ["#000524"],
            strokeWidth: 2
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
                formatter: formatCurrency
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
            height: 140,
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
                    // Remove getTime() calls that TypeScript is misinterpreting
                    min: new Date('2022-04-01'),
                    max: new Date('2024-12-31')
                }
            },
            toolbar: {
                show: false
            },
            animations: {
                enabled: true,
                easing: "easeinout",  // Use double quotes consistently
                speed: 500,
                animateGradually: {
                    enabled: true,
                    delay: 50
                }
            }
        },
        plotOptions: {
            bar: {
                columnWidth: "85%",  // Use double quotes
                borderRadius: 2
            }
        },
        colors: ["#FF0080"],
        // Simplify the series data mapping
        series: [{
            name: "Total",
            data: quarterlyData.arr.map((item, index) => [
                item[0],
                item[1] + quarterlyData.pipeline[index][1]
            ])
        }],
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
            max: (max) => Math.ceil(max / 1000000) * 1000000 * 1.2,
            tickAmount: 4,
            labels: {
                formatter: (value) => `$${(value / 1000000).toFixed(1)}M`,
                style: {
                    fontSize: "10px"
                }
            },
            forceNiceScale: true
        }
    };

    // Chart initialization with improved error handling
    function initializeCharts() {
        try {
            const mainChartElement = document.querySelector("#category-chart-main");
            const brushChartElement = document.querySelector("#category-chart-brush");

            if (!mainChartElement || !brushChartElement) {
                console.error("Chart container elements not found");
                return;
            }

            const chart1 = new ApexCharts(mainChartElement, options1);
            const chart2 = new ApexCharts(brushChartElement, options2);
            
            // Sequential rendering to ensure proper initialization
            chart1.render().then(function() {
                return chart2.render();
            }).catch(function(error) {
                console.error("Error rendering charts:", error);
            });
        } catch (error) {
            console.error("Error initializing charts:", error);
        }
    }

    // Safe initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCharts);
    } else {
        initializeCharts();
    }
})(); 


// Top Module ARR Chart Implementation
(function() {
    // Currency formatter helper
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };

    // Value formatter helper
    const formatValue = (value) => {
        if (typeof value === 'number') {
            return Math.abs(value) >= 1000 
                ? `${Math.sign(value) * Math.floor(Math.abs(value) / 1000)}k`
                : value.toString();
        }
        return value;
    };

    // Chart data
    const moduleData = [
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
    ];

    // Chart configuration
    const moduleChartOptions = {
        series: [{
            data: moduleData
        }],
        chart: {
            type: 'bar',
            height: 400,
            foreColor: '#fff',
            toolbar: {
                show: false
            },
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
            shared: false,
            theme: 'dark',
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                const value = series[seriesIndex][dataPointIndex];
                const label = w.config.series[seriesIndex].data[dataPointIndex].x;
                return `
                    <div style="padding: 8px; background: rgba(0, 0, 0, 0.7); border-radius: 4px;">
                        <div>${label}</div>
                        <div style="color: #00BAEC; font-weight: 600">
                            ${formatCurrency(value)}
                        </div>
                    </div>`;
            }
        },
        dataLabels: {
            enabled: true,
            formatter: formatCurrency,
            style: {
                fontSize: '12px'
            }
        },
        xaxis: {
            type: 'category',
            labels: {
                style: {
                    colors: '#fff'
                },
                formatter: formatValue
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

    // Initialize chart with error handling
    function initializeModuleChart() {
        try {
            const chartElement = document.querySelector("#modules-chart");
            
            if (!chartElement) {
                throw new Error("Module chart container not found");
            }

            const chart = new ApexCharts(chartElement, moduleChartOptions);
            
            chart.render().catch(error => {
                console.error("Error rendering module chart:", error);
            });
        } catch (error) {
            console.error("Error initializing module chart:", error);
        }
    }

    // Safe initialization when DOM is ready
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
        height: '100%',
        width: '100%',
        foreColor: "#ccc",
        redrawOnWindowResize: true
    },
    colors: ['#00E396', '#00BAEC', '#775DD0', '#FF4560', '#FEB019', '#2E93FA', '#66DA26', '#FF66B3'],
    labels: ['Platform', 'Subscription Upgrade', 'Infrastructure', 'Support', 'Renewal', 'Analytics', 'Commerce', 'Accounting'],
    plotOptions: {
        pie: {
            donut: {
                size: '70%',
                labels: {
                    show: true,
                    name: {
                        show: true
                    },
                    value: {
                        show: true,
                        formatter: function(val) {
                            return new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }).format(val);
                        }
                    },
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
                    }
                }
            }
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function(val) {
            return val.toFixed(1) + "%";
        },
        style: {
            fontSize: '12px'
        }
    },
    tooltip: {
        theme: 'dark',
        custom: function({ series, seriesIndex, w }) {
            const value = series[seriesIndex];
            const label = w.config.labels[seriesIndex];
            return `
                <div style="padding: 8px; background: rgba(0, 0, 0, 0.7); border-radius: 4px;">
                    <div>${label}</div>
                    <div style="color: ${w.config.colors[seriesIndex]}">
                        ${new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        }).format(value)}
                    </div>
                </div>`;
        }
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '14px',
        offsetY: 10,
        itemMargin: {
            horizontal: 8,
            vertical: 5
        },
        formatter: function(val, opts) {
            return val;
        }
    },
    responsive: [{
        breakpoint: 768,
        options: {
            legend: {
                fontSize: '12px',
                itemMargin: {
                    horizontal: 5,
                    vertical: 4
                }
            },
            dataLabels: {
                fontSize: '10px'
            }
        }
    }, {
        breakpoint: 480,
        options: {
            legend: {
                fontSize: '11px',
                itemMargin: {
                    horizontal: 3,
                    vertical: 3
                }
            },
            dataLabels: {
                fontSize: '9px'
            }
        }
    }]
};

// Updated Treemap Configuration
const treemapOptions = {
    series: [{
        data: [
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
    chart: {
        type: 'treemap',
        height: 350,
        background: 'transparent',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        treemap: {
            distributed: true,
            enableShades: true,
            colorScale: {
                ranges: [
                    { from: 0, to: 100000, color: '#60a5fa' },
                    { from: 100001, to: 300000, color: '#3b82f6' },
                    { from: 300001, to: 500000, color: '#2563eb' },
                    { from: 500001, to: 1000000, color: '#1d4ed8' }
                ]
            }
        }
    },
    tooltip: {
        theme: 'dark',
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
            const value = w.config.series[seriesIndex].data[dataPointIndex].y;
            const segment = w.config.series[seriesIndex].data[dataPointIndex].x;
            return `
                <div style="padding: 8px; background: rgba(0, 0, 0, 0.7); border-radius: 4px;">
                    <div>${segment}</div>
                    <div style="color: #60A5FA">
                        ${new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        }).format(value)}
                    </div>
                </div>`;
        }
    },
    dataLabels: {
        style: {
            fontSize: '12px',
            colors: ['#fff']
        },
        formatter: function(text) {
            return [text]
        }
    }
};

// Initialize the charts
const pieChart = new ApexCharts(document.querySelector("#arr-category-chart"), pieChartOptions);
const treemapChart = new ApexCharts(document.querySelector("#size-chart"), treemapOptions);

pieChart.render();
treemapChart.render();