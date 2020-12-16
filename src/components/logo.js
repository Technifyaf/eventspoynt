/** @jsx jsx */
import { jsx ,Image} from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';

import logo from 'assets/images/logo.png';
import logoWhite from 'assets/images/logo-white.png';

export default function Logo({ isWhite, ...props }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={isWhite ? logoWhite : logo} width="150"  alt="startup landing logo" />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
