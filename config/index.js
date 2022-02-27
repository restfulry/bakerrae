const dev = process.env.NODE_ENV !== "production";

console.log('SERVER', process.env.NEXT_PUBLIC_API);

export const server = dev ? "http://localhost:1337" : process.env.NEXT_PUBLIC_API;