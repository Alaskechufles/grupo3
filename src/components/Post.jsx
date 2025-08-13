import React from 'react'

export default function Post({ title, body }) {
    return (
        <div className=' border w-[150px] bg-amber-200 rounded-2xl p-2'>
            <p className=' font-bold max-w-[140px]'>{title}</p>
            <p className=' max-w-[140px]'>{body}</p>
        </div>
    )
}
