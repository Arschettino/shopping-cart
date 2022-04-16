import React from 'react';
import styled from 'styled-components';
import hero from './images/About_Hero.png';
import img1 from './images/item1.png';
import img2 from './images/item2.png';
import img3 from './images/item3.png';

const HeroBanner = styled.div`
    width: 100%;
    box-sizing: border-box;
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeroHeader = styled.div`
    display: flex;
    font-size: 40px;
    font-weight: 600;
    font-family: Akshar;
    color: white;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px 0px;
    text-align: center;
    max-width: 600px;
    box-sizing: border-box;
`;

const InfoSection = styled.div`
    background-color: rgb(245,245,245);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const AlternateImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1440px;
    padding: 0px 80px;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
`;

const TextHalf = styled.div`
    display: flex;
    background-color: white;
    padding: 40px;
    flex: 1;
    aspect-ratio: 1 / 1;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
`;

const ImageHalf = styled.div`
    flex: 1;
    aspect-ratio: 1 / 1;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 40px;
`;

function About(props) {

    return (
        <>
            <HeroBanner>
                <HeroHeader>
                    About Us
                </HeroHeader>
            </HeroBanner>
            <InfoSection>
                <Title>
                    <h2>Cutting-edge weapons you can trust with your life</h2>
                </Title>
                <AlternateImageContainer>
                    <Row>
                        <TextHalf>
                            <div>
                                <h2>How It All Started</h2>
                                <p>
                                    It all started when Jeff was vaporized by a faulty coil in a defective launchpad. Funny how things can change in just an instant - you never really think about who QC's your battlegear until something goes wrong...
                                </p>
                            </div>
                        </TextHalf>
                        <ImageHalf image={img1} />
                    </Row>
                    <Row>
                        <ImageHalf image={img2} />
                        <TextHalf>
                            <div>
                                <h2>A Refined Approach</h2>
                                <p>
                                    We refactored the entire acquisition and quality control process to make sure Jeff's story is the last of his kind. Every piece of equipment is six sigma tested for ultimate reliability and maximum vaporization protection. 
                                </p>
                            </div>
                        </TextHalf>
                    </Row>
                    <Row>
                        <TextHalf>
                            <div>
                                <h2>The Digital Ammo Revolution</h2>
                                <p>
                                    We believe in gear you can trust, because knowing that your tactical equipment is sound should be the least of your worries on the battlefield. At Digital Ammo, we hold all equipment to the highest standards.
                                </p>
                            </div>
                        </TextHalf>
                        <ImageHalf image={img3}>
                        </ImageHalf>
                    </Row>
                </AlternateImageContainer>
                <Title>
                    <div>
                        <h2>Who we serve</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam blanditiis, omnis consequatur obcaecati optio deleniti asperiores eum magni quisquam itaque placeat sapiente assumenda nesciunt, magnam similique quasi repudiandae ab iusto?</p>
                    </div>
                </Title>
            </InfoSection>
        </>
    );
}

export default About;