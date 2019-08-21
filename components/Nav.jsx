import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSignal,
  faEdit,
  faCog,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { FiMenu } from 'react-icons/fi';

const nav = [
  { name: 'Dashboard', link: '/dashboard', icon: FiMenu }
  // { name: 'Monitors', link: '/monitors' },
  // { name: 'Reports', link: '/reports' },
  // { name: 'Settings', link: '/settings' }
];

export default function Nav() {
  return (
    <>
      <div
        className="navigation-styles"
        css={{
          minHeight: '100vh',
          backgroundColor: '#00cffe',
          padding: '0 20px'
        }}
      >
        <Link href="/index">
          <img
            src="../static/textlogo.png"
            css={{ width: 200, margin: '30px 0 50px' }}
          />
        </Link>
        <div css={{ textAlign: 'left' }}>
          <div>
            {nav.map(({ name, link, icon: Icon }) => {
              return (
                <Link href={link}>
                  <div>
                    <Icon />
                    <a>{name}</a>
                  </div>
                </Link>
              );
            })}

            <FontAwesomeIcon icon={faSignOutAlt} size={'xs'} width={'20px'} />
            <a>Logout</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .nav-styles {
          display: flex;
          flex-direction: column;
          align-items: center;
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
        .icon {
          width: 225px;
          display: flex;
          color: white;
          padding-left: 50px;
          align-items: center;
        }
        .icon:hover {
          background-color: #1e90fe;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
