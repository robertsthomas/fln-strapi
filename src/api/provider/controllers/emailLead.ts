/**
 * A set of functions called "actions" for `emailLead`
 */

export default {
  sendEmail: async (ctx, next) => {
    try {
      await strapi.plugins['email'].services.email.send({
        to: 'robertsthomasd@gmail.com',
        from: 'robertsthomasd@gmail.com',
        subject: 'Test Email',
        text: 'This is a test email',
      });
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
