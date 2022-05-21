import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../interfaces/store.interfaces';
import { IRepositories } from '../interfaces/repositories.interfaces';
import { fetchCollaborators } from '../redux/actions/helper';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Pagination from './Pagination';
import Modal from './Modal';
import Gitlogo from '../../assets/vector-cats.png';
import { SkeletonCard } from './SkeletonCard';
const Table = () => {
  const {
    repositories,
    collaborators,
    loadingCollaborators,
    loadRequest
  } = useSelector((state: StoreState) => state.Repositories);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [repoName, setRepoName] = useState('');
  const [repoFullName, setRepoFullName] = useState('');
  const [listPerPage] = useState(10);
  const indexOfLastRepo = currentPage * listPerPage;
  const indexOfFirstRepo = indexOfLastRepo - listPerPage;
  const currentRepositories = repositories.slice(
    indexOfFirstRepo,
    indexOfLastRepo,
  );
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const closeModal = () => {
    setModalOpen(false);
    setRepoName('');
    setRepoFullName('');
  };

  const openModal = (repo: IRepositories) => {
    setRepoName(repo.name);
    setRepoFullName(repo.full_name);
    dispatch(fetchCollaborators(repo.contributors_url));
    setModalOpen(true);
  };
  const RenderRow = () => currentRepositories.map((repository: any, index: number) => (index % 2 ? (
        <TableRow key={index} repository={repository} className="bg-gray-100" openModal={() => openModal(repository)} />
  ) : (
        <TableRow key={index} repository={repository} className="bg-white" openModal={() => openModal(repository)} />
  )));
  const RenderEmptyRow = () =>(
    <div className='whitespace-nowrap px-auto mx-auto flex flex-col max-h-40 justify-center align-center content-center text-center bg-gray-100 h-40'>
      <img src={Gitlogo} className="h-9 text-center mx-auto" alt="git-cat" />
      <p className='text-lg text-gray-700'>No Repository found</p>
    </div>
  )
  return (
    <div className="w-full">
      <Modal
        loadingCollaborators={loadingCollaborators}
        repositoryName={repoName}
        isOpen={modalOpen}
        onClose={closeModal}
        repositoryFullName={repoFullName}
        collaborators={collaborators}
      />
      <div className='flex-wrap w-full'>
      <table className="w-full">
        <TableHeader />
        {!loadRequest && <tbody className='divide-y divide-gray-100'>
          <RenderRow />
        </tbody>}
      </table>
      {!loadRequest && currentRepositories.length === 0 && <RenderEmptyRow/>}  
      {loadRequest && <SkeletonCard/>}
      {} 
      </div>
      <Pagination
        listPerPage={listPerPage}
        paginateFront={paginateFront}
        currentPage={currentPage}
        paginateBack={paginateBack}
        totalCountries={repositories.length}
      />
    </div>
  );
};

export default Table;
