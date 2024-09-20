import React, { useEffect, useState } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DataTable from './components /DataTable';
import Pagination from './components /Pagination'


const App = () => {
  // return (
  //   <>
  //     <DataTable />
  //   </>
  // );
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://swapi.dev/api/people/');
      const result = await response.json();
      setData(result.results);
    };

    fetchData();

  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mt-4'>
      <DataTable data={currentItems} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
        currentPage={currentPage} />
    </div>
  );
};

export default App;
