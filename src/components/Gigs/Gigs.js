import React, { useState } from 'react'
// import GigsCart from './GigsCart'
import './Gigs.css'
import Gig from "./GigsData"
import ProjectCard from './../ProjectCard/ProjectCard';
const Gigs = () => {
    const [items, setItems] = useState(Gig);
    const filterItem = (categItem) => {
   const UpdatedItems = Gig.filter((curElem) =>{
     return curElem.category === categItem;
   } );
   setItems(UpdatedItems);
    } 
    return (
        <div>
            <div className="gigs mt-5">
                <div className="gigs_heading ">
                    <div className="gigs_category">
                        <div className="category">
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <p>|</p>
                        <div className="category_search">
                            <input type="search" placeholder='Marketing' />
                        </div>
                        <div className="category_right">
                            <p>|</p>
                            <h4>Filter</h4>
                            <p>|</p>
                            <h4>Budget</h4>
                        </div>
                    </div>
                    <h1 className="text-left">Posted Gigs</h1>
                </div>
                <div className="gigs_detail">
                    <div className="gigs_tabs container">
                        <div className="gigs-tab d-flex gap-4">
                            <button className='btn btn-primary' onClick={() => filterItem('gigs')}>Gigs</button>
                            <button className="btn btn-primary" onClick={() => filterItem('posted_gigs')}>Posted Gigs</button>
                        </div>
                    </div>

                    <div className="gigs-items container-fluid mt-5">
                        <div className="row ">
                            <div className="col-11 mx-auto">
                                <div className="row my-5 inside">
                                    {
                                        items.map((elem) => {
                                            const { id,
                                                heading,
                                                date,
                                                months,
                                                price,
                                                level,
                                                desc } = elem;

                                            return (
                                                <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4">
                                                    <ProjectCard heading={heading} date={date} months={months} price={price} level={level} desc={desc} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Gigs