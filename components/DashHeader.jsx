import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function DashHeader() {
  const [search, setSearch] = useState('');
  return (
    <>
      <div className="top">
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} size={'s'} />
        </div>
        <input value={search} />
        <div className="user-circle">
          <FontAwesomeIcon icon={faUserCircle} size={'2x'} />
        </div>
      </div>
      <div className="bottom">
        <h4>Insights</h4>
        <div className="a-tags">
          <a>weekly</a>
          <a>monthly</a>
        </div>
      </div>
      <style jsx>{`
        .top {
          display: flex;
          justify-content: flex-end;
          margin-right: 3%;
          margin-top: 1%;
          align-items: center;
        }
        .user-circle {
          margin-left: 1%;
          color: #aad3fd;
        }
        .search-icon {
          color: #52a7f8;
        }
        input {
          margin-left: 1%;
        }
        .bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 1%;
          border-bottom: 3px solid lightgrey;
        }
        .a-tags {
          margin-right: 4%;
        }
        h4 {
          margin: 0;
          margin-right: 2%;
          color: #52a7f8;
          font-size: 1.5rem;
        }
        a {
          margin-right: 15%;
          color: #52a7f8;
          padding: 5%;
          font-size: 1.25rem;
        }
        a:hover {
          background-color: #52a7f8;
          color: #e5edf6;
          border-radius: 8px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
