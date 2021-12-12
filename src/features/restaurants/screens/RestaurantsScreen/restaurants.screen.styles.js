import styled from 'styled-components/native';

export const AppWrapper = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
`;
export const SearchBarWrapper = styled.View`
   flex: 1;
   width: 100%;
   justify-content: center;
   padding-left: ${({ theme }) => theme.sizes[1]};
   padding-right: ${({ theme }) => theme.sizes[1]};
   min-height: 48px;
`;
export const ListView = styled.View`
   flex: 15;
   width: 100%;
   padding-left: ${({ theme }) => theme.sizes[1]};
   padding-right: ${({ theme }) => theme.sizes[1]};
`;
export const LoadingIndicatorWrapper = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
`;
