import Image from 'next/image';
import './globals.css';

export default function Home() {
  return (
    <main class='flex justify-center items-center min-h-screen bg-customYellow'>
      <section class='flex flex-col bg-white px-2 py-10 border-2 border-black rounded-3xl shadow-2xl'>
        <div class='w-96 px-3'>
          <Image src='./illustration-article.svg' class='mb-6 rounded-xl ' alt='' width={350}  height={150}/>
          <h3 class='bg-customYellow px-3 py-1 inline-block rounded font-customExtraBold font-bold text-sm'>Learning</h3>
          <h3 class='font-customNormal font-customSemiBold mt-3'>Published 21 Dec 2023</h3>
          <h1 class='text-customYellow font-customExtraBold font-bold text-2xl mt-2'>HTML & CSS foundations</h1>
          <h2 class='text-xl mt-2'>These languages are the backbone of every website defining structure content and presentation.</h2>
        </div>
        <div class='flex items-center mt-5 px-2'>
          <Image src='./image-avatar.png' class='mr-3' alt='' width={50}  height={50}/>
          <h3 class='text-customBlack font-customBold font-extrabold'>Greg Hooper</h3>
        </div>
      </section>
    </main>
  );
}
