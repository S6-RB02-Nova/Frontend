/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

function Landing() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="py-2 md:py-26">
      <div className="container px-6 m-auto text-gray-500 md:px-12 xl:px-0">
        <div className="flex items-end bg-white rounded-2xl shadow-xl px-8 py-12 mb-8 sm:px-12 lg:px-8 max-w-[48em] md:w-3/4 mx-auto lg:mx-0">
          <div className="space-y-4 mb-18">
            <h3 className="text-2xl font-semibold capitalize text-infiniot-green">
              Welcome back {session?.user?.name}
            </h3>
            <p className="mb-6">
              While you were away, you&apos;ve gotten <strong>12 </strong>new notifications.
            </p>
            <div className="">
              <button
                onClick={() => router.push('/notifications')}
                className="w-48 p-3 mt-4 text-center text-white cursor-pointer bg-infiniot-green rounded-xl"
              >
                View notifications
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 mx-auto md:w-3/4 lg:w-full lg:grid-cols-3">
          <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 lg:max-h-[32em]">
            <div className="space-y-4 ">
              <h3 className="text-2xl font-semibold text-infiniot-green">Consumption dashboard</h3>
              <p className="mb-6">
                View your daily, weekly or monthly energy consumption, read your notifications or
                check your stored energy!
              </p>
              <p
                onClick={() => router.push('/consumption')}
                className="block font-medium cursor-pointer text-infiniot-green"
              >
                Visit dashboard
              </p>
            </div>
            <img
              src="https://i.ibb.co/KzFq1PV/plug-green.png"
              //src="https://i.ibb.co/zFbh9pD/plug.png"
              className="w-2/4 pt-12 ml-auto cursor-pointer"
              alt="illustration"
              loading="lazy"
              width="900"
              height="400"
              onClick={() => router.push('/consumption')}
            ></img>
          </div>
          <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 lg:max-h-[32em]">
            <div className="space-y-4 ">
              <h3 className="text-2xl font-semibold text-infiniot-green">Production dashboard</h3>
              <p className="mb-6">
                See how much energy you&apos;ve produced over the past day, week or month, check how
                much energy you&apos;ve stored or the amount of money you&apos;ve saved.
              </p>
              <p
                onClick={() => router.push('/production')}
                className="block font-medium cursor-pointer text-infiniot-green"
              >
                Visit dashboard
              </p>
            </div>
            <img
              src="https://i.ibb.co/20zpgfy/solar-panel-svgrepo-com.png"
              className="w-2/4 pt-12 ml-auto cursor-pointer"
              alt="illustration"
              loading="lazy"
              width="150"
              height="100"
              onClick={() => router.push('/production')}
            ></img>
          </div>
          <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 lg:max-h-[32em]">
            <div className="space-y-4 ">
              <h3 className="text-2xl font-semibold text-infiniot-green">Market dashboard</h3>
              <p className="mb-6">
                Check the energy market and see what the prices are like, you can sell or buy energy
                here.
              </p>
              <p
                onClick={() => router.push('/market')}
                className="block font-medium cursor-pointer text-infiniot-green"
              >
                Visit dashboard
              </p>
            </div>
            <img
              src="https://i.ibb.co/nk949SD/marketgraph.png"
              className="w-2/4 pt-12 ml-auto cursor-pointer"
              alt="illustration"
              loading="lazy"
              width="150"
              height="100"
              onClick={() => router.push('/market')}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
