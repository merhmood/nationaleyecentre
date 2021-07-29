import React from 'react'


const DetailsTable = () => {

    const detailsTable = [
        {
            id: 1,
            img: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/icon/hospital.png',
            title: 'PHARMACY',
            details: 'The Hospital provides dispensing of the required medication and advising patients on proper use of the prescribed medication. They also Monitor adverse effects of drugs, Drug distribution and maintained patient’s drug profile. It is Open 24/7.',
        },
        {
            id: 2,
            img:'https://nationaleyecenter.s3.af-south-1.amazonaws.com/icon/eye.png',
            title: 'COMMUNITY OPHTHALMOLOGY',
            details: 'National Eye Centre, Kaduna promotes eye health and blindness prevention through programs utilizing methodologies of public health, community medicine and ophthalmology.'
        },
        {
            id: 3,
            img:'https://nationaleyecenter.s3.af-south-1.amazonaws.com/icon/stethoscope.png',
            title: 'PRIMARY CARE CLINIC',
            details: 'This is a general Ophthalmology Clinic and the first point of contact by patient without previous diagnosis. Patients are thereby Sorted out and referred to respective sub- specialty Clinics for Further investigation and treatment. This Clinic is open 24/7 through out the week, month and year.'
        },
        {
            id: 4,
            img:'https://nationaleyecenter.s3.af-south-1.amazonaws.com/icon/ambulance.png',
            title: 'EMERGENCY SERVICES',
            details: 'This service is available at all time through out the week at the Primary Care Clinic (PCC).'
        }
    ]
    let counter = 0

    return (
        <div className='details-table'>
            {
                detailsTable.map(detail=>{
                    const {id, img, title, details} = detail
                        
                    counter++

                    return(
                        <>
                        <div key={id} className='table'>
                            <img src={img} alt="icon"/>
                            <h4>{title}</h4>
                            <p>{details}</p>
                        </div>
                        <div key={0} className={counter === 4 ? 'seperator-hide': 'seperator'}></div>
                        </>
                    );
                })
            }
        </div>
    )
}

export default DetailsTable