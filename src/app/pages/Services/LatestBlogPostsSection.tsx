import {BlogItem} from "@/app/components/Services/BlogItem"

interface BlogPost {
    "title": string,
    "date": string,
    "username": string,
    "tags": string[],
    src: string,
    "url": string,
}

interface Schema {
    latestBlogs: BlogPost[]
}

export const LatestBlogPostsSection: React.FC<{ content: Schema }> = ({content}) => {

    return (
        <section className="flex flex-col gap-[28px] md:mb-[100px] p-2 text-white bg-black">
            <div className="flex flex-col md:flex-row gap-2 justify-between">
                <p className="md:w-[138px] font-objective font-medium md:text-[40px] text-[30px] leading-[44px] tracking-[-0.04em] flex-none flex-grow-0">
                    Latest Blogs
                </p>
                <div className="max-w-96 md:flex items-center hidden">
                    <a className="text-[16px] leading-[16.61px] underline decoration-gray-400" href="">View More</a>
                </div>
            </div>
            <div className="items-start grid grid-cols-1  md:grid-cols-2 p-0 gap-[32px] self-stretch flex-grow-0">
                {content.latestBlogs.map((blog, index) =>
                    <BlogItem
                        key={index}
                        title={blog.title}
                        date={blog.date}
                        username={blog.username}
                        src={blog.src}
                        tags={blog.tags}
                        url={blog.url}
                    />
                )}
            </div>
            <a className="md:hidden flex w-[266px] bg-transparent p-[10px] gap-[10px] border border-white rounded-[29px] text-[16px] justify-center">View more</a>
        </section>
    );
}
