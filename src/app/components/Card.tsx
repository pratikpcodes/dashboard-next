import React from 'react'
import { cardData } from '../types'


interface CardProps {
    data: cardData[]; // Define the data prop
    col1: keyof cardData; // Ensure col1 is a valid key of cardData
    col2: keyof cardData;
    col3: keyof cardData;
    col4: keyof cardData;
    col5: keyof cardData | null;
}
// const Card = ({ data }: { data: cardData[] }, col1: string, col2: string, col3: string, col4: string, col5: string) => {
const Card: React.FC<CardProps> = ({ data, col1, col2, col3, col4, col5 }) => {

    return (
        <div className='absolute top-50 bottom-0 left-10 right-10 bg-[#D8C2A7] flex  justify-around pt-4 px-10  border-2 rounded-lg  border-black '>

            <div  >
                <h1 className='text-center opacity-70'>{col1.charAt(0).toUpperCase() + col1.slice(1)}</h1>
                {data.map((data, index) => (
                    <div className='p-2' key={index}>
                        <h2 className='text-center' >Booking {data[col1]}</h2>

                    </div>
                ))}

            </div>
            <div  >
                <h1 className='  text-center opacity-70'>
                    {col2.charAt(0).toUpperCase() + col2.slice(1)}
                </h1>

                {data.map((data, index) => (
                    <div className='p-2' key={index}>
                        <h2 className='text-center'> {data[col2]}</h2>

                    </div>
                ))}




            </div>
            <div  >


                <h1 className=' text-center opacity-70'> {col3.charAt(0).toUpperCase() + col3.slice(1)}</h1>

                {data.map((data, index) => (
                    <div className='p-2' key={index}>
                        <h2 className='text-center'> {data[col3]}</h2>

                    </div>
                ))}
            </div>
            <div >


                <h1 className=' text-center opacity-70'>    {col4.charAt(0).toUpperCase() + col4.slice(1)}</h1>
                {data.map((data, index) => (
                    <div className='p-2' key={index}>
                        {data[col4] === "Active" ? (
                            <h2 className='text-center text-green-700'>{data[col4]}</h2>
                        ) : data[col4] === "Pending" ? (
                            <h2 className='text-center text-red-700'>{data[col4]}</h2>
                        ) : (
                            <h2 className='text-center'>{data[col4]}</h2>
                        )}


                    </div>
                ))}
            </div>
            <div>


                <h1 className=' text-center opacity-70'>   {
                        col5!==null? (
                            <h2 className='text-center'>{col5.charAt(0).toUpperCase() + col5.slice(1)}</h2>

                        ):(
                            <h1> Order Details</h1>

                        )

                        }</h1>

                {data.map((data, index) => (
                    <div className='p-2' key={index}>                
         {
                        col5!==null? (
                            <h2 className='text-center'>{data[col5]}</h2>

                        ):(
                            <h1 className=' bg-[#462B0A] hover:scale-90 transition-all text-white text-center'> View</h1>

                        )

                        }

                    </div>
                ))}
            </div>



        </div>
    )
}

export default Card