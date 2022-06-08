import React from 'react'
import image from '../news.jpg'

const NewsItem = (props) => {


    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
        <div>
            <div className="card">
                <img src={!imageUrl ? image : imageUrl} className="card-img-top" alt="..." />

                <div className="card-body mt-3">

                    <h5 className="card-title">{title ? title : ""} <span className='badge rounded-pill bg-dark'>{source}</span></h5>

                    <p className="card-text">{description ? description.slice(0, 150) : ""}...</p>

                    <p className='card-text'><small className='text-muted'>By {!author ? "Anonymous" : author} on {new Date(date).toGMTString()}</small></p>

                    <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-dark btn-sm">Read More</a>

                </div>
            </div>
        </div>
    )
}

export default NewsItem
