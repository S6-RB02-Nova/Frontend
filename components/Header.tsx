/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header className="flex justify-between p-5 mx-auto max-w-7xl ">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="object-contain w-40 cursor-pointer"
            src="https://i.ibb.co/Qf29XS6/4energylogotransparent.png"
            alt="4energy logo"
          />
        </Link>
        <div className="items-center hidden space-x-5 cursor-pointer md:inline-flex">
          <h3 onClick={() => router.push('/consumption')}>Consumption</h3>
          <h3 onClick={() => router.push('/production')}>Production</h3>
          <h3 onClick={() => router.push('/market')}>Market</h3>
        </div>
      </div>

      <div className="flex items-end space-x-5">
        {session ? (
          <div>
            <div className="items-center pr-5 space-x-5 md:inline-flex text-infiniot-green">
              <h3 className="cursor-pointer" onClick={() => signOut()}>
                Sign Out
              </h3>
            </div>

            <div className="items-center hidden space-x-5 md:inline-flex">
              <h3 className="cursor-pointer" onClick={() => router.push('/profile')}>
                {session.user?.name}
              </h3>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="items-center space-x-5 md:inline-flex text-infiniot-green">
            <h3>Sign In</h3>
            <h3>Register</h3>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
