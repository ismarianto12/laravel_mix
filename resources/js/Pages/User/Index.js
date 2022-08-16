import React from 'react';
import { InertiaLink, Link } from '@inertiajs/inertia-react';

const User = () => {
    return (
        <div>
            Hlaman user
            <Link href='/'>Back to home</Link>
        </div>
    );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
// Home.layout = page => <Layout title="Home" children={page} />;

export default User;
