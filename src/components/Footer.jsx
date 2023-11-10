import React from 'react';
import styled from '@emotion/styled';
import { BsGithub, BsMedium, BsLinkedin } from 'react-icons/bs';
import { RiTwitterXLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const links = [
  {
    label: 'Github',
    icon: <BsGithub className="icon" />,
    ref: 'https://github.com/Ekep-Obasi',
  },
  {
    label: 'Medium',
    icon: <BsMedium className="icon" />,
    ref: 'https://medium.com/@arreyettaekep/',
  },
  {
    label: 'Linked In',
    icon: <BsLinkedin className="icon" />,
    ref: 'https://www.linkedin.com/in/arrey-etta/',
  },
  {
    label: 'Twitter',
    icon: <RiTwitterXLine className="icon" />,
    ref: 'https://twitter.com/ArreyEkep',
  },
];

const Footer = () => {
  return (
    <StyledFooter>
      <span>Built with ❤️ by Ekep Obasi</span>
      <div className="links">
        {links.map(({ icon, label, ref }) => (
          <Link to={ref} key={ref} className="social__link">
            {icon}
            <span key={ref}>{label}</span>
          </Link>
        ))}
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 250px;
  background-color: ${(props) => props.theme.colors.dark};
  padding: 2rem;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 25px;

  .links {
    display: flex;
    justify-content: space-between;
    width: 33.3%;
    min-width: 320px;
    gap: 15px;

    .icon {
      font-size: 1.75rem;
    }

    .social__link {
      display: flex;
      flex-direction: column;
      gap: 15px;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export default Footer;
