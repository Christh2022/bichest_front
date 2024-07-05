import { RiLineChartLine } from "react-icons/ri";
import { PiChartPieSliceThin } from "react-icons/pi";
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from "react";
import handler from '../../useFunction/crypto';
import { Line } from "react-chartjs-2";

export default function TrendingRates() {
    const [chartData, setChartData] = useState({});
    const [item, setItem] = useState(null)
    const [data, setData] = useState();

    const setDataHnandler = useCallback(async () => {
        try {
            const tab = await handler.fetchData()
            const cryptoTab = await handler.getCryptoService();
            const table = []
                    
            cryptoTab?.forEach((value) => {
                tab?.forEach((val) => {
                    if (val.symbol.toLowerCase() == value.symbol.toLowerCase()) {
                        table.push(val);
                    }  
                })
            })
            
            let item;
            table?.forEach(value => {
                if (value.name.toUpperCase() == "ETHEREUM") {
                    console.log(value);
                    item = value
                }
            })
            
            setItem(item?.quote?.USD);
            setData(item)
            
        } catch (error) {
            console.log(error);
        }
       
    }, [])
     useEffect(() => {
        setDataHnandler()
    }, [setData])

     useEffect(() => {
        const fetchData = async () => {
            try {
               const changes1 = {
          '1h': data?.quote.USD.percent_change_1h*3.2,
          '24h': data?.quote.USD.percent_change_24h*3.1,
          '7d': data?.quote.USD.percent_change_7d,
          '30d': data?.quote.USD.percent_change_30d * 0.5,
          '60d': data?.quote.USD.percent_change_60d * 0.5,
          '90d': data?.quote.USD.percent_change_90d * 0.5,
        };

        const changes = {
          '1h': data?.quote.USD.percent_change_1h,
          '24h': data?.quote.USD.percent_change_24h,
          '7d': data?.quote.USD.percent_change_7d,
          '30d': data?.quote.USD.percent_change_30d,
          '60d': data?.quote.USD.percent_change_60d,
          '90d': data?.quote.USD.percent_change_90d,
        };

        // Formatage des données pour le graphique
        const labels = Object.keys(changes);
        const values1 = Object.values(changes1); // Première série de données (modifiée)
        const values2 = Object.values(changes); // Deuxième série de données (originale)

        const chartData = {
          labels: labels,
          datasets: [
            {
              label: 'Changes (Modified)',
              data: values1,
              backgroundColor: 'rgba(118, 98, 234, 0.2)',
              borderColor: 'rgba(118, 98, 234, 1)',
              borderWidth: 2,
              fill: false,
            },
            {
              label: 'Changes (Original)',
              data: values2,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 2,
              fill: false,
            },
          ],
        };

        setChartData(chartData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [data]);

    const options = {
        maintainAspectRatio: false,    
        responsive: true,   
        scales: {
        y: {
            display: true,
        },
        x: {
            display: true,  
        },
        },
        plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    },
        
    };
    return (
        <div className='py-4 px-5 bg-white rounded-xl'>
            <h3 className='font-poppins font-medium text-[20px]'>Trending Rates</h3>
            <div className='flex items-center justify-between'>
                <div className='flex gap-5'>
                    <div className='flex items-center gap-2'>
                        <span className='w-[6px] h-[6px] bg-primary rounded-[100%] '></span>
                        <span className='font-poppins font-normal text-[13px] text-[rgba(58, 61, 68, 1)] '>Price</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='w-[6px] h-[6px] bg-blue-5 rounded-[100%] '></span>
                        <span className='font-poppins font-normal text-[13px] text-[rgba(58, 61, 68, 1)] '>Market Cap</span>
                    </div>
                </div>
                <div className='flex gap-1 bg-gray rounded-lg px-0.5 py-0.5'>
                    <div className='cursor-pointer flex items-center gap-2 bg-white px-1.5 py-0.5 rounded-lg'>
                        <span className="text-primary"><RiLineChartLine /></span>
                        <span>Line Chart</span>
                    </div>
                    <div className="cursor-pointer flex items-center px-1.5">
                        <span><PiChartPieSliceThin /></span>
                        <span>Pie Chart</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="chart-container" style={{ height: '370px', width: '100%' }}>
                    {chartData?.datasets ? <Line data={chartData} options={options} /> : <p>Loading...</p>}
                </div>
            </div>
        </div>
    )
}


TrendingRates.propTypes = {
  data: PropTypes.object.isRequired,
};

