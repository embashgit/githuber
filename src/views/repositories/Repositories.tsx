import React, { useState } from 'react';
import { RefreshIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';
import { IfilterList } from '../../interfaces/components.interfaces';
import Table from '../../components/Table';
import { fetchRepositories } from '../../redux/actions/helper';

const Repositories = () => {
  const filterList: IfilterList[] = [
    { label: 'name', value: 'name' },
    { label: 'alpha', value: 'alphacode' },
  ];
  const dispatch = useDispatch();
  const [,setSelected] = useState<string>('');
  const [value, setValue] = useState<string>('');

  const handleSearch = () => {
    const encodedStr = encodeURIComponent(value);
    dispatch(fetchRepositories(encodedStr));
  };

  const handleClear = () => {
    setValue('');
    setSelected('');
  };

  return (
    <div className="text-center flex w-full justify-center flex-col mt-9 flex-wrap">
      <h2 className='lg:text-7xl mb-12 text-2xl'>List of Repositories</h2>
      <hr className='divider mx-auto w-1/2 my-9' />
      <div className=" mx-auto overflow-auto text-center place-item-center content-center justify-center align-center w-2/3 shadow p-5 rounded-lg bg-white">
        <div className="flex items-center justify-items-start mt-4">
          <SearchInput handleSearch={handleSearch} value={value} setValue={setValue} />
          <Button className="ml-3" handleClick={handleClear}>
            <RefreshIcon className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Repositories;
