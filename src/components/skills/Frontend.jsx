import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <div className="title__container">
            <h3 className="skills__title">Fron-tend Developer</h3>
        </div>
        <div className="skills__box">

            {/* SKILLS GROUP 1 */}
            <div className="skills__group">

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">JavasScript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

            </div>

            {/* SKILLS GROUP 2 */}
            <div className="skills__group">

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">CSS Framework</h3>
                        <span className="skills__level">Sass, Bootstrap, Tailwind CSS</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">JavaScript Framework</h3>
                        <span className="skills__level">React JS, Jquery, Angular</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Aditional</h3>
                        <span className="skills__level">Git</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Frontend