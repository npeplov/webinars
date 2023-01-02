import { IPost } from "../store/models/IPost";

interface PostIemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

export const PostIem: React.FC<PostIemProps> = ({ post, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || "";
    update({ ...post, title });
  };
  return (
    <div className="post" onClick={handleUpdate}>
      {post.id}. {post.title}
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};
