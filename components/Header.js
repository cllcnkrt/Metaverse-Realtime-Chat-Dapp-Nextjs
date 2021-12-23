import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 z-50 p-5 bg-black shadow-sm border-b-2 border-pink-700  text-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            className="rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-24 w-24 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-2xl"> Welcome to Metaverse</h1>
          <h2 className="text-4xl font-bold truncate">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            className="rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
