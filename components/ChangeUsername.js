import { useMoralis } from 'react-moralis';

function ChangeUsername() {
  const { setUserData, isUserUptading, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new username (current: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };
  return (
    <div className="text-sm absolute top-5 right-10">
      <button
        disabled={isUserUptading}
        onClick={setUsername}
        className="hover:text-pink-700"
      >
        Change your Username
      </button>
    </div>
  );
}

export default ChangeUsername;
