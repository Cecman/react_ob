import styled from 'styled-components';

const menuListWrap = styled.ul`
  list-style: none;
  padding: 0.5rem, 0;
  border-color: rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  color: #212529;
  background-color: #fff;
`;

const menuListItem = styled.li`
  display: flex;
  line-height: 1.5;
  &:hover {
    color: #16181b;
    background-color: #f8f9fa;
    cursor: pointer;
  }
`;

export const MenuList = menuListWrap;
export const MenuListItem = menuListItem;
