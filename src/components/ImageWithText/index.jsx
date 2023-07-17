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
  border-radius: 10px;
  object-fit: cover;
`;

const ImageText = styled.h1`
  position: absolute;
  color: white;
  font-size: 2rem;
  text-align: center;
`;

function ImageWithText({ imageSrc, text }) {
  return (
    <ImageContainer>
      <Image src={imageSrc} alt="Paysage" />
      <ImageText>{text}</ImageText>
    </ImageContainer>
  );
}

export default ImageWithText;
