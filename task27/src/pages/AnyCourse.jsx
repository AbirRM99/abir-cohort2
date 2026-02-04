import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourse = () => {

    const param = useParams()
    return (
        <div><h1 className='text-5xl capitalize underline whitespace-nowrap font-bold fixed left-[50vw] -translate-x-1/2'>{param.id} Course Page</h1></div>
    )
}

export default AnyCourse