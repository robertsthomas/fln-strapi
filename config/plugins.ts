module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'strapi-provider-email-resend',
        providerOptions: {
          apiKey: env(process.env.RESEND_API_KEY),
        },
        settings: {
          defaultFrom: 'robertsthomasd@gmail.com',
          defaultReplyTo: 'robertsthomasd@gmail.com',
        },
      }
    },    
  });