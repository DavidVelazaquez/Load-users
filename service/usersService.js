const MongoLib = require("../lib/mongo");

class UsersService {
  constructor() {
    this.collection = "users-info";
    this.mongo = new MongoLib();
  }

  async getUsers({ tags }) {
    const query = tags && { tags: { $in: tags } };

    const users = await this.mongo.getAll(this.collection, query);
    return users || [];
  }

  async createUser({ user }) {
    const createdUser = await this.mongo.create(this.collection, user);
    return createdUser;
  }
}

module.exports = UsersService;
