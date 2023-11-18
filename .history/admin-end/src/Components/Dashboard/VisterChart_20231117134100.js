import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

const VisterChart = () => {
  return (
    <div><BarChart
    xAxis={[
      {
        id: 'barCategories',
        data: ['Today', 'Yesterday', 'Day Before Yesterday'],
        scaleType: 'band',
      },
    ]}
    series={[
      {
        data: [20, 50, 3],
      },
    ]}
    width={400}
    height={400}
  /></div>
  )
}

export default VisterChart