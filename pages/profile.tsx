/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/react';
import Error from 'next/error';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import DeleteConfirmationModal from '../components/DeleteConfirmation';
import { useState } from 'react';

function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <Error statusCode={404} />;
  }

  return (
    <div>
      <Header />
      <div className="py-2 md:py-26">
        <div className="container px-6 m-auto text-gray-500 md:px-12 xl:px-0">
          <h3 className="my-16 text-4xl font-semibold text-infiniot-green">Profile page</h3>
          <div className="grid gap-6 mx-auto md:w-3/4 lg:w-full lg:grid-cols-2">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 lg:max-h-[32em]">
              <div className="space-y-4 ">
                <h3 className="text-2xl font-semibold text-infiniot-green">Your personal data</h3>
                <p>
                  Email: <strong>{session?.user?.email}</strong>
                </p>
                <p>
                  Name: <strong>{session?.user?.name}</strong>
                </p>
                <p
                  onClick={() => router.push('/')}
                  className="max-w-[8.75em] font-medium cursor-pointer text-infiniot-green"
                >
                  Edit personal data
                </p>
                <p
                  className="max-w-[8.75em] font-medium cursor-pointer text-red-600"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Delete account
                </p>
              </div>
              <img
                src="https://i.ibb.co/NYcx9bR/profile-user-svgrepo-com.png"
                className="w-2/5 ml-auto lg:mt-24"
                alt="illustration"
                loading="lazy"
                width="150"
                height="100"
              ></img>
            </div>
            {isOpen && <DeleteConfirmationModal isOpen={isOpen} setIsOpen={setIsOpen} id={session?.user?.id}/>}
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 lg:max-h-[32em]">
              <div className="space-y-4 ">
                <h3 className="text-2xl font-semibold text-infiniot-green">Notifications</h3>
                <div className="h-[12rem] p-3 overflow-y-scroll">
                  <div className="pl-2 mb-2 break-words border-2">
                    <p>Notification:</p>
                  </div>
                  <div className="pl-2 mb-2 break-words border-2">
                    <p>Notification:</p>
                  </div>
                  <div className="pl-2 mb-2 break-words border-2">
                    <p>Notification:</p>
                  </div>
                  <div className="pl-2 mb-2 break-words border-2">
                    <p>Notification:</p>
                  </div>
                  <div className="pl-2 mb-2 break-words border-2">
                    <p>Notification:</p>
                  </div>
                  <div className="pl-2 mb-2 break-words border-2">
                    <p>Notification:</p>
                  </div>
                </div>
              </div>
              <img
                src="https://i.ibb.co/Wv3P9Gn/notification-svgrepo-com.png"
                className="w-2/5 ml-auto"
                alt="illustration"
                loading="lazy"
                width="150"
                height="100"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
