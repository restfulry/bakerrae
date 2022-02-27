const dev = process.env.NODE_ENV !== "production";

const domain = dev ? "localhost" : "api.bakerrae.com";

module.exports = {
  images: {
    domains: [domain],
  },
};
