import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <>
       <div className='navigation-styles'>
                <Link href='/index'>
                <img src='../static/welldoneLOGO.png' />
                </Link>
            <div className='nav-styles'>
                <div>
                {/* <FontAwesomeIcon icon={faBars} size={'xs'} width={'20px'}/> */}
                <Link href='/dashboard'>
                    <a>Dashboard</a>
                </Link>
                </div>
                <div>
                {/* <FontAwesomeIcon icon={faSignal} size={'xs'} width={'20px'}/> */}
                <Link href='/monitors'>
                    <a>Monitors</a>
                </Link>
                </div>
                <div>
                {/* <FontAwesomeIcon icon={faEdit} size={'xs'} width={'20px'}/> */}
                <Link href='reports'>
                    <a>Reports</a>
                </Link>
                </div>
                <div>
                {/* <FontAwesomeIcon icon={faCog} size={'xs'} width={'20px'}/> */}
                <Link href='settings'>
                    <a>Settings</a>
                </Link>
                </div>
                <div>
                {/* <FontAwesomeIcon icon={faSignOutAlt} size={'xs'} width={'20px'}/> */}
                    <a>Logout</a>
                </div>
            </div>
        </div>
        <style jsx>{`
      .navigation-styles {
        display: flex;
        flex-direction: column;
        width: 275px;
        align-items: center;
        background-color: #00cffe;
        height: 686px;
      }
      .nav-styles {
        display: flex;
        flex-direction: column;
        align-items: center
      }
      a {
          padding: 5px;
          padding-left: 10px;
          padding-top: 10px;
          font-family: Roboto;
          font-size: 1.25rem;
          color: white;
          text-decoration: none;
      }
      a:hover {
        background-color: #1e90fe;
        cursor: pointer;
      }
    `}</style>
    </>
  )
}
