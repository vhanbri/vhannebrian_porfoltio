import React, {useState} from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section"> 
       <h2 className="section__title">Qualification</h2>
       <span className="section__subtitle">My Personal Journey</span>

       <div className="qualification__container container">
        <div className="qualification__tabs">
            <div
            className={toggleState === 1 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
                }
                onClick={() => toggleTab(1)}
            >  
                <i className="uil uil-graduation-cap
                 qualification__icon"></i> Education
            </div>

            <div className={toggleState === 2
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
                }
                onClick={() => toggleTab(2)}
                > 
                <i className="uil uil-briefcase-alt 
                3"></i> Experience
            </div>
        </div>

        <div className="qualification__sections">
            <div className={
                toggleState === 1 
                ? "qualification__content qualification__content-active" :
                    "qualification__content"
             }
            >
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title"> Bachelor's Degree</h3>
                        <span className="qualification__subtitle"> Computer Science </span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>June 2019-June 2023
                        </div>
                    </div>

                    <div> 
                       <span className="qualification__rounder"></span>
                       <span className="qualification__line"></span>
                    </div>
                </div>

                {/*<div className="qualification__data">
                    <div></div>

                    <div> 
                       <span className="qualification__rounder"></span>
                       <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title"> Secondary Completiuon
                        </h3>
                        <span className="qualification__subtitle"> Confidential Company</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2023 - Present
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Developement</h3>
                        <span className="qualification__subtitle"> Cebu Insitute of Technology - University </span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2023 - Present
                        </div>
                    </div>

                    <div> 
                       <span className="qualification__rounder"></span>
                       <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div> 
                       <span className="qualification__rounder"></span>
                       <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title"> UX Designer
                        </h3>
                        <span className="qualification__subtitle"> Cebu Insitute of Technology - University </span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2023 - Present
                        </div>
                    </div>
                </div>*/}
            </div>

            <div className={
                toggleState === 2
                ? "qualification__content qualification__content-active" :
             "qualification__content"
             }>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Backend Web Developer Intern</h3>
                        <span className="qualification__subtitle"> Sun Asterisk </span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>Jul 2022-Aug 2022
                        </div>
                    </div>

                    <div> 
                       <span className="qualification__rounder"></span>
                       <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div> 
                       <span className="qualification__rounder"></span>
                       <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title"> Sofware Engineer I
                        </h3>
                        <span className="qualification__subtitle"> Confidential Company </span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2023 - Present
                        </div>
                    </div>
                </div>

                {/*<div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Developement</h3>
                        <span className="qualification__subtitle"> Cebu Insitute of Technology - University </span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2023 - Present
                        </div>
                    </div>

                    <div> 
                       <span className="qualification__rounder"></span>
                       <span className="qualification__line"></span>
                    </div>
                </div>*/}

                {/*<div className="qualification__data">
                    <div></div>

                    <div> 
                       <span className="qualification__rounder"></span>
                       <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title"> UX Designer
                        </h3>
                        <span className="qualification__subtitle"> Cebu Insitute of Technology - University </span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2023 - Present
                        </div>
                    </div>
                </div>*/}
            </div>
        </div>
       </div>
    </section>
  )
}

export default Qualification
