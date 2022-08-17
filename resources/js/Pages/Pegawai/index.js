import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Pagination from '../../Shared/Pagination'
import SearchFilter from '../../Shared/Search'
const Pegawai = () => {
    const { pegawai } = usePage().props;
    const links = pegawai.links;
    const data = pegawai.data;
    const total = pegawai.total;


    return (

        <>
            <div className='h-full bg-gray-200 w-full px-4 py-8 overflow-hidden overflow-y-auto md:p-12'>
                <div className='overflow-x-auto bg-white rounded shadow'>
                    <h1 className="mb-8 text-3xl font-bold">Contacts</h1>
                    <div className="flex items-center justify-between mb-6">
                        <SearchFilter />
                        <InertiaLink
                            className="btn-indigo focus:outline-none"
                            href={'pegawai_create'}
                        >
                            <span>Create</span>
                            <span className="hidden md:inline"> Contact</span>
                        </InertiaLink>
                    </div>
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">Name</th>
                                <th className="px-6 pt-5 pb-4">Email</th>
                                <th className="px-6 pt-5 pb-4" colSpan="2">
                                    Role
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.map(({ nama, nip, no_hp }) => {
                                return (
                                    <tr>
                                        <td className='hover:bg-gray-100 focus-within:bg-gray-100'>{nama}</td>
                                        <td className='hover:bg-gray-100 focus-within:bg-gray-100'>{nip}</td>
                                        <td className='hover:bg-gray-100 focus-within:bg-gray-100'>{no_hp}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <Pagination links={links} />
                    Total Data {total}
                </div>
            </div>


        </>
    )
}

export default Pegawai