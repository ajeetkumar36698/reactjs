import React from 'react'
import Header from '../common/Header'
import { blogs } from '../data/blogs'
import { Link } from 'react-router-dom'

export default function Blog() {
    let allblogs = blogs.map((v, i) => {
        return (
            <div className='blogitems' key={i}>
                <p>
                    {v.title}
                    {v.body}

                </p>
                <button> <Link to={`/blog/${v.id}`}>read more</Link></button>
            </div>

        )

    })
    return (
        <div>
            <Header />

            <h1>Blog page</h1>
            <div className='container'>
                {allblogs}



            </div>

        </div>
    )
}
