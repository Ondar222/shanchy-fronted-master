import React from "react";

const PostCard = (params) => {
  if (!params) {
    return <h3>Empty post</h3>;
  } else {
    return (
      <div
        className="post_class"
        key={params.id}
      >
        <div className="">
          <img
            alt="some"
            src={params.preview_image}
            width="300px"
            height="250px"
            className="dark:grayscale"
          />
        </div>

        <div className="params_title">
          <div className="">
            <h1 className="params_heading">{params.title}</h1>
          </div>
          <div>
            <p className="text-md">{params.news_preview}</p>
          </div>
          <div className="post_center">         
              <p className="post_paragraph">Дата публикации:</p>
              {/* {unixTimeConverter(params.createdAt)} */}
             <div className="btn_read">
            <a href={`/news/post-${params.id}`} className="button dark:bg-gray-500">
              Читать
            </a>
             </div>
            </div>
          </div>
        </div>
     
    );
  }
};

export default PostCard;
