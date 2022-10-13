import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-2"
              width="2rem"
              height="2rem"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 493.101 493.101"
              fill="#0891b2"
            >
              <path
                d="M20.9,153.7c11.5,0,20.9-9.4,20.9-20.9V42.2h407.6v90.7c0,11.5,9.4,20.9,20.9,20.9s20.9-9.4,20.9-20.9V22.4
                    c0-11.5-9.4-20.9-20.9-20.9H20.9C9.4,1.5,0,10.9,0,22.4v110.5C0,144.3,9.4,153.7,20.9,153.7z"
              />
              <path
                d="M472.3,339.3c-11.5,0-20.9,9.4-20.9,20.9v90.7H42.8v-90.7c0-11.5-9.4-20.9-20.9-20.9S1,348.7,1,360.2v110.5
			              c0,11.5,9.4,20.9,20.9,20.9h448.3c11.5,0,20.9-9.4,22.9-20.9V360.1C493.2,348.7,483.8,339.3,472.3,339.3z"
              />
              <path
                d="M326.4,343.5c13.5,11.9,25,4.2,29.2,0l83.4-83.4c8.3-8.3,8.3-20.9,0-29.2l-83.5-83.4c-8.3-8.3-20.9-8.3-29.2,0
			              s-8.3,20.9,0,29.2l68.8,68.8l-68.8,68.8C318,322.6,317.5,335.6,326.4,343.5z"
              />
              <path
                d="M165.8,147.5c-8.3-8.3-20.9-8.3-29.2,0l-83.4,83.4c-8.3,8.3-8.3,20.9,0,29.2l83.4,83.4c4.2,4.2,16,11.6,29.2,1
			              c8.3-8.3,8.3-20.9,0-29.2L97,246.5l68.8-69.9C174.1,168.3,174.1,155.8,165.8,147.5z"
              />
            </svg>
          }
          name="Andy Stevens"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="https://github.com/AndyStevens98">
          GitHub
        </NavMenuItem>
        <NavMenuItem href="https://www.linkedin.com/in/astevens37">
          LinkedIn
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
