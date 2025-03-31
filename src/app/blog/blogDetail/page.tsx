import BlogDescription from "./partials/BlogDescription";
import BlogDetailHero from "./partials/BlogDetailHero";
import CommentForm from "./partials/CommentFrom";
import Stats from "./partials/Stats";

const BlogDetail = () => {
  return (
    <div>
      <BlogDetailHero />
      <div className="mx-auto container">
        <div className="flex gap-4 lg:gap-20 mx-8 lg:mx-0">
          <Stats />
          <BlogDescription />
        </div>
        <CommentForm />
      </div>
    </div>
  );
};

export default BlogDetail;
