import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";

const NotesPage = ({ data }) => {
  console.log(data);
  const seo = { title: "Notes" };

  return (
    <Layout>
      <SEO seo={seo} />
      <h2>Notes</h2>
      {data.allStrapiNote.edges.map((item, index) => {
        return <div key={index} >{item.node.id}</div>;
      })}
    </Layout>
  );
};

export const notePageQuery = graphql`
  query NotesQuery {
    allStrapiNote {
      edges {
        node {
          id
          title
          ropes_course_activities {
            id
          }
          content
          category
        }
      }
    }
  }
`;

export default NotesPage;
