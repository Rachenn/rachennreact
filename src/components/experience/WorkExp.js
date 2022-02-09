import React, { useEffect } from "react";
import { useParams } from "react-router";
import { formatDate } from "./Experience.js";
// read post data
const postsData = require("./_posts.json");

function WorkExp() {
  var { postSlug } = useParams(),
    post = findPostBySlug(postSlug);

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div class="WorkExp">
        <h1 className="title"> {post.title} </h1>
        <h3>
          {formatDate(post.dateStart)} - {formatDate(post.dateEnd)}
        </h3>
        <h4> {post.jobTitle} </h4><br/>
        <p>{post.content}</p><br/>
        <p>Tasks that I was responsible for include:</p>
        {/* Prints all tasks in a list */}
        {post.tasks.map((task) => (
          <li> {task} </li>
        ))}
    </div>
  );
}

function findPostBySlug(postSlug) {
  return postsData.find((o) => o.slug === postSlug);
}

export default WorkExp;
