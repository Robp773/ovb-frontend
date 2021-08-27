import { Container, styled } from '@material-ui/core';
import React from 'react'


const StyledPageContainer = styled(Container)({
    padding: "25px 0",
    minHeight: "50vh"
})
const PageWrapper = ({ children }) => {
    return <StyledPageContainer maxWidth="md">{children}</StyledPageContainer>
}

export default PageWrapper;