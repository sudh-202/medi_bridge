import Image from "next/image";
const Blog = () => {
    return ( 
        <main className="flex flex-col justify-center items-center my-[4vw]">
        <h2 className="text-[2.5vw] font-semibold text-center">Featured Blog, Articles and news</h2>
        <Image src="/blogs.webp" alt='news1' width={1200} height={100} className=' mx-auto my-20'/>
        <button className="bg-[#F5F6E5] rounded-2xl px-[3vw] py-[1vw] font-semibold">Read More {`>`}</button>
        </main>
     );
}
 
export default Blog;
