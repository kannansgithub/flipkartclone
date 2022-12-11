import Image from 'next/image';
import Link from 'next/link';
import LoginButton from './LoginButton/LoginButton';
import classes from './Navbar.module.css';
import NavLink from './NavLink/NavLink';
import SearchInput from './SearchInput/SearchInput';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={classes.navbarMain}>
      <div className={classes.navbarContainer}>
        <div className="flex flex-col">
          <Image
            src="/img/logo.png"
            alt="Flipkart logo"
            height={30}
            width={100}
          />

          <Link href="/plus" className="hover:underline">
            <div className="flex flex-row gap-1">
              <div className="text-gray-200 italic">Explore</div>
              <div className="font-bold text-plus">Plus</div>
              <Image
                src="/img/star.png"
                alt="Plus"
                height={5}
                width={15}
                className="mb-1"
              />
            </div>
          </Link>
        </div>
        <SearchInput />
        <LoginButton />
        <NavLink href="/" text="Become a Seller"></NavLink>
        <NavLink href="/" text="More" sufixIcon="/img/down-arrow.png"></NavLink>
        <NavLink href="/" text="Cart" prefixIconUrl="/img/cart.svg"></NavLink>
      </div>
    </div>
  );
};

export default Navbar;
