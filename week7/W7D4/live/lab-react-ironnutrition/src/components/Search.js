import { Divider, Input } from 'antd';

export function Search({ filterState, setFilterState }) {
  const handleFilterInput = (event) => {
    setFilterState(event.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={filterState} type="text" onChange={handleFilterInput} />
    </>
  );
}
