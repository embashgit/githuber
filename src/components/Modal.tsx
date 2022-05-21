import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IModal } from '../interfaces/components.interfaces';
import Button from './Button';
import { SkeletonCard } from './SkeletonCard';

const Modal: React.FC<IModal> = ({
  repositoryName, isOpen, onClose,
  repositoryFullName, collaborators, loadingCollaborators
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 overflow-auto min-w-content" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-fit  max-h-[40vh]  transform overflow-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h2"
                    className="text-2xl capitalize font-medium leading-6 text-gray-900"
                  >
                    {repositoryName} <small>({repositoryFullName})</small>
                    <h1 className='mt-9'>List of Contributors</h1>
                    {/* <hr className='my-3' /> */}
                  </Dialog.Title>
                  <div className='mt-2 overflow-auto' />
                  {loadingCollaborators &&  <SkeletonCard />}
                  {!loadingCollaborators && collaborators.map((collaborator) => (
                    <div key={collaborator.login} className="py-2 flex flex-row border-y border-gray-100 shadow rounded hover:bg-gray-300 my-3 p-2">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={collaborator.avatar_url}
                        alt={collaborator.login}
                      /> <p className="font-bold self-center ml-2">{collaborator.login}</p>
                    </div>
                  ))}

                  <div className="mt-4">
                    <Button
                      className="inline-flex shadow justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      handleClick={onClose}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
)
};

export default Modal;