import styled from 'styled-components';

const Flexbox = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: ${(props) => props.textAlign};
  cursor: ${(props) => props.cursor};
  flex-wrap: ${(props) => props.flexWrap};
  z-index: ${(props) => props.zIndex};
  position: ${(props) => props.position || 'unset'};
  padding: ${(props) => props.padding};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
`;

export default Flexbox;
