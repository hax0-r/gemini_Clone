import React, { useContext, useEffect, useRef } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import geminiImg from '../assets/gemini-icon.png';
import talha from '../assets/Talha.png';
import styled from 'styled-components';
import Card from './Card';
import { IoImagesOutline } from 'react-icons/io5';
import { CiMicrophoneOn } from 'react-icons/ci';
import { VscSend } from 'react-icons/vsc';
import { Context } from '../Context/ContextApi';

const Main = () => {
    const contentRef = useRef(null);

    const {
        input,
        setinput,
        recentPrompt,
        showresult,
        loading,
        resultData,
        onSend,
    } = useContext(Context);

    const promptHandler = () => {
        if (input.length > 0) {
            onSend(input);
        }
        setinput('');
    };

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
    }, [resultData, loading]);

    return (
        <div className="w-full p-3 py-8 pb-4 relative min-h-screen  ">
            <div className="flex justify-between items-center px-9 pl-5 tracking-wide">
                <p className="flex justify-center items-center text-xl gap-2 cursor-pointer font-normal text-colBlack">
                    Gemini <MdArrowDropDown />
                </p>
                <div className="flex justify-center gap-5 items-center">
                    <div className="hidden sm:block">
                        <div className="flex gap-2 justify-center cursor-pointer transition-all hover:bg-[#c8cdd3] items-center bg-[#dde3ea] p-2 px-4 rounded-lg">
                            <img className="h-4 animate-spinItem" src={geminiImg} alt="Gemini Icon" />
                            <p className="text-sm ">Try Gemini Advance</p>
                        </div>
                    </div>
                    <img className="h-10 sm:h-14 bg-colgray rounded-full" src={talha} alt="Talha" />
                </div>
            </div>
            <div className="">
                {!showresult ? (
                    <Cards className="h-[55vh] overflow-y-scroll mt-8 scroll-smooth">
                        <div style={{ lineHeight: "4rem" }} className="flex justify-center flex-col items-center">
                            <h1 className="text-[56px] text-[#C4C7C5] font-bold">
                                <Span className=''>Hello, Dev</Span> <br />
                                How can I help you today?
                            </h1>
                        </div>
                        <div className="flex justify-center items-center gap-5 pb-10">
                            <Card />
                        </div>
                    </Cards>
                ) : (
                    <Cards className="h-[55vh] max-w-[68rem]  w-full m-auto overflow-y-scroll mt-8 scroll-smooth md:px-[10vh] p-3" ref={contentRef}>
                        <div className="flex items-center gap-5">
                            <img src={talha} alt="Talha" className="h-10 sm:h-12 animate-fade rounded-full" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="flex my-7 gap-5">
                            <img src={geminiImg} alt="Gemini Icon" className="h-6 sm:ml-3 mr-2 animate-fade" />
                            {loading ? (
                                <div className="w-full flex flex-col gap-2">
                                    <Hr className="rounded" />
                                    <Hr className="rounded" />
                                    <Hr className="rounded" />
                                </div>
                            ) : (
                                <p className='tracking-wide leading-7 animate-fade' dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </Cards>
                )}

                <div className="m-auto flex max-w-[60rem] w-full items-center justify-center">
                    <div className="inputs  w-full mx-auto ">
                        <div className="flex justify-center items-center pl-8 gap-5 bg-colgray p-5 rounded-full">
                            <input
                                onKeyPress={(e) => (e.key === 'Enter' ? promptHandler() : null)}
                                onChange={(e) => setinput(e.target.value)}
                                value={input}
                                type="text"
                                className="w-full bg-transparent tracking-wide"
                                placeholder="Enter a prompt here"
                            />
                            <IoImagesOutline className="cursor-pointer text-xl" />
                            <CiMicrophoneOn className="cursor-pointer text-2xl" />
                            {
                                input &&
                                <VscSend onClick={promptHandler} className="cursor-pointer text-2xl animate-fade" />
                            }
                        </div>
                        <p className="text-center pt-4 text-colBlack">
                            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

const Span = styled.span`
  background: linear-gradient(16deg, #4b90ff, #ff5546);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Cards = styled.div`
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Hr = styled.hr`
  background-color: #f6f7f8;
  background: linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff);
  background-size: 800px 50px;
  padding: 0.6rem;
  animation: loader 3s linear infinite;
  @keyframes loader {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;
