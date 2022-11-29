import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={<>WEBSITE IS UNDER CONSTRUCTION</>}
      // title={
      //  <>
      //    Hi there, I'm{' '}
      // </>    <GradientText>Andy</GradientText> 👋
      //  </>
      // }
      description={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            malesuada
          </a>{' '}
          nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            consectetur
          </a>{' '}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/AndyStevens98">
            <HeroSocial
              src="/assets/images/github.png"
              alt="GitHub icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/astevens37">
            <HeroSocial
              src="/assets/images/linkedin.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
