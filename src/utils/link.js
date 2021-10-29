import React from 'react';
import NextLink from 'next/link';

export default function Link({ children, href, ...other }) {
    // Передайте любую внутреннюю ссылку в Next.js Link, для всего остального используйте тег <a>
    const internal = /^\/(?!\/)/.test(href);
    if (internal) {
        return (
            <NextLink href={href}>
                <a {...other}>{children}</a>
            </NextLink>
        );
    }

    return (
        <a href={href} {...other}>
            {children}
        </a>
    );
}
