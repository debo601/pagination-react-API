import React, { useEffect, useState } from 'react'
import './starwars.css';


const Starwars = () => {

    const [data, setData] = useState([]);

    const getStarWarsData = async () => {
        try {
            const res = await fetch('https://swapi.dev/api/people');
            const actualData = await res.json();
            console.log(actualData);
            setData(actualData);
        }

        catch (err) {
            console.log(err);

        }

    }



    useEffect(() => {
        getStarWarsData();
    }, []);

    return (
        <>
            <section>
                <h1>SWAPI</h1>
                <p>The Starwars Api </p>

                {/* <div className='tab'>
                    <ul>
                        <li className='card'>
                            <div className='card__main'>
                                <div className="card__inner">
                                    <p className='card__name'>TOTAL COUNTRY</p>
                                    <p className='card__total card_small'>{data.perso}</p>

                                </div>
                            </div>

                        </li>
                    </ul>

                    <ul>
                        <li className='card'>
                            <div className='card__main'>
                                <div className="card__inner">
                                    <p className='card__name'>TOTAL COUNTRY</p>
                                    <p className='card__total card_small'>India</p>

                                </div>
                            </div>

                        </li>
                    </ul>
                </div> */}
            </section >
        </>


    )
}

export default Starwars;