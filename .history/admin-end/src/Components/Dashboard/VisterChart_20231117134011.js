import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

const VisterChart = () => {
  return (
    <div><BarChart
    xAxis={[
      {
        id: 'barCategories',
        data: ['Today', 'Yesterday', 'Last '],
        scaleType: 'band',
      },
    ]}
    series={[
      {
        data: [2, 5, 3],
      },
    ]}
    width={500}
    height={300}
  /></div>
  )
}

export default VisterChart