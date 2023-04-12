import React from 'react'

import { IDataApi } from '@/interface'

export const ContainCart: React.FC<{data: IDataApi}> = ({data}) => (
    <div className='bg-white border flex items-center border-gray-200 p-6 pl-1 rounded-lg'>
        <img alt='produto' src={data.images[0]} className='w-32 h-24 rounded-lg shadow-lg shadow-black' />
    </div>
  )
