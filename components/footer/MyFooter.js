import {
  Box,
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { texts } from '../../texts/texts';

const Copyright = ({ languaje }) => {
  return (
    <Text color='white' fontSize='sm'>
      &copy; {new Date().getFullYear()} {texts.name}.{' '}
      {texts.copyright[languaje]}.
    </Text>
  );
};

const SocialButtons = (props) => {
  return (
    <ButtonGroup color='gray.600' {...props}>
      <Link href={texts.links.linkedin}>
        <IconButton
          size='xs'
          aria-label='LinkedIn'
          icon={<FaLinkedin fontSize='20px' />}
        />
      </Link>
      <Link href={texts.links.github}>
        <IconButton
          size='xs'
          aria-label='Github'
          icon={<FaGithub fontSize='20px' />}
        />
      </Link>
    </ButtonGroup>
  );
};

const MailTo = () => {
  return (
    <Text color='white' fontSize='sm'>
      <Link href={`mailto:${texts.email}`}>{texts.email}</Link>
    </Text>
  );
};

function MyFooter({ languaje }) {
  return (
    <Box
      as='footer'
      backgroundColor='#262626'
      py='12'
      px={{
        base: '4',
        md: '8',
      }}
    >
      <Stack direction='row' spacing='4' align='center' justify='space-between'>
        <Copyright languaje={languaje} />
        <SocialButtons />
      </Stack>
      <Stack direction='row' spacing='4' align='center' justify='space-between'>
        <MailTo />
      </Stack>
    </Box>
  );
}

export default MyFooter;
