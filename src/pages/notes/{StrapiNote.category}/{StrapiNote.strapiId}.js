import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";


const CustomNote = ({ data }) => {
  console.log(data);
  const seo = { title: "Store" };

  return (
    <Layout>
      <SEO seo={seo} />
      <div>CUSTOM</div>
    </Layout>
  );
};

// export const notePageQuery = graphql`
//   query CustomNoteQuery {
//     strapiCustomNote {
//       id
//       content
//       title
//     }
//   }
// `;

export default CustomNote;
