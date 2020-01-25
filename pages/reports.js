import React from "react"
import Seo from "../components/Seo"
import DashHeader from "../components/Header"
import DataTable from 'react-data-table-component';
import styled from 'styled-components';

const TextField = styled.input`
  height: 32px;
  width: 300px;
  border-radius: 3px;
  border: 1px solid #e5e5e5;
  padding: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Filter = ({ onFilter }) => (
  <TextField id="search" type="search" role="search" placeholder="Search Pump" onChange={e => onFilter(e.target.value)} />
);

export default function Reports({ pumps }) {
  const data = pumps
  
  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Latitude',
      selector: 'latitude',
      sortable: true,
      right: true,
    },
    {
      name: 'Longitude',
      selector: 'longitude',
      sortable: true,
      right: true,
    },
    {
      name: 'Village',
      selector: 'village.village',
      sortable: true,
      right: true,
    },
    {
      name: 'Commune',
      selector: 'village.commune',
      sortable: true,
      right: true,
    },
    {
      name: 'District',
      selector: 'village.district',
      sortable: true,
      right: true,
    },
    {
      name: 'Province',
      selector: 'village.province',
      sortable: true,
      right: true,
    },
  ];
  const BasicTable = () => {
    const [filterText, setFilterText] = React.useState('');
    const filteredItems = data.filter(item => item.id.includes(filterText));
    const subHeaderComponentMemo = React.useMemo(() => <Filter onFilter={value => setFilterText(value)} />, []);
  
    return (
      <div>
        <Seo title="Reports • Welldone Dashboard" />
        <DataTable
          columns={columns}
          data={filteredItems}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
        />
      </div>
    );
  };
  return (
    <div>
      <DashHeader title="Reports" />
      {BasicTable()}
    </div>
  )
}

Reports.getInitialProps = async () => {
  const { pumps } = require("../assets/cache/pumps.json")
  return { pumps }
}
