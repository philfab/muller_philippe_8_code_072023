import styled from "styled-components";

const ImageContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 20px;
  object-fit: cover;
  filter: brightness(${(props) => props.brightness}%);
`;

const ImageText = styled.p`
  position: absolute;
  color: white;
  font-size: 1.1rem;
  text-align: center;

  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }
`;

function ImageWithText({ imageSrc, text, brightness = 100 }) {
  return (
    <ImageContainer>
      <Image src={imageSrc} alt="Paysage" brightness={brightness} />
      <ImageText>{text}</ImageText>
    </ImageContainer>
  );
}

export default ImageWithText;
