import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import moment from "moment";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const postsData = require("./_posts.json");

// This function will calculate the time between the start and end date.
function monthsBetween(startDate, endDate) {
  startDate = moment(startDate);
  endDate = moment(endDate);

  var years = endDate.diff(startDate, "year");
  startDate.add(years, "years");

  var months = endDate.diff(startDate, "months");
  startDate.add(months, "months");

  if (months != 0) months = months + " months";
  else months = "";

  if (years != 0) years = years + " years";
  else years = "";

  return years + " " + months;
}

// Formats the date across pages.
export function formatDate(date) {
  if (date == null) date = 'Current';
  else date = moment(date).format("MMMM YYYY");
  return date;
}

// Sorts experience so the more recent entry is first.
function custom_sort(a, b) {
  return moment(a.dateStart) - moment(b.dateStart);
}

function Experience() {
  // Sorts the work experience by date.
  postsData.sort(custom_sort).reverse();

  const post = postsData.map((post) => {
    return (
      <Link to={"/experience/" + post.slug} key={post.slug}>
        <p>
          {post.title} - {formatDate(post.dateStart)} -{" "}
          {formatDate(post.dateEnd)} (
          {monthsBetween(post.dateStart, post.dateEnd)}){" "}
        </p>
      </Link>
    );
  });

  return (
    <div class="container experience">
      <h1>My Experience</h1>
      <Container>
        <Row>
          <Col>
          <div class="ExpList">
            <div class="row align-items-center my-5 expList">
              <div className="blog">{post}</div>
              <div class="experienceDetails"></div>
            </div>
            </div>
          </Col>
          <Col>
            {/* Section for displaying details of experience. Refer to WorkExp.js */}
            <div class="row align-items-center my-5">
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Experience;
