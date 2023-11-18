import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

const VisterChart = () => {
  return (
    <div><BarChart
    xAxis={[
      {
        id: 'barCategories',
        data: ['17/11/23', 'Yesterday', 'Day Before Yesterday'],
        scaleType: 'band',
      },
    ]}
    series={[
      {
        data: [22, 59, 36],
      },
    ]}
    width={400}
    height={400}
  /></div>
  )
}

export default VisterChart