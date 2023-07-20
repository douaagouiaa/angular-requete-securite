import { Options, chart } from 'highcharts';




export const halfDonut : Options= {
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
            borderWidth:20,
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
        text:'progrés '
    },
    legend:{
        enabled:false,
    },

    
    series:[

        {type:'pie',
    
    
        data:[
        {name: 'avancement', y:100 , color:'#eeeeee'},
        {name: ' jours restants', y:1 , color:'#7CBDB9'},
       
    ]}
    ]
};