import i18nextConfig from './next-i18next.config.js';

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: i18nextConfig.i18n,  // Use the default import and access the i18n property
};

export default nextConfig;
