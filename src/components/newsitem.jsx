import React from "react";
import default_img from "./news.jpg";

const NewsItem = (props) => {
  return (
    <>
      <div
        className="card bg-dark text-light  mb-3 my-3 mx-2 px-2 py-2 col-12 col-sm-4  col-lg-3"
        style={{ maxWidth: "345px", maxHeight: "500px" }}
      >
        <img
          src={props.src ? props.src : default_img}
          style={{ height: "200px", width: "100%" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title.slice(0, 50)}</h5>
          <p className="card-text">
            {props.descr ? props.descr.slice(0, 90) : "News"}
          </p>
          <a href={props.url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
