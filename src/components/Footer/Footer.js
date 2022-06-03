import React from 'react'
import { ContentWrapper, FooterText, LeftCol, Logo, LogoText, RightCol, Wrapper } from './FooterElements'


const Footer = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <LeftCol>
                    <Logo />
                    <LogoText>CarRent</LogoText>
                </LeftCol>
                <RightCol>
                    <FooterText>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </FooterText>
                </RightCol>
            </ContentWrapper>
        </Wrapper>
    )
}

export default Footer