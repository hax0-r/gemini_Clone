import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { IoCompassOutline } from 'react-icons/io5'

const Card = () => {
    return (
        <>
        <div className="flex justify-center items-center gap-5 mt-10">

            <div className="hover:bg-[#DDE3EA] transition-all duration-300 cursor-pointer p-5 relative min-h-[200px] w-[220px] bg-colgray text-colBlack rounded-lg">
                <p>Provide questions to help me prepare for an interview</p>
                <CiEdit className='flex absolute bottom-3 right-3 bg-white rounded-full p-2 justify-center items-center w-10 h-10 text-colBlack' />
            </div>
            <div className="hover:bg-[#DDE3EA] transition-all duration-300 cursor-pointer p-5 relative min-h-[200px] w-[220px] bg-colgray text-colBlack rounded-lg">
                <p>Help me find the latest trends</p>
                <IoCompassOutline  className='flex absolute bottom-3 right-3 bg-white rounded-full p-2 justify-center items-center w-10 h-10 text-colBlack' />
            </div>
            <div className="hover:bg-[#DDE3EA] transition-all duration-300 cursor-pointer p-5 relative min-h-[200px] w-[220px] bg-colgray text-colBlack rounded-lg">
                <p>Help me draft a response to a friend</p>
                <CiEdit className='flex absolute bottom-3 right-3 bg-white rounded-full p-2 justify-center items-center w-10 h-10 text-colBlack' />
            </div>
            <div className="hover:bg-[#DDE3EA] transition-all duration-300 cursor-pointer p-5 relative min-h-[200px] w-[220px] bg-colgray text-colBlack rounded-lg">
                <p>Give me phrases to learn a new language</p>
                <IoCompassOutline className='flex absolute bottom-3 right-3 bg-white rounded-full p-2 justify-center items-center w-10 h-10 text-colBlack' />
            </div>
        </div>
        </>
    )
}

export default Card