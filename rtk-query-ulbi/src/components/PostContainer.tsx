import { IPost } from "../store/models/IPost";
import { postAPI } from "../store/services/PostService";
import { PostIem } from "./PostItem";

export const PostContainer = () => {
  const limit = 100;
  const { data: posts } = postAPI.useFetchAllPostsQuery(limit);
  const [createPost] = postAPI.useCreatePostMutation();
  const [updatePost] = postAPI.useUpdatePostMutation();
  const [removePost] = postAPI.useDeletePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    // Чтобы тайпскрипт не ругался на ID сгенеренный сервером: as IPost
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    removePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add new post</button>
        {posts &&
          posts.map((post) => (
            <PostIem
              remove={handleRemove}
              update={handleUpdate}
              post={post}
              key={post.id}
            />
          ))}
      </div>
    </div>
  );
};
