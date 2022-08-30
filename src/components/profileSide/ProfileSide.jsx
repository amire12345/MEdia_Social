import React from 'react'
import ProfileCard from '../ProfileCard.jsx/ProfileCard'
import LogoSearch from './logoSearch/LogoSearch'
import FollowersCard from '../FollowersCard/FollowersCard.jsx'
import "./ProfileSide.css"

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
     <LogoSearch/>
     <ProfileCard />
     <FollowersCard />
    </div>
  )
}

export default ProfileSide