import React from "react";
import Image from "next/image"; // Import Image from Next.js

export default function Logos() {
  return (
    <div className="mt-8 w-full flex flex-wrap justify-between py-5">
      {/* Use Image component for each logo */}
      <Image src="/milestone2/company1.png" alt="company" className="w-1/7 md:w-1/8 bg-cover" width={150} height={50} />
      <Image src="/milestone2/company2.png" alt="company" className="w-1/7 md:w-1/8 bg-cover" width={150} height={50} />
      <Image src="/milestone2/company3.png" alt="company" className="w-1/7 md:w-1/8 bg-cover" width={150} height={50} />
      <Image src="/milestone2/company4.png" alt="company" className="w-1/7 md:w-1/8 bg-cover" width={150} height={50} />
      <Image src="/milestone2/company5.png" alt="company" className="w-1/7 md:w-1/8 bg-cover" width={150} height={50} />
      <Image src="/milestone2/company7.png" alt="company" className="w-1/7 md:w-1/8 bg-cover" width={150} height={50} />
      <Image src="/milestone2/company6.png" alt="company" className="w-1/7 md:w-1/8 bg-cover" width={150} height={50} />
    </div>
  );
}
