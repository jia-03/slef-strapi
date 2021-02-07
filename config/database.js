// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST','117.50.5.32'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'lagou'),
        username: env('DATABASE_USERNAME', 'jsq'),
        password: env('DATABASE_PASSWORD', 'jsq19941010'),
      },
      options: {},
    },
  },
});
