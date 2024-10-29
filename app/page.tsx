'use client'

import { 
  CldUploadWidget,
} from "next-cloudinary";



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="flex flex-col items-center justify-between">
        <CldUploadWidget 
        uploadPreset="next-app"
        >
          {({open}) => {
            return (
              <button onClick={() => open()}>Upload an Image</button>
          );
          }}
        </CldUploadWidget>
      </section>
    </div>
  );
}
