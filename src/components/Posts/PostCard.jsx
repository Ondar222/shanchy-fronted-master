import React from "react";

const PostCard = (params) => {
  if (!params) {
    return <h3>Empty post</h3>;
  } else {
    return (
      <div
        className="post__card"
        key={params.id}
      >
        <div className="image-container">
          <img
            alt="some"
            src={params.preview_image}
            width="300px"
            height="250px"
            className="post__card__img"
          />
        </div>


        <div className="content">

          <div className="header">

            <h1 className="heading">{params.title}</h1>
          </div>

          <div className="body">
            <p className="text-md">{params.news_preview}</p>
          </div>

          <div className="footer">         
              <p className="">Дата публикации:</p>
              {/* {unixTimeConverter(params.createdAt)} */}
             <div className="btn">
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
