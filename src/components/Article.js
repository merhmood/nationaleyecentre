import React from 'react'

import './Article.css'

const Article = () => {

    const articles = [
        {
            id: 1,
            img: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/post/IMG-20210521-WA0000.jpg',
            title: 'CMD Signs MOU between National Eye Institute, USA and National Eye Centre, Kaduna',
            details: 'The Chief Medical Director, Dr. M.B. Alhassan on the 19th of May, 2021 signed a Memorandum of Understanding between National Eye Institute USA and National Eye Centre'

        },
        {
            id: 2,
            img: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/post/FB_IMG_16206377968709601-1.jpg',
            title: 'We’ve Developed Strong Advocacy Strategies To Reach All Parts Of Nigeria – Dr. Mahmoud Alhassan',
            details: 'The Chief Medical Director, Dr. Mahmoud Alhassan granted an interview to the North West Bureau Chief of Daily Independent Newspaper, Mrs. Juliet Oyoyo.'
        },
        {
            id: 3,
            img: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/post/cmd-and-hod-staff.jpg',
            title: 'NEC Receives Covid-19 Vaccine',
            details: 'The Chief Medical Director, Dr. Mahmoud Alhassan, on the 23rd of March, 2021 led the management and staff of the Centre to take the COVID-19 vaccination in the Centre.'

        },
        {
            id: 4,
            img: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/post/IMG-20210521-WA0000.jpg',
            title: 'CMD Signs MOU between National Eye Institute, USA and National Eye Centre, Kaduna',
            details: 'The Chief Medical Director, Dr. M.B. Alhassan on the 19th of May, 2021 signed a Memorandum of Understanding between National Eye Institute USA and National Eye Centre'

        }
    ]
    return (
        <div className='articles'>
            <h4>See our latest article</h4>
            <div className='underline'></div>
            <div className='article-container'>
                {
                    articles.map(article=>{

                        const {id, img, title, details} = article

                        return(
                            <div key={id} className='article'>
                                <img src={img} alt="articleImg" />
                                <h4>{title}</h4>
                                <p>{details}</p>
                                <h5>Read more</h5>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export  default Article