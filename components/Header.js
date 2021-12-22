import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

function Header() {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500">
      <div className="">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            className="rounded-full"
            src="https://www.teknogundemi.com/wp-content/uploads/2021/10/metaverse-nasil-kullanilir.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className="text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl"> Welcome to Metaverse</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
