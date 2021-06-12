import React from 'react'
import "./Profile.css"
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'


const Profile = ({profile, handleName, children}) => {
    
        return (
        <div className="card">
            {children}

            <div>
                <h1 className='title' style={{fontVariant:'small-caps',
                                              color:'#292834',
                                              fontSize:'40pt'}}>
                {profile.fullName}
                </h1>
                <p className="bio" style={{color:'#4d94ff'}}>
                    {profile.bio}
                </p>
                <p style={{color:'#3385ff', fontVariant:'small-caps', fontSize:'15pt', letterSpacing:'0.1em'}}>
                    {profile.profession}
                </p>
            </div>
            <Button onClick={() => handleName(profile.fullName)}>My Name is</Button>

        </div>
    )  
}

Profile.propTypes = {
    profile: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        profession: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
    }),

    handleName: PropTypes.func.isRequired,
};

export default Profile


