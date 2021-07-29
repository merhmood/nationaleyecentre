import React from 'react'


const imageTable = [
    {
        id: 1,
        image: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/image+slider/45956495_2126092527642097_5685731672708874240_n.jpg'
    },
    {
        id: 2,
        image: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/image+slider/164812420_2765987203652623_4873268529845478324_n.jpg'

    },
    {
        id: 3,
        image: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/image+slider/164149095_2765986803652663_4009652589536184257_n.jpg'

    },
    {
        id: 4,
        image: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/image+slider/131048450_2695272034057474_8434669068771996720_n.jpg'

    },
    {
        id: 5,
        image: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/image+slider/93851435_2499023010349045_4996569561219203072_n.jpg'

    },
    {
        id: 6,
        image: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/image+slider/74634686_2358012004450147_8070548096725024768_n.jpg'

    },
    {
        id: 7,
        image: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/image+slider/67803829_2291746484410033_1674040628343734272_n.jpg'

    },
    {
        id: 8,
        image: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/image+slider/67587650_2289788791272469_7477023748592238592_n.jpg'

    },
    {
        id: 9,
        image: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/image+slider/164505025_2765987010319309_8544790218260470292_n.jpg'

    },
    {
        id: 10,
        image: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/image+slider/164523688_2765987520319258_121243978846202825_n.jpg'

    },
    {
        id: 11,
        image: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/image+slider/103907684_2539124816338864_2961945245499856157_n.jpg'

    },
    {
        id: 12,
        image: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/image+slider/126606410_2678114922439852_5846677242296663095_n.jpg'

    },
    {
        id: 13,
        image: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/image+slider/68315796_2291746434410038_1938597548486819840_n.jpg'

    },
    {
        id: 14,
        image: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/image+slider/87647943_2452824321635581_111363738866548736_n.jpg'

    },
]

const ImageTable = () => {
    return (
        <div className='image-table' >
            <div className='image-wrapper'>
                {
                    imageTable.map(data=>{

                        const {id, image} = data
                        return (
                            <div key={id}>
                                <img src={image} alt='imageTable' className='image'/>
                            </div>
                        );
                    })
                }
            </div>
            <div className='overlay'></div>
        </div>
    )
}

export default ImageTable