import Image from 'next/image';
import { useMoralis } from 'react-moralis';
function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <h1>Login Screen</h1>

      <div
        className="flex flex-col absolute z-50 h-4/6 w-full 
      items-center justify-center space-y-4"
      >
        <Image
          className="object-cover rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
          height={200}
          width={200}
        />

        <button
          onClick={authenticate}
          className="bg-primary-orange rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://coin-turk.com/wp-content/uploads/2021/10/sanal-degil-gercek-degil-her-seyin-ve-evrenin-otesi-nedir-bu-metaverse-coin-turk-com.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
