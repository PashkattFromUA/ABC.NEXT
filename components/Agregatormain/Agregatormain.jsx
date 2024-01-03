'use client'

import { React } from 'react'
import PaginatedButtonsSlider from '@/components/Paginatedagregator/Paginatedbuttonslider'

const Agregatormain = (props) => {

    const labels = props.data;

    return (
        <section className='gradient'>
            <div className="block" id="agregator">
                <PaginatedButtonsSlider data={labels} />
            </div>
        </section>
    )
}

export default Agregatormain