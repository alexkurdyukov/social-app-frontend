export const BASE_URL =
    process.env.NODE_ENV === 'production'
        ? 'productionUrl'
        : 'http://localhost:3000'
