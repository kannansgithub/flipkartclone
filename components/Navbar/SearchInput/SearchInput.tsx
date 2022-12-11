import Image from 'next/image';

type Props = {};

const SearchInput = (props: Props) => {
  return (
    <>
      <div className="bg-white flex px-2 rounded-sm">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          title="Search for products, brands and more"
          className="h-5 w-96 px-2 mt-4  focus:outline-none"
        />
        <Image
          src="/img/icon-search.svg"
          height={30}
          width={30}
          alt="search"
          className="mt-1"
        />
      </div>
    </>
  );
};

export default SearchInput;
