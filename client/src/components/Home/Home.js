import React, { Component } from 'react';
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
                            <MidSection>
                            <MidHeader>Road To Success</MidHeader>
                                <MidImg src="/img/amanda-sandlin-10508-unsplash.jpg" />
                                <MidSectionText>
                                    Knowledge Rockets are customizable quizzes that you create and are sent to your students on scheduled intervals of 2 days, 2 weeks and 2 months after the initial lecture.  Rocket templates are provided for ease of use.
                                </MidSectionText>
                            </MidSection>
                        </MidColumn>
                        <MidColumn>
                            
                            <MidSection>
                            <MidHeader>Practice</MidHeader>
                                <MidImg src="/img/erik-nielsen-783260-unsplash.jpg" />
                                <MidSectionText>
                                Lectures can be sometimes difficult for students to follow. Knowledge Rockets reinforce lecture information and helps students retain it.  Watch students' testing grades improve after using Knowledge Rocket!  
                                </MidSectionText>
                            </MidSection>
                        </MidColumn>
                        <MidColumn>
                            
                            <MidSection>
                            <MidHeader>Results</MidHeader>
                                <MidImg src="/img/nasa-63029-unsplash.jpg" />
                                <MidSectionText>
                                    Studies show that familiararity of class lecture retention works with reinforcement.  Knowledge Rocket, with its ease of use, simplifies the instuctor's life while improving the student's future.                     
                                </MidSectionText>
                            </MidSection>
                        </MidColumn>
                    </MidSectionWrapper>
                </MidContainer>
                <FooterSection>
                    <NavButton onClick={this.handleContact}>CONTACT US</NavButton>
                    <NavButton onClick={this.handleAuthRedirect}>SIGN UP</NavButton>
                    <NavButton onClick={this.handleAuthRedirect}>SIGN IN</NavButton>
                    <p>Follow us on  
                        <a href="https://twitter.com/KnowledegeR" 
                        title="Knowledge Rocket on Twitter"> TWITTER</a> and 
                        <a href="https://www.facebook.com/Knowledge-Rocket-464965013986045"
                            title="Knowledge Rocket on Facebook"> FACEBOOK</a>
                    </p>
                </FooterSection>
            </HomeContainer>
        );
    }
}