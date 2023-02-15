import Media from "react-media";
import separator from "../functions/seperator";
import PostCard from "../Posts/PostCard";

const LastPosts = (params) => {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px) and (max-width: 1920px)",
          large: "(min-width: 768px)",
        }}
      >
        {(matсhes) => (
          <>
            {matсhes.small && (
              <div className="container__news__index">
                {params?.news?.map((item, index) => (
                  <PostCard
                    key={item.id}
                    id={item.id}
                    title={separator(item.title, 40)}
                    preview_image={
                      `${import.meta.env.PUBLIC_URL}` + item.preview_image.url
                    }
                    news_preview={separator(item.news_preview, 70)}
                    body={separator(item.body, 70)}
                    createdAt={item.createdAt}
                  />
                ))}
              </div>
            )}
            {matсhes.large && (
              <div class="index-news-block">
                <div class="top-block flex">
                  <div class="block-name">Новости</div>
                  <a href="news">Все новости</a>
                </div>
                <div class="flex">
                  {params?.news?.map((item, index) => {
                    if (index === 0) {
                      return (
                        <div
                          class="big-item"
                          style={{
                            backgroundImage: `url('${
                              import.meta.env.PUBLIC_URL
                            }${item.preview_image.url}')`,
                          }}
                        >
                          <div className="text">
                            <a href="#">
                              <div>{item.title}</div>
                            </a>
                            <div className="date">19 августа 2021, 7:06</div>
                          </div>
                        </div>
                      );
                    } else {
                      let string = item.title;
                      if (string.length > 60) {
                        string = string.substring(0, 60) + "...";
                      }

                      const date = new Date(item.publishedAt);
                      const timestamp = date.valueOf();
                      const formattedDate = new Intl.DateTimeFormat("ru-RU", {
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      }).format(timestamp);

                      return (
                        <div class="item other">
                          <img
                            src={`${import.meta.env.PUBLIC_URL}${
                              item.preview_image.url
                            }`}
                          />
                          <div>{string}</div>
                          <div className="date">{formattedDate}</div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default LastPosts;
