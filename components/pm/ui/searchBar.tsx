import { Input } from 'antd';

const SearchBar = (): JSX.Element => {
  return (
    <div>
      <Input.Search placeholder="Search" className="w-full" />
    </div>
  );
};

export default SearchBar;
