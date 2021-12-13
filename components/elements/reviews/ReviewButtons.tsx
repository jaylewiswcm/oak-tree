import React, { Component } from "react";
import Image from 'next/image';

interface  ComponentProps {
    selected: boolean,
    onClick : React.MouseEventHandler<HTMLButtonElement>,
    enabled: boolean
}

export const DotButton = ({ selected, onClick }:ComponentProps) => (
    <button
        className={`dot ${selected ? 'active-dot' : ""}`}
        onClick={onClick}
    />
);

export const PrevButton = ({ enabled, onClick }: ComponentProps) => (
    <button  
        className={`control-btn review-capsule-btns`}
        onClick={onClick}
        disabled={!enabled}
        >
        <Image 
            src={`/buttons/prev-white-bg.svg`}
            alt='Prev Button'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
        />
    </button>
);

export const NextButton = ({ enabled, onClick }: ComponentProps) => (
    <button  
        className={`control-btn review-capsule-btns`}
        onClick={onClick}
        disabled={!enabled}
        >
        <Image 
            src={`/buttons/next-white-bg.svg`}
            alt='Next Button'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
        />
    </button>
);
