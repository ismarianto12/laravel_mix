import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/inertia-react'
import createServer from '@inertiajs/server'
import route from "ziggy-js";
import { Ziggy } from '@/ziggy'


createServer((page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: name => require(`./Pages/${name}`),
    setup: ({ App, props }) => {

        // Set global function route
        global.route = (name, params, absolute, config = Ziggy) => route(name, params, absolute, config);

        return <App {...props} />
    },
}))