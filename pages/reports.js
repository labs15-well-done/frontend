import React from "react"
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

const data = [{ id: 1, pump: '123', status: 'Functional' }, { id: 2, pump: "456", status: 'Unknown'}, { id: 3, pump: "789", status: 'Broken' }];
const columns = [
  {
    name: 'Pump',
    selector: 'pump',
    sortable: true,
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    right: true,
  },
];

const BasicTable = () => {
  const [filterText, setFilterText] = React.useState('');
  const filteredItems = data.filter(item => item.pump.includes(filterText));
  const subHeaderComponentMemo = React.useMemo(() => <Filter onFilter={value => setFilterText(value)} />, []);

  return (
    <div>
      <DataTable
        columns={columns}
        data={filteredItems}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
      />
    </div>
  );
};

export default function Reports({ pumps }) {
  return (
    <div>
      <DashHeader title="Reports" />
      {BasicTable()}
    </div>
  )
}

Reports.getInitialProps = async () => {
  const { pumps } = require("../assets/cache/pumps.json")
  // const newPumps = []
  // pumps.forEach(async pump => {
  //   const village = await getVillage(pump.village.id)
  //   console.log(village)
  //   newPumps.push({ ...pump, village })
  // })
  return { pumps }
}
