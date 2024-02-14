import React from 'react'
import Skeleton from '@mui/material/Skeleton';

const SkeletonPAge = () => {
  return (
    <div className='home-container'>
      <div className='sidebar-container'>
        <div className="sb-header">
          <Skeleton variant="rounded" width={"100%"} height={'60px'} />
        </div>
        <div className="sb-search">
          <Skeleton variant="rounded" width={"100%"} height={'60px'} />
        </div>
        <div className="sb-conversations">
          <Skeleton variant="rounded" width={"100%"} height={'60px'} />
        </div>
      </div>
      <div className="online-users-container">
        <div className=" online-users-header">
          <Skeleton variant="rounded" width={"100%"} height={'60px'} />
        </div>
        <div className="sb-search">
          <Skeleton variant="rounded" width={"100%"} height={'60px'} />
        </div>
        <ul className="ou-list">
          <Skeleton variant="rounded" width={"100%"} height={72} style={{ marginBottom: 4 }} />
          <Skeleton variant="rounded" width={"100%"} height={72} style={{ marginBottom: 4 }} />
          <Skeleton variant="rounded" width={"100%"} height={72} style={{ marginBottom: 4 }} />
          <Skeleton variant="rounded" width={"100%"} height={72} style={{ marginBottom: 4 }} />
          <Skeleton variant="rounded" width={"100%"} height={72} style={{ marginBottom: 4 }} />
          <Skeleton variant="rounded" width={"100%"} height={72} />
        </ul>
      </div>
    </div>
  )
}

export default SkeletonPAge