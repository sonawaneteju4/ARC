import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const ProductSell = () => {
  return (
    <div>
       <PieChart
      series={[
        {
          data: [
            { id: 0, value: 32, label: 'Mobile A' },
            { id: 1, value: 21, label: 'Laptop B' },
            { id: 2, value: 11, label: 'Other C' },
          ],
        },
      ]}
      width={400}
      height={200}
    /> 
    </div>
  )
}

export default ProductSell