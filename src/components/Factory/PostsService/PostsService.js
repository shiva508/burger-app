import AxiosFactory from '../AxiosFactory';

class PostsService{
    getAllPosts() {
    return AxiosFactory.get("posts")
    }
    getPostByPostId(id) {
        return AxiosFactory.get("posts/" + id);
    }
    savePost(data) {
        return AxiosFactory.post("posts", data);
    }
    deletePost(id) {
        return AxiosFactory.delete("posts/" + id);
    }
}
export default new PostsService();