

function Team() {
    return (
			<div className="team-page">
				<h1 className="teamHeading" >Team =></h1>

                <div className="members">
				<div className="member">
                
                    <img src='' alt='' />
                    <a href='https://github.com/LjFlint' className='teamMember'>
                        Larry Flint
                    </a>
                    <p className='teamInfo'>
                        Larry worked on both the backend and the frontend. Larry also loves to use all of his spare time solve problems.
				</p>

                </div>
                
                <div className="member">
                
                    <img src='' alt='' />
                    <a href='https://github.com/jccloud01' className='teamMember'>
                        Julie (Jules) Curry
                    </a>
                    <p className='teamInfo'>
                        Jules designed the site and worked on the connecting the front-end
                        with the back-end. She is an avid blind gamer.
                    </p>

                </div>

                <div className="member">

                    <img src='' alt='' />
                    <a href='https://github.com/edgara426' className='teamMember'>
                        Edgar Lopez De Los Santos
                    </a>
                    <p className='teamInfo'>
                        Edgar worked on the back-end and front-end to add functionality and users. Edgar also loves to fish.
                    </p>

                </div>

                <div className="member">
                
                    <img src='' alt='' />
                    <a href='https://github.com/damonpickett' className='teamMember'>
                        Damon Pickett
                    </a>
                    <p className='teamInfo'>
                        Damon worked on the front-end and keeping the team on schedule and sane. Damon is also an avid reader.
                    </p>
                </div>
                </div>
			</div>
		);
}

export default Team;