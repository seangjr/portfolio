/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["admin.seangjr.me", "p01--dashboard--zy6nmxk9w9dx.code.run"],
    },
};

module.exports = nextConfig;
