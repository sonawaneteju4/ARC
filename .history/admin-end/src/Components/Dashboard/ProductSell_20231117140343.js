import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const ProductSell = () => {
  return (
    <div>
       <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Mobile A' },
            { id: 1, value: 15, label: 'Laptop B' },
            { id: 2, value: 20, label: 'Other A C' },
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