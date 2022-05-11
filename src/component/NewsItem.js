import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card my-3">
                    <span style={{ zIndex: '1', left: '91%' }} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                        {source}
                    </span>
                    <img src={imageUrl ? imageUrl : 'https://images.moneycontrol.com/static-mcnews/2022/02/LIC-IPO-770x433.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : 'unknown'} on {new Date(date).toGMTString()}</small></p>
                        <a href={newUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem