"use strict";

const Post = use("App/Models/Post");
class PostController {
  async index() {
    const posts = await Post.all();
    return { status: 200, data: posts };
  }
  async show({ request }) {
    const { id } = requestparams;
    const post = await Post.find(id);
    return { status: 200, data: post };
  }
  async store({ request }) {
    const { title, name, cover_image_url, author } = request.body;
    const post = await Post.create({
      title,
      name,
      conver_image_url,
      author_id: author,
    });
    return {status:200,data:post}
  }
}

module.exports = PostController;
