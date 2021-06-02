const {
  sanitizeEntity
} = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {

    const {
      user
    } = ctx.state;

    console.log('User: ', user)

    let entity = await strapi.services.favouriterecipes.create({
      ...ctx.request.body,
      users_permissions_user: user.id
    });

    return sanitizeEntity(entity, {
      model: strapi.models.favouriterecipes
    });
  },
};
