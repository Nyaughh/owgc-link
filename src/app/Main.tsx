import Image from 'next/image'

const Main = () => {
    return (
        <div className="flex h-screen w-full bg-black bg-grid-white/[0.2] relative items-center justify-center min-h-screen flex-col">
            <div className="mb-10">
                {' '}
                {/* Added flex-grow and flex properties */}
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/overwatch.svg"
                    alt="Overwatch Logo"
                    width={300}
                    height={62}
                    priority
                />
            </div>

            <div className="mb-32 flex flex-col space-y-4 justify-center items-center w-full max-w-xs">
                <a
                    href="https://chat.whatsapp.com/Dbf2dE08gdAHA7wrSHVjil"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-lg flex items-center justify-center w-full" // Added flex, items-center, justify-center, and w-full
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`font-semibold mr-2`}>Join WhatsApp</h2> {/* Added margin */}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </a>
                <a
                    href="https://discord.com/invite/kjGfYEmAQk"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-lg flex items-center justify-center w-full" // Added flex, items-center, justify-center, and w-full
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`font-semibold mr-2`}>Join Discord</h2> {/* Added margin */}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Main
