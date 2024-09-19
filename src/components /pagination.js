import React from 'react'

const pagination = () => {
    const { page, nbPages } = useGlobalContext();
    
    return (
        <>
            <div className='pagination_btn'>
                <button onClick={() => getPrevPage()}>PREV</button>
                <p>
                    {page} of {nbPages}
                </p>
                <button onClick={() => getNextPage}></button>
            </div>

        </>
    )
};