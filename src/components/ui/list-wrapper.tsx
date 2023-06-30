import styled from 'styled-components';

interface ListWrapperProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: block;
`

// [TODO] change component name
const ListWrapper:React.FC<ListWrapperProps> = ({children}: ListWrapperProps) => {

  return (
    <Wrapper>
      <h1>Wrapper</h1>
      {children}
    </Wrapper>
  )
}

export default ListWrapper
