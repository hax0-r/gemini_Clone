import React, { useContext, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { HiMiniBars3 } from 'react-icons/hi2'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import { LuMessageSquare } from 'react-icons/lu'
import { MdOutlineSettings } from 'react-icons/md'
import { RxCountdownTimer } from 'react-icons/rx'
import { Context } from '../Context/ContextApi'

const Sidebar = () => {

    const [toggleSidebar, settoggleSidebar] = useState(false);
    const { prevPrompt, onSend, setrecentPrompt, newChat } = useContext(Context)

    return (
        <>
            <HiMiniBars3 onClick={() => settoggleSidebar(prev => !prev)} className='text-colBlack cursor-pointer text-2xl mb-12 absolute' />
            <div className={`sidebar flex justify-between transition-all duration-500 overflow-hidden flex-col min-h-screen bg-colgray ${toggleSidebar ? "w-[20rem]" : "w-[0rem]"}   py-10 select-none`}>
                <div className="px-7">
                    <div onClick={() => newChat()} className="inline-flex text-[#9a9da1] p-3 gap-3 items-center bg-[#e5eaf1] rounded-full mb-8 -ml-2">
                        <FiPlus className='text-xl' /> {toggleSidebar && "New Chat"}
                    </div>
                    {
                        toggleSidebar && (
                            <div className="animate-fade">
                                <p className='font-[600] mb-4 tracking-wider text-[14px] text-colBlack'>Recent</p>
                                {
                                    prevPrompt.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 bg-[
                                        #e5eaf1] rounded-full mb-8 -ml-2 cursor-pointer"
                                            onClick={() => {
                                                setrecentPrompt(item)
                                                onSend(item)
                                            }}>
                                            <LuMessageSquare className='text-[#9a9da1]' /> {item.slice(0, 18)} ...
                                        </div>
                                    ))}
                            </div>

                        )
                    }
                </div>
                <div className="p-2">
                    <div className="flex text-colBlack items-center gap-4 w-full cursor-pointer hover:bg-[#e5eaf1] duration-300 p-3 px-5 rounded-full transition-all ">
                        <IoIosHelpCircleOutline className='text-xl' /> {toggleSidebar && "Help"}
                    </div>
                    <div className="flex text-colBlack items-center gap-4 w-full cursor-pointer hover:bg-[#e5eaf1]  duration-300 p-3 px-5 rounded-full transition-all ">
                        <RxCountdownTimer className='text-xl' /> {toggleSidebar && "Activity"}
                    </div>
                    <div className="flex text-colBlack items-center gap-4 w-full cursor-pointer hover:bg-[#e5eaf1]  duration-300 p-3 px-5 rounded-full transition-all ">
                        <MdOutlineSettings className='text-xl' /> {toggleSidebar && "Setting"}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar