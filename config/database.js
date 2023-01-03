module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cem9fken6mpkfa6j8lfg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_mh5h'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'iHr41kHFM1QMgfnpY57Uv2fhp8vgTTvI'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
