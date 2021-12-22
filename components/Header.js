import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Header() {
  const { user } = useMoralis();
  return (
    <div>
      <div className="">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            className="rounded-full"
            src="https://www.teknogundemi.com/wp-content/uploads/2021/10/metaverse-nasil-kullanilir.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div>
          <div>{/* Avatar */}</div>
          {/* welcome message */}
          {/* username */}
          {/* Change username component */}
        </div>
      </div>
    </div>
  );
}

export default Header;
