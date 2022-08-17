import React from 'react';
import { InertiaLink, Link } from '@inertiajs/inertia-react';
import { Helmet } from 'react-helmet';

const Barang = () => {
    return (
        <div>
            <Helmet>
                <title>Halaman barang</title>
            </Helmet>
            Halaman Barang
            <Link href='/home'>Home</Link>
        </div>
    );
};

export default Barang;
