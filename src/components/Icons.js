import React from 'react';

const Icons = {
    facebook: () => (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
            <path d='M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z' />
        </svg>
    ),
    twitter: () => (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
            <path d='M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z' />
        </svg>
    ),
    point: () => (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M7.5 15.5V4a1.5 1.5 0 1 1 3 0v4.5h2a1 1 0 0 1 1 1h2a1 1 0 0 1 1 1H18a1.5 1.5 0 0 1 1.5 1.5v3.099c0 .929-.13 1.854-.385 2.748L17.5 23.5h-9c-1.5-2-5.417-8.673-5.417-8.673a1.2 1.2 0 0 1 1.76-1.605L7.5 15.5zm6-6v2m-3-3.5v3.5m6-1v2' />
        </svg>
    ),
    infinity: () => (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M13 14.5s2 3 5 3 5.5-2.463 5.5-5.5S21 6.5 18 6.5c-5 0-7 11-12 11C2.962 17.5.5 15.037.5 12S3 6.5 6 6.5s4.5 3.5 4.5 3.5' />
        </svg>
    ),
    avatar: () => (
        <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'><path d='M3.513 18.998C4.749 15.504 8.082 13 12 13s7.251 2.504 8.487 5.998C18.47 21.442 15.417 23 12 23s-6.47-1.558-8.487-4.002zM12 12c2.21 0 4-2.79 4-5s-1.79-4-4-4-4 1.79-4 4 1.79 5 4 5z' fill='#FFF' /></g>
        </svg>
    ),
    rss: () => (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <circle cx='6.18' cy='17.82' r='2.18' />
            <path d='M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z' />
        </svg>
    ),
    website: () => (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M23.5 11.957c0 6.375-5.163 11.544-11.532 11.544C5.599 23.5.5 18.125.5 11.75.5 5.542 5.37.758 11.505.511l.5-.011C18.374.5 23.5 5.582 23.5 11.957zM11.505.511c-6 6.5-6 14.98 0 22.98m1-22.98c6 6.5 6 14.977 0 22.977M2 17.479h20.063m-19.657-12h19.062m-20.968 6h22.938' stroke='#000' strokeLinejoin='round' strokeMiterlimit='10' fill='none' />
        </svg>
    )
}

export default Icons