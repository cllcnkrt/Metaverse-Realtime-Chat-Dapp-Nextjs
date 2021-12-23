import { useMoralis } from 'react-moralis';

function ChangeUsername() {
  const { setUserData, isUserUptading, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new username (current: ${user.getUsername()})`
    );
    user.get('ethAddress');
    if (!username) {
      username = user.get('ethAddress');
    }

    setUserData({
      username,
    });
  };
  return (
    <div className="text-sm absolute top-5 right-10">
      <button
        disabled={isUserUptading}
        onClick={setUsername}
        className="hover:text-pink-700 font-bold"
      >
        Change Your Username
      </button>
    </div>
  );
}

export default ChangeUsername;
