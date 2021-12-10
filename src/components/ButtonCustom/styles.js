import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: white;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  margin-top: ${({type, ...props}) => (type === 'right' ? 20 : 0)};
`;
