import { Options, chart } from 'highcharts';




export const donutChartOptions : Options= {
    chart: {
        type: 'pie',
        plotShadow: false,
    },
    credits: {
        enabled: false,
    },
    plotOptions:{

        pie:{
            innerSize:'99%',
            borderWidth:40,
            borderColor:undefined,
            slicedOffset:20,
            
            dataLabels:{
                connectorWidth:0 ,
            }
        }
    },
    title:{
        verticalAlign:'middle',
        floating: true,
        text:'Equipements de sécurité'
    },
    legend:{
        enabled:false,
    },

    
    series:[

        {type:'pie',
    
    
        data:[
        {name: 'a', y:1 , color:'#eeeeee'},
        {name: 'b', y:1 , color:'#7CBDB9'},
       
    ]}
    ]
};