import React, { Component } from 'react';
<<<<<<< HEAD
import Button from '@material-ui/core/Button';
import './index.css';
import Styled from 'styled-components';

const HomeCTA = Styled.div`
    background: url('./img/HomePage_CTA_04.svg') no-repeat center center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 880px;
    &:hover {
        cursor: pointer;
    }
    @media(max-width: 800px) {
        width: 100vw;
        min-height: 100vh;
    }
`;

const HomeContainer = Styled.div`
    font-family: 'Roboto', sans-serif;
`;

const HomeCtaHeaderLeft = Styled.h1`
    font-size: 4rem;
    font-weight: 900;
    color: #005B97;
    min-width: 300px;
    width: 35vw;
    text-align: center;
    padding-top: 60vh;
    @media(max-width: 1400px){
        font-size: 2.8rem;
    }
    @media(max-width: 1200px){
        font-size: 2.3rem;
    }
`;
const HomeCtaHeaderRight = Styled.h1`
    font-size: 4rem;
    font-weight: 900;
    color: #005B97;
    min-width: 300px;
    width: 35vw;
    text-align: center;
    padding-top: 60vh;
    @media(max-width: 1400px){
        font-size: 2.8rem;
    }
    @media(max-width: 1200px){
        font-size: 2.3rem;
    }
`;

const HomeCtaHeaderRight2 = Styled(HomeCtaHeaderRight)`
    padding-top: 0;
`;

const MidContainer = Styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HomeCtaHeaderWrapper = Styled.div`
    width: 100%;
    display:none;
    @media(min-width: 700px) {
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
        max-width: 1920px;
    }
`;

const HomeHeader = Styled.h2`
    font-size: 4rem;
    font-weight: 900;
    color: #005B97;
    min-width: 300px;
    max-width: 800px;
    text-align: center;
    margin: 3rem 0;
`;

const MidSectionWrapper = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
`;

const MidSection = Styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    max-width: 30%;
    background-color: #DFDFDF;
    border-radius: .5rem;
    border: 1px solid #005B97;
    margin: 1rem;
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.5)
`;

const MidImg = Styled.img`
    margin: 1rem;
    height: 200px;
    background-color: #FEFEFE;
    border-radius: .3rem;
`;

const MidSectionText = Styled.p`
    margin: 1rem;
    font-size: 1.5rem;
    text-align: justify;
`;
=======
import Logo from '../../assets/Logo_BW_SML.svg';
import {
    HomeContainer,
    HomeCTA,
    HomeNav,
    NavLogo,
    NavButton,
    HomeHeader,
    MidSection,
    MidSectionWrapper,
    MidColumn,
    MidContainer,
    MidHeader,
    MidImg,
    MidSectionText,
    FooterSection,
} from './HomeStyled';
>>>>>>> master

export default class Home extends Component {
    handleAuthRedirect = e => {
        this.props.history.push('/rocket/auth');
    };

    handleHome = e => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    handleContact = e => {
        window.location.href = 'mailto:lambdaknowledgerocket@gmail.com';
    };

    render() {
        return (
            <HomeContainer>
<<<<<<< HEAD
                <HomeCTA onClick={this.handleAuthRedirect}>
                    <div className="Home_ButtonDiv">
                        <Button
                            className="Home_Button"
                            color="primary"
                            onClick={this.handleAuthRedirect}
                        >
                            Sign Up
                        </Button>
                        <Button
                            className="Home_Button"
                            color="primary"
                            onClick={this.handleAuthRedirect}
                        >
                            Sign In
                        </Button>
                    </div>
                    <HomeCtaHeaderWrapper>
                        <div>
                            <HomeCtaHeaderLeft>KNOWLEDGE</HomeCtaHeaderLeft>
                            <HomeCtaHeaderRight2>ROCKET</HomeCtaHeaderRight2>
                        </div>
                        <div>
                            <HomeCtaHeaderRight>LAUNCH YOUR</HomeCtaHeaderRight>
                            <HomeCtaHeaderRight2>LEARNING</HomeCtaHeaderRight2>
                        </div>
                    </HomeCtaHeaderWrapper>
                </HomeCTA>
                <MidContainer>
                    <HomeHeader>What is a Knowledge Rocket?</HomeHeader>
                    <MidSectionWrapper>
                        <MidSection>
                            <MidImg />
                            <MidSectionText>
                                Text for mid section here should not be very length but should
                                contain enough information about this section.Text for mid section
                                here should not be very length but should contain enough information
                                about this section.
                            </MidSectionText>
                        </MidSection>
                        <MidSection>
                            <MidImg />
                            <MidSectionText>
                                Text for mid section here should not be very length but should
                                contain enough information about this section.Text for mid section
                                here should not be very length but should contain enough information
                                about this section.Text for mid section here should not be very
                                length but should contain enough information about this section.
                            </MidSectionText>
                        </MidSection>
                        <MidSection>
                            <MidImg />
                            <MidSectionText>
                                Text for mid section here should not be very length but should
                                contain enough information about this section.Text for mid section
                                here should not be very length but should contain enough information
                                about this section.
                            </MidSectionText>
                        </MidSection>
                    </MidSectionWrapper>
                </MidContainer>
                <BottomContainer>
                    <BottomSectionWrapper>
                        <BottomSectionLeft>
                            <link>
                                <a href={'aboutusURL()'}>About Us</a>
                            </link>
                            <link>
                                <a href={pricingURL()}>Pricing</a>
                            </link>
                            <link>
                                <a href={privacyURL()}>Privacy</a>
                            </link>
                            <link>
                                <a href={accessabilityURL()}>Accessability</a>
                            </link>
                        </BottomSectionLeft>
                        <BottomSectionRight>
                        <link>
                            <a href={githubUrl()}>GitHub</a>
                        </link>
                        <link>
                            <a href={twitterUrl()}>Twitter</a>
                        </link>
                        </BottomSectionRight>
                    </BottomSectionWrapper>
                </BottomContainer>
=======
                <HomeCTA>
                    <HomeNav>
                        <div>
                            <NavLogo src={Logo} onClick={this.handleHome} />
                        </div>
                        <div>
                            <NavButton onClick={this.handleAuthRedirect}>Sign Up</NavButton>
                            <NavButton onClick={this.handleAuthRedirect}>Sign In</NavButton>
                        </div>
                    </HomeNav>
                </HomeCTA>
                <MidContainer>
                    <HomeHeader>What is a Knowledge Rocket?</HomeHeader>

                    <MidSectionWrapper>
                        <MidColumn>
                            <MidHeader>Implementation</MidHeader>
                            <MidSection>
                                <MidImg src="/img/amanda-sandlin-10508-unsplash.jpg" />
                                <MidSectionText>
                                    Text for mid section here should not be very length but should
                                    contain enough information about this section.Text for mid
                                    section here should not be very length but should contain enough
                                    information about this section.
                                </MidSectionText>
                            </MidSection>
                        </MidColumn>
                        <MidColumn>
                            <MidHeader>Practice</MidHeader>
                            <MidSection>
                                <MidImg src="/img/erik-nielsen-783260-unsplash.jpg" />
                                <MidSectionText>
                                    Text for mid section here should not be very length but should
                                    contain enough information about this section.Text for mid
                                    section here should not be very length but should contain enough
                                    information about this section.Text for mid section here should
                                    not be very length but should contain enough information about
                                    this section.
                                </MidSectionText>
                            </MidSection>
                        </MidColumn>
                        <MidColumn>
                            <MidHeader>Results</MidHeader>
                            <MidSection>
                                <MidImg src="/img/nasa-63029-unsplash.jpg" />
                                <MidSectionText>
                                    Text for mid section here should not be very length but should
                                    contain enough information about this section.Text for mid
                                    section here should not be very length but should contain enough
                                    information about this section.
                                </MidSectionText>
                            </MidSection>
                        </MidColumn>
                    </MidSectionWrapper>
                </MidContainer>
                <FooterSection>
                    <NavButton onClick={this.handleContact}>CONTACT US</NavButton>
                    <NavButton onClick={this.handleAuthRedirect}>SIGN UP</NavButton>
                    <NavButton onClick={this.handleAuthRedirect}>SIGN IN</NavButton>
                </FooterSection>
>>>>>>> master
            </HomeContainer>
        );
    }
}