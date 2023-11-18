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
        data: [2, 5, 3],
      },
    ]}
    width={500}
    height={400}
  /></div>
  )
}

export default VisterChart