module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'efdaf9cdb597a1aabe6f8778497c5669'),
  },
});
