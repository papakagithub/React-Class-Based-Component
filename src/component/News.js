import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": { "id": "bbc-news", "name": "BBC News" },
            "author": "BBC News",
            "title": "Hong Kong's John Lee: Ex-security chief set to become new leader",
            "description": "John Lee's appointment is being seen as a move by China to tighten its grip on the city.",
            "url": "http://www.bbc.co.uk/news/world-asia-china-61345463",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/92B9/production/_124616573_gettyimages-1336625644.jpg",
            "publishedAt": "2022-05-08T02:52:21.3276897Z",
            "content": "Image source, Getty Images\r\nImage caption, John Lee is set to be named as Hong Kong's new leader after running uncontested\r\nJohn Lee is set to be named Hong Kong's new leader on Sunday, once a closed… [+2289 chars]"
        },
        {
            "source": { "id": "bbc-news", "name": "BBC News" },
            "author": "BBC News",
            "title": "'We tried not to watch' - escapees recount terror of Russian-occupied Izyum",
            "description": "Two women recall what happened when Russia took over a strategically-important city in the Donbas.",
            "url": "http://www.bbc.co.uk/news/world-europe-61354626",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5872/production/_124624622_cc1bb55a-135f-43b8-a2b7-8280f949be58.jpg",
            "publishedAt": "2022-05-07T23:22:23.0005876Z",
            "content": "By Sophie Williams and Olga PonaBBC News, Lviv\r\nImage source, Maxym Strelnik\r\nImage caption, Many people in Izyum retreated to basements, to avoid bombardment and soldiers\r\n\"We thought those were our… [+6383 chars]"
        },
        {
            "source": { "id": "bbc-news", "name": "BBC News" },
            "author": "BBC News",
            "title": "Ukraine war: Civilians now out of Azovstal plant in Mariupol, says deputy PM",
            "description": "All elderly people, women and children have left the Azovstal steelworks in Mariupol, says the deputy PM.",
            "url": "http://www.bbc.co.uk/news/world-europe-61362557",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/CA01/production/_124631715_hi075813435.jpg",
            "publishedAt": "2022-05-07T19:07:24.0305769Z",
            "content": "Image caption, The operation was co-ordinated by the UN and the Red Cross\r\nAll elderly people, women and children have been evacuated from the besieged Azovstal steelworks in Mariupol, says Ukraine's… [+2929 chars]"
        },
        {
            "source": { "id": "bbc-news", "name": "BBC News" },
            "author": "BBC News",
            "title": "NI election results 2022: Sinn Féin wins most seats in historic election",
            "description": "The party has won 27 seats in the assembly election, while the most the DUP can reach is 25.",
            "url": "http://www.bbc.co.uk/news/uk-northern-ireland-61355419",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7871/production/_124633803_breaking-promo-976.png",
            "publishedAt": "2022-05-07T18:07:21.780446Z",
            "content": "Sinn Féin will be the largest party in the Northern Ireland Assembly for the first time, pushing the Democratic Unionist Party (DUP) into second place.\r\nSinn Féin has 27 seats, compared to the Democr… [+396 chars]"
        },
        {
            "source": { "id": "bbc-news", "name": "BBC News" },
            "author": "BBC News",
            "title": "How a priceless Roman bust ended up in a Texas thrift store",
            "description": "Bought for just $35 by a sharp-eyed customer, the ancient artefact is now on display in a museum.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-61357483",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/157AE/production/_124628978_romanbustlaura.jpg",
            "publishedAt": "2022-05-07T02:07:17.1232992Z",
            "content": "By Chloe KimBBC News, Washington\r\nImage source, Laura Young\r\nImage caption, The ancient Roman bust being taken home in the passenger seat of a car\r\nIn 2018 Laura Young purchased a bust at Goodwill, a… [+2698 chars]"
        },
        {
            "source": { "id": "bbc-news", "name": "BBC News" },
            "author": "BBC News",
            "title": "Marjorie Taylor Greene: Trump ally defeats bid to block her re-election61358187",
            "description": "Marjorie Taylor Greene blasted the legal challenge as \"an unprecedented attack on free speech\".",
            "url": "http://www.bbc.co.uk/news/world-us-canada-61358187",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6CE0/production/_124627872_gettyimages-1240152627.jpg",
            "publishedAt": "2022-05-06T23:52:17.9664486Z",
            "content": "Image source, Getty Images\r\nImage caption, \r\nA US judge has denied a bid to block a congresswoman from seeking re-election over claims her rhetoric before last year's US Capitol riot amounted to enga… [+2114 chars]"
        },
        {
            "source": { "id": "bbc-news", "name": "BBC News" },
            "author": "BBC News",
            "title": "Depp v Heard: What you may have missed from Heard's testimony",
            "description": "Amber Heard testified about Depp's drunken rages and allegations of emotional and physical abuse.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-61354294",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/100CE/production/_124624756_amberindex.jpg",
            "publishedAt": "2022-05-06T20:22:21.4978714Z",
            "content": "By Holly HonderichBBC News, Washington DC\r\nImage source, Getty Images\r\nImage caption, Amber Heard and Johnny Depp are facing off at trial in Virginia\r\nAmber Heard took the stand this week in her defa… [+7606 chars]"
        },
        {
            "source": { "id": "bbc-news", "name": "BBC News" },
            "author": "BBC News",
            "title": "Saratoga Hotel: Eight dead after huge explosion in Havana",
            "description": "Local officials blamed a gas leak for the explosion at the five-star Saratoga Hotel in Havana, Cuba.",
            "url": "http://www.bbc.co.uk/news/world-latin-america-61358186",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12C48/production/_124627867_2022-05-06t171347z-1317889101-rc2s1u9pi7ee-rtrmadp-3-cuba-fire.jpg",
            "publishedAt": "2022-05-06T19:07:23.2956395Z",
            "content": "Image caption, An explosion rocked the Saratoga Hotel on Friday and tore off its outer facade\r\nAt least eight people have died and more than 30 have been injured after a massive explosion rocked one … [+1592 chars]"
        },
        {
            "source": { "id": "bbc-news", "name": "BBC News" },
            "author": "BBC News",
            "title": "Why Sam Raimi's Spider-Man shows what's wrong with Marvel",
            "description": "20 years ago, the first in the director's web-slinger trilogy set the course for the modern superhero film – but none of its descendants have ever matched it, writes Kambole Campbell.",
            "url": "https://www.bbc.com/culture/article/20220505-why-sam-raimis-spider-man-shows-whats-wrong-with-marvel?utm_source=bbc-news&amp;utm_medium=must-see",
            "urlToImage": "https://ychef.files.bbci.co.uk/live/624x351/p0c52z3y.jpg",
            "publishedAt": "2022-05-06T18:37:24.1380248Z",
            "content": "Whole articles could be dedicated to the MTV Award-winning upside-down kiss between Maguire and Kirsten Dunst's Mary Jane, but in short, it's both iconic and embodies the film's old-school romanticis… [+2725 chars]"
        },
        {
            "source": { "id": "bbc-news", "name": "BBC News" },
            "author": "BBC News",
            "title": "Platinum Jubilee: Harry and Andrew will not appear on Buckingham Palace balcony",
            "description": "Only working royals will appear on the Buckingham Palace balcony for the Platinum Jubilee, the Queen decides.",
            "url": "http://www.bbc.co.uk/news/uk-61351158",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/125E0/production/_124623257_hi061142342.jpg",
            "publishedAt": "2022-05-06T14:22:20.6224179Z",
            "content": "By Sean CoughlanRoyal correspondent\r\nImage source, Getty Images\r\nImage caption, The Jubilee balcony line-up is going to be more limited than this gathering in 2019\r\nPrince Harry and Prince Andrew wil… [+3374 chars]"
        }
    ];
    constructor() {
        super();
        console.log('Hello i am a constructor from news component');
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top headlines</h2>
                <div className="row my-3">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newUrl={element.url} />
                        </div>
                    })};
                </div>
            </div>
        )
    }
}

export default News