import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../common/Header'
import { blogs } from '../data/blogs'

export default function BlogDetails() {
    let useloction=useLocation()
    let currentId=useloction.pathname.split('/')[2]
    let currntData=blogs.filter((v)=>v.id==currentId)[0]
    console.log(currntData)

    
  return (
    <div>
        <Header/>
        <h1>{currntData.title}</h1>


    </div>
  )
}
