import React from 'react';

const pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    // const { page, nbPages } = useGlobalContext();
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-items ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} href="!#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default pagination;
// import React from 'react';

// const Post = ({ posts, loading }) => {
//     if (loading) {
//         return <h1>Loading...</h1>;
//     }

//     return (
//         <>
//             {posts.map((data, index) => (
//                 <div className='list' key={index}>
//                     <p>{data.title}</p>
//                 </div>
//             ))}
//         </>
//     );
// };

// export default Post;