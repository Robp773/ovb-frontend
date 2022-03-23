import { Typography } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Modal from '@mui/material/Modal';
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  textAlign: "center",
  maxHeight: "100vh",
  overflowY: "auto"
};

const GalleryPage = ({ data }) => {

  const seo = { title: "Gallery" };
  const [open, setOpen] = React.useState(false);
  const [modalImg, setModalImage] = React.useState(null)

  const handleOpen = (item) => {
    setModalImage(item)
    setOpen(true);
  }

  const handleClose = () => setOpen(false);

  return (
    <Layout>
      <SEO seo={seo} />
      <Box>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            {modalImg ?
              <Box sx={style}>
                <GatsbyImage
                  objectFit="contain"
                  image={modalImg.gallery_image.localFile.childImageSharp.gatsbyImageData}
                  alt={modalImg.gallery_image_title}
                />
                <Box style={{ marginTop: "10px", textAlign: "left" }}>
                  <Typography variant="h6" id="transition-modal-title">
                    {modalImg.gallery_image_title}
                  </Typography>
                  {/* <Typography variant="subtitle1" id="transition-modal-title">
                    {modalImg.gallery_image_date ? modalImg.gallery_image_date : null}
                  </Typography> */}
                  <Typography variant="subtitle1" id="transition-modal-description">
                    {modalImg.gallery_image.caption}
                  </Typography>
                </Box>
              </Box> : null}
          </Fade>
        </Modal>
        <ImageList variant="masonry" cols={4} gap={3}>
          {data.strapiGalleryPage.main_gallery.map((item) => (
            <ImageListItem key={item.gallery_image_title} style={{ cursor: "pointer" }}>
              <GatsbyImage
                onClick={() => { handleOpen(item) }}
                image={item.gallery_image.localFile.childImageSharp.gatsbyImageData}
                alt={item.gallery_image_title}
              />
              <ImageListItemBar
                title={item.gallery_image_title}
              />
            </ImageListItem>

          ))}
        </ImageList>
      </Box>
    </Layout >
  );
};

export const notePageQuery = graphql`
query {
strapiGalleryPage {    
  page_title
  main_gallery {
    gallery_image_date(formatString: "M/D/Y")
    gallery_image_title
    gallery_image {
      caption
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
}
`;

export default GalleryPage;
